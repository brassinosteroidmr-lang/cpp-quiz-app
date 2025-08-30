// CPP Master - ブラウザ内でSVGからPNGアイコンを生成
// Canvas APIを使用してSVGアイコンをPNG形式に変換

class IconGenerator {
    constructor() {
        this.iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
    }

    /**
     * SVGからPNGアイコンを生成
     */
    async generatePNGIcons() {
        console.log('🎨 PNG アイコンを生成中...');
        
        try {
            // 基本SVGを読み込み
            const svgResponse = await fetch('icon-base.svg');
            const svgText = await svgResponse.text();
            
            const results = [];
            
            for (const size of this.iconSizes) {
                try {
                    const pngBlob = await this.convertSVGToPNG(svgText, size);
                    const success = await this.savePNGIcon(pngBlob, size);
                    results.push({ size, success });
                    
                    if (success) {
                        console.log(`✓ icon-${size}.png を生成しました`);
                    }
                } catch (error) {
                    console.warn(`⚠️ icon-${size}.png の生成に失敗:`, error);
                    results.push({ size, success: false, error });
                }
            }
            
            const successCount = results.filter(r => r.success).length;
            console.log(`🎉 ${successCount}/${this.iconSizes.length} 個のPNGアイコンを生成しました`);
            
            return results;
            
        } catch (error) {
            console.error('アイコン生成に失敗しました:', error);
            return [];
        }
    }

    /**
     * SVGをPNGに変換
     */
    async convertSVGToPNG(svgText, size) {
        return new Promise((resolve, reject) => {
            // SVGを指定サイズに調整
            const adjustedSVG = svgText.replace(
                /width="512" height="512"/,
                `width="${size}" height="${size}"`
            );

            // SVG Blobを作成
            const svgBlob = new Blob([adjustedSVG], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(svgBlob);

            // 画像として読み込み
            const img = new Image();
            
            img.onload = () => {
                try {
                    // Canvas を作成
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    canvas.width = size;
                    canvas.height = size;
                    
                    // 高品質レンダリング設定
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    
                    // SVGをCanvasに描画
                    ctx.drawImage(img, 0, 0, size, size);
                    
                    // PNGとして出力
                    canvas.toBlob((blob) => {
                        URL.revokeObjectURL(url);
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error('Canvas to Blob conversion failed'));
                        }
                    }, 'image/png', 0.95);
                    
                } catch (error) {
                    URL.revokeObjectURL(url);
                    reject(error);
                }
            };
            
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error('SVG loading failed'));
            };
            
            img.src = url;
        });
    }

    /**
     * PNGアイコンを保存（IndexedDBを使用）
     */
    async savePNGIcon(blob, size) {
        try {
            if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                // Service Worker経由でキャッシュに保存
                const arrayBuffer = await blob.arrayBuffer();
                const response = new Response(arrayBuffer, {
                    headers: { 'Content-Type': 'image/png' }
                });
                
                // キャッシュに保存
                const cache = await caches.open('cpp-icons-v1');
                await cache.put(`/icon-${size}.png`, response);
                
                return true;
            }
            
            // IndexedDB に保存（フォールバック）
            return await this.saveToIndexedDB(blob, size);
            
        } catch (error) {
            console.warn(`icon-${size}.png の保存に失敗:`, error);
            return false;
        }
    }

    /**
     * IndexedDBに保存
     */
    async saveToIndexedDB(blob, size) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('cpp-icons', 1);
            
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('icons')) {
                    db.createObjectStore('icons');
                }
            };
            
            request.onsuccess = (e) => {
                const db = e.target.result;
                const transaction = db.transaction(['icons'], 'readwrite');
                const store = transaction.objectStore('icons');
                
                const putRequest = store.put(blob, `icon-${size}.png`);
                
                putRequest.onsuccess = () => resolve(true);
                putRequest.onerror = () => reject(putRequest.error);
            };
            
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * manifest.jsonを更新してPNGアイコンを使用
     */
    async updateManifestForPNG() {
        try {
            const manifestResponse = await fetch('manifest.json');
            const manifest = await manifestResponse.json();
            
            // アイコンをPNG形式に更新
            manifest.icons = manifest.icons.map(icon => ({
                ...icon,
                src: icon.src.replace('.svg', '.png'),
                type: 'image/png'
            }));
            
            // 更新されたmanifestをキャッシュに保存
            const updatedManifest = JSON.stringify(manifest, null, 2);
            const response = new Response(updatedManifest, {
                headers: { 'Content-Type': 'application/json' }
            });
            
            const cache = await caches.open('cpp-icons-v1');
            await cache.put('/manifest.json', response);
            
            console.log('✓ manifest.json を PNG アイコン用に更新しました');
            return true;
            
        } catch (error) {
            console.warn('manifest.json の更新に失敗:', error);
            return false;
        }
    }

    /**
     * 初期化時にPNGアイコン生成を実行
     */
    async initialize() {
        // 既にPNGアイコンが存在するかチェック
        const hasExistingPNGs = await this.checkExistingPNGs();
        
        if (!hasExistingPNGs) {
            console.log('🚀 初回訪問: PNGアイコンを生成します...');
            await this.generatePNGIcons();
            await this.updateManifestForPNG();
        } else {
            console.log('✓ PNGアイコンは既に存在します');
        }
    }

    /**
     * 既存のPNGアイコンをチェック
     */
    async checkExistingPNGs() {
        try {
            const cache = await caches.open('cpp-icons-v1');
            const response = await cache.match('/icon-192.png');
            return !!response;
        } catch (error) {
            return false;
        }
    }
}

// アプリ初期化時に実行
if (typeof window !== 'undefined') {
    window.iconGenerator = new IconGenerator();
    
    // DOM読み込み完了後に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.iconGenerator.initialize();
        });
    } else {
        window.iconGenerator.initialize();
    }
}