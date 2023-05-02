// public/sw.js

// cacheName은 캐시의 이름을 정의합니다.
const cacheName = 'my-pwa-cache-v1'

// 캐싱할 파일의 리스트를 작성합니다.
const filesToCache = [
  '/',
  '/index.html',
  '/logo.png',
  // 여기에 캐싱할 파일을 추가합니다.
]

// Service Worker가 설치될 때 캐싱을 수행합니다.
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache)
    })
  )
})

// 요청에 대한 캐시 검사를 수행합니다.
self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})