/* Appli de Léna – Service Worker (cache-first) */
const CACHE = 'lena-pwa-v1';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k === CACHE ? null : caches.delete(k)));
    self.clients.claim();
  })());
});

// Cache-first for same-origin; network-first for navigations
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const net = await fetch(e.request);
        const cache = await caches.open(CACHE);
        cache.put(e.request, net.clone());
        return net;
      } catch (err) {
        const cache = await caches.open(CACHE);
        const offline = await cache.match('./index.html');
        return offline || new Response('Offline', {status: 503});
      }
    })());
    return;
  }

  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      if (cached) return cached;
      try {
        const net = await fetch(e.request);
        cache.put(e.request, net.clone());
        return net;
      } catch (err) {
        return cached || Promise.reject(err);
      }
    })());
  } else {
    // Cross-origin (CDN) – try network, then use cache if present
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const net = await fetch(e.request, {mode: 'no-cors'});
        cache.put(e.request, net.clone());
        return net;
      } catch (err) {
        const cached = await cache.match(e.request);
        return cached || Response.error();
      }
    })());
  }
});
