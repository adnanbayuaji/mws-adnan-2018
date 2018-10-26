let staticCacheName = 'my-mws';

self.addEventListener('install', function(event) {
    console.log('Installing...');

    // Create new caches
    let urlsToCaches = [
        '/index.html',
        '/style.css',
        '/images/adnan.jpg',
        '/images/kabah.jpg',
        '/images/b.ico',
        '/main.js',
        '/project1/tambahangka.html',
        '/project1/add2numbers.js',
        '/project2/map.html',
        '/project2/leaflet.js',
        '/project2/leaflet.css',
        '/project2/mapbox.js',
        '/project2/styles.css',
        '/project3/fetch.html',
        '/project3/fetch.js',
        '/project3/data.json'
    ];

    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(urlsToCaches);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activating...');

    // Update all caches
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('my-') && cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


self.addEventListener('fetch', function(event) {
    //console.log('Fetching...');

    event.respondWith(
        caches.match(event.request).then(function(response){
            //console.log(response);

            return response || fetch(event.request).then(function(response) {
                return caches.open(staticCacheName).then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            })
        })
    );
});
//intercept : kalo ngga konek, ambil gambarnya ke offline
//dengan catch