self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('paroquia-v1').then((cache) => cache.addAll([
      '/appnsccarmo/',
      '/appnsccarmo/index.html'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
