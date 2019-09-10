// Asignar nombre y version de la cache

const CACHE_NAME = 'v1_cache_Happy_Dogs';

// Ficheros a cachear en la app

var urlsToCache = [
	'/index.html',
	'/jquery.easing.1.3.js',
	'/jquery.min.js',
	'/main.js',
	'/manifest.json',
	'/sw.js',
	'/css/styles.css',
	'/img/icons/android-icon-36x36.png',
	'/img/icons/android-icon-48x48.png',
	'/img/icons/android-icon-72x72.png',
	'/img/icons/android-icon-96x96.png',
	'/img/icons/android-icon-144x144.png',
	'/img/icons/android-icon-192x192.png',
	'/img/portfolio/botonMenu.png',
	'/img/portfolio/avatar.png',
	'/img/portfolio/closeBoton.png',
	'/img/portfolio/facebook.png',
	'/img/portfolio/facebook-hover.png',
	'/img/portfolio/instagram.png',
	'/img/portfolio/instagram-hover.png',
	'/img/portfolio/twitter.png',
	'/img/portfolio/twitter-hover.png',
	'/img/portfolio/whatsapp.png',
	'/img/portfolio/whatsapp-hover.png',
	'/img/portfolio/paseo.png',
	'/img/portfolio/comida.png',
	'/img/portfolio/vet.png',
	'/img/portfolio/pelu.png',
	'/img/portfolio/school.png',
	'/img/portfolio/resi.png',
	'/fonts/'
];

// Evento install (instalacion y guardar en cache los elementos

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(CACHE_NAME)
			  .then(cache => {
			  	  return cache.addAll(urlsToCache)
			  	  			  .then(() => {
			  	  			  	self.skipWaiting();
			  	  			  });
 
			  })
	  		  .catch(err => console.log('No se ha registrado el cache', err))
	);
});

//self.addEventListener('install', function(event) {
  // Perform install steps
  //event.waitUntil(
    //caches.open(CACHE_NAME)
      //.then(function(cache) {
        //console.log('Opened cache');
        //return cache.addAll(urlsToCache);
      //})
  //);
//});

// Evento activate
// Que la app funcione sin conexión
self.addEventListener('activate', e => {
	const cacheWhitelist = [CACHE_NAME];
 
	e.waitUntil(
		caches.keys()
			  .then(cacheNames => {
			  	return Promise.all(
			  		cacheNames.map(cacheName => {
 
			  			if(cacheWhitelist.indexOf(cacheName) === -1){
			  				// Borrar elementos que no se necesitan
			  				return caches.delete(cacheName);
			  			}
 
			  		})
			  	);
			  })
			  .then(() => {
			  	// Activar cache
			  	self.clients.claim();
			  })
 
	);
 
});

// Evento fetch
self.addEventListener('fetch', e => {
 
	e.respondWith(
		caches.match(e.request)
			  .then(res => {
			  	 if(res){
			  	 	// devuelvo datos desde cache
			  	 	return res;
			  	 }
 
			  	 return fetch(e.request);
			  })
 
	);
 
});
