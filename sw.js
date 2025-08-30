// CPP Master - Service Worker
// PWA機能とオフライン対応

const CACHE_NAME = 'cpp-master-v1.0.0';
const STATIC_CACHE = 'cpp-static-v1';
const DYNAMIC_CACHE = 'cpp-dynamic-v1';

// キャッシュするファイル一覧
const STATIC_FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/textbook-data.js',
    '/quiz-data.js',
    '/icon-generator.js',
    '/manifest.json',
    '/icon-72.svg',
    '/icon-96.svg',
    '/icon-128.svg',
    '/icon-144.svg',
    '/icon-152.svg',
    '/icon-192.svg',
    '/icon-384.svg',
    '/icon-512.svg',
    '/icon-base.svg',
    // Google Fonts
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// 動的キャッシュ対象パターン
const CACHE_PATTERNS = [
    /^https:\/\/fonts\.googleapis\.com/,
    /^https:\/\/fonts\.gstatic\.com/,
    /^https:\/\/cdnjs\.cloudflare\.com/
];

// インストール時の処理
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('Service Worker: Caching static files...');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Static files cached');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Service Worker: Cache failed:', error);
            })
    );
});

// アクティベート時の処理
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => {
                        return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
                    })
                    .map(cacheName => {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    })
            );
        }).then(() => {
            console.log('Service Worker: Activated');
            return self.clients.claim();
        })
    );
});

// フェッチ時の処理
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    // HTMLリクエストの処理
    if (request.headers.get('accept').includes('text/html')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // 成功時はレスポンスを返し、動的キャッシュに保存
                    const responseClone = response.clone();
                    caches.open(DYNAMIC_CACHE)
                        .then(cache => cache.put(request, responseClone));
                    return response;
                })
                .catch(() => {
                    // 失敗時はキャッシュから返す
                    return caches.match(request)
                        .then(cachedResponse => {
                            return cachedResponse || caches.match('/index.html');
                        });
                })
        );
        return;
    }

    // 静的リソースの処理
    if (STATIC_FILES.includes(url.pathname) || 
        CACHE_PATTERNS.some(pattern => pattern.test(request.url))) {
        event.respondWith(
            caches.match(request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    return fetch(request)
                        .then(response => {
                            // 動的キャッシュに保存
                            const responseClone = response.clone();
                            caches.open(DYNAMIC_CACHE)
                                .then(cache => {
                                    cache.put(request, responseClone);
                                });
                            return response;
                        })
                        .catch(() => {
                            // フォールバック処理
                            if (request.destination === 'image') {
                                return new Response(
                                    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                                        <rect width="200" height="200" fill="#f0f0f0"/>
                                        <text x="100" y="100" text-anchor="middle" fill="#999" font-size="14">画像なし</text>
                                    </svg>`,
                                    { headers: { 'Content-Type': 'image/svg+xml' } }
                                );
                            }
                        });
                })
        );
        return;
    }

    // その他のリクエストは通常通り処理
    event.respondWith(
        fetch(request)
            .catch(() => {
                // ネットワークエラー時の処理
                return new Response('オフラインです。ネットワーク接続を確認してください。', {
                    status: 408,
                    headers: { 'Content-Type': 'text/plain; charset=UTF-8' }
                });
            })
    );
});

// バックグラウンド同期
self.addEventListener('sync', event => {
    console.log('Service Worker: Background sync triggered');
    
    if (event.tag === 'study-progress-sync') {
        event.waitUntil(syncStudyProgress());
    }
    
    if (event.tag === 'quiz-results-sync') {
        event.waitUntil(syncQuizResults());
    }
});

// 学習進捗の同期
async function syncStudyProgress() {
    try {
        const studyData = await getStoredData('study-progress-queue');
        if (studyData.length > 0) {
            await fetch('/api/sync/study-progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studyData)
            });
            
            // 同期成功後、キューをクリア
            await clearStoredData('study-progress-queue');
            console.log('Study progress synced successfully');
        }
    } catch (error) {
        console.error('Failed to sync study progress:', error);
    }
}

// クイズ結果の同期
async function syncQuizResults() {
    try {
        const quizData = await getStoredData('quiz-results-queue');
        if (quizData.length > 0) {
            await fetch('/api/sync/quiz-results', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(quizData)
            });
            
            await clearStoredData('quiz-results-queue');
            console.log('Quiz results synced successfully');
        }
    } catch (error) {
        console.error('Failed to sync quiz results:', error);
    }
}

// プッシュ通知の処理
self.addEventListener('push', event => {
    console.log('Service Worker: Push received');
    
    const options = {
        body: 'CPP Masterで今日の学習を始めましょう！',
        icon: '/icon-192.png',
        badge: '/icon-72.png',
        vibrate: [200, 100, 200],
        data: {
            action: 'open-app',
            url: '/?from=push'
        },
        actions: [
            {
                action: 'study',
                title: '学習開始',
                icon: '/icon-96.png'
            },
            {
                action: 'quiz',
                title: '問題演習',
                icon: '/icon-96.png'
            }
        ],
        requireInteraction: true,
        tag: 'daily-reminder'
    };

    if (event.data) {
        const payload = event.data.json();
        options.body = payload.body || options.body;
        options.data = { ...options.data, ...payload.data };
    }

    event.waitUntil(
        self.registration.showNotification('CPP Master', options)
    );
});

// 通知クリックの処理
self.addEventListener('notificationclick', event => {
    console.log('Service Worker: Notification clicked');
    
    event.notification.close();
    
    const action = event.action;
    const data = event.notification.data;
    
    let url = data.url || '/';
    
    if (action === 'study') {
        url = '/?action=study';
    } else if (action === 'quiz') {
        url = '/?action=quiz';
    }
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                // 既に開いているタブがあるか確認
                for (let client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        client.focus();
                        client.postMessage({
                            type: 'NOTIFICATION_CLICK',
                            action: action,
                            data: data
                        });
                        return;
                    }
                }
                
                // 新しいタブで開く
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
    );
});

// ユーティリティ関数

// IndexedDBからデータを取得
async function getStoredData(storeName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('cpp-master-db', 1);
        
        request.onerror = () => reject(request.error);
        
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const getRequest = store.getAll();
            
            getRequest.onsuccess = () => resolve(getRequest.result || []);
            getRequest.onerror = () => reject(getRequest.error);
        };
        
        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { autoIncrement: true });
            }
        };
    });
}

// IndexedDBのデータをクリア
async function clearStoredData(storeName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('cpp-master-db', 1);
        
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const clearRequest = store.clear();
            
            clearRequest.onsuccess = () => resolve();
            clearRequest.onerror = () => reject(clearRequest.error);
        };
        
        request.onerror = () => reject(request.error);
    });
}

// キャッシュサイズ管理
async function manageCacheSize(cacheName, maxEntries = 50) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    if (keys.length > maxEntries) {
        const keysToDelete = keys.slice(0, keys.length - maxEntries);
        await Promise.all(keysToDelete.map(key => cache.delete(key)));
        console.log(`Cache ${cacheName} trimmed to ${maxEntries} entries`);
    }
}

// 定期的なキャッシュクリーンアップ
setInterval(() => {
    manageCacheSize(DYNAMIC_CACHE, 100);
}, 24 * 60 * 60 * 1000); // 24時間ごと

// メッセージハンドリング
self.addEventListener('message', event => {
    const { type, data } = event.data;
    
    switch (type) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;
        case 'CACHE_STUDY_DATA':
            cacheStudyData(data);
            break;
        case 'SYNC_REQUEST':
            event.waitUntil(performSync(data.syncType));
            break;
        default:
            console.log('Unknown message type:', type);
    }
});

// 学習データのキャッシュ
async function cacheStudyData(data) {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const response = new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' }
        });
        await cache.put('/api/study-data', response);
        console.log('Study data cached successfully');
    } catch (error) {
        console.error('Failed to cache study data:', error);
    }
}

// 手動同期実行
async function performSync(syncType) {
    switch (syncType) {
        case 'study-progress':
            await syncStudyProgress();
            break;
        case 'quiz-results':
            await syncQuizResults();
            break;
        default:
            console.log('Unknown sync type:', syncType);
    }
}