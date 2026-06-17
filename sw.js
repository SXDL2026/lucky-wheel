const CACHE = 'lucky-wheel-v1';
const FILES = ['/lucky-wheel/', '/lucky-wheel/index.html', '/lucky-wheel/manifest.json', '/lucky-wheel/icon.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
