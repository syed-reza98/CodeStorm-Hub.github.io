// Service Worker for CodeStorm Hub
// Basic caching strategy for improved performance

const CACHE_NAME = 'codestorm-hub-v1.1';
const STATIC_ASSETS = [
  '/',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/logo.svg',
  '/assets/images/favicon.ico',
  '/about/',
  '/services/', 
  '/portfolio/',
  '/contact/',
  '/404.html'
];

const DYNAMIC_CACHE_NAME = 'codestorm-hub-dynamic-v1.1';
const IMAGES_CACHE_NAME = 'codestorm-hub-images-v1.1';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache assets', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE_NAME && cache !== IMAGES_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // If network fails, try to serve a fallback page
            if (event.request.mode === 'navigate') {
              return caches.match('/404.html');
            }
          });
      })
  );
});

// Background sync for form submissions (when supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Handle push notifications (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/images/icon-192x192.png',
      badge: '/assets/images/badge-72x72.png',
      tag: data.tag || 'default',
      requireInteraction: true
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});

// Sync contact form submissions
async function syncContactForm() {
  try {
    // This would handle any queued form submissions
    console.log('Service Worker: Syncing contact form submissions');
    // Implementation would depend on your backend
  } catch (error) {
    console.error('Service Worker: Failed to sync contact form', error);
  }
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    // Log performance metrics
    console.log('Service Worker: Performance mark', event.data);
  }
});