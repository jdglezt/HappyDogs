// Asignar nombre y version de la cache

const CACHE_NAME = 'v1_cache_Happy_Dogs';

// Ficheros a cachear en la app

var urlsToCache = [
  './index.html',
  './jquery.easing.1.3.js',
  './jquery.min.js',
  './main.js',
  './manifest.json',
  './new-sw.js',
  './css/styles.css',
  './img/icons/android-icon-36x36.png',
  './img/icons/android-icon-48x48.png',
  './img/icons/android-icon-72x72.png',
  './img/icons/android-icon-96x96.png',
  './img/icons/android-icon-144x144.png',
  './img/icons/android-icon-192x192.png',
  './img/portfolio/botonMenu.png',
  './img/portfolio/avatar.png',
  './img/portfolio/closeBoton.png',
  './img/portfolio/facebook.png',
  './img/portfolio/facebook-hover.png',
  './img/portfolio/instagram.png',
  './img/portfolio/instagram-hover.png',
  './img/portfolio/twitter.png',
  './img/portfolio/twitter-hover.png',
  './img/portfolio/whatsapp.png',
  './img/portfolio/whatsapp-hover.png',
  './img/portfolio/paseo.png',
  './img/portfolio/comida.png',
  './img/portfolio/vet.png',
  './img/portfolio/pelu.png',
  './img/portfolio/school.png',
  './img/portfolio/resi.png'
];

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})
 
//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]
 
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})
 
//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})