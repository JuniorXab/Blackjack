// ═══════════════════════════════════════════
//  BlackJack Royale — Service Worker
//  Cache name usa timestamp → se auto-actualiza
//  solo subiendo index.html
// ═══════════════════════════════════════════

// ⚡ NETWORK-FIRST para TODO — así index.html siempre llega fresco
//    sin necesidad de cambiar este archivo

const CACHE_NAME = 'bj-royale-nf-1';

const NETWORK_ONLY = [
  'firebaseio.com',
  'googleapis.com',
  'gstatic.com/firebasejs'
];

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (NETWORK_ONLY.some(d => url.includes(d))) {
    event.respondWith(fetch(event.request));
    return;
  }
  if (event.request.method !== 'GET') return;

  // Network-first para todo
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          caches.open(CACHE_NAME).then(c => c.put(event.request, response.clone()));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) {
        if (c.url.includes('Blackjack') || c.url.includes('blackjack')) return c.focus();
      }
      return clients.openWindow('./');
    })
  );
});
