self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("counter-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js",
                "/manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
// Service Worker per le notifiche push
self.addEventListener('push', function(event) {
    var data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'icon.png'
    });
});
