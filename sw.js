// 調達マスターへの道 - Service Worker
// PWAオフライン対応

const CACHE_NAME = 'procurement-master-v5';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './scenarios.js',
    './questions-data.js',
    './exam-questions.js',
    './exam-mode.js',
    './manifest.json',
    './icon.svg'
];

// インストール時のキャッシュ
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('キャッシュを開きました');
                return cache.addAll(urlsToCache);
            })
    );
});

// フェッチ時のキャッシュ戦略（Cache First）
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // キャッシュにあればそれを返す
                if (response) {
                    return response;
                }

                // なければネットワークから取得
                return fetch(event.request).then(response => {
                    // レスポンスが有効かチェック
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // レスポンスをクローンしてキャッシュに保存
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                // オフライン時のフォールバック
                return caches.match('./index.html');
            })
    );
});

// アクティベート時の古いキャッシュ削除
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
