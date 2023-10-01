// sw.js

const CACHE_NAME = 'my-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  // 캐싱할 다른 리소스 추가
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에서 리소스를 찾으면 반환하고, 찾지 못하면 네트워크에서 가져옵니다.
        return response || fetch(event.request);
      })
  );
});