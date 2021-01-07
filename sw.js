var VERSION = "1.0.2"; // Update this number on major Update
var APP_PREFIX = "ACNH Beginners";
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  "/acnhbeginners/",
  "/acnhbeginners/index.html",
  "https://chibisnorlax.github.io/acnhbeginners/walkthrough/day%201/",
  "https://chibisnorlax.github.io/acnhbeginners/walkthrough/day%202/",
  "https://chibisnorlax.github.io/acnhbeginners/walkthrough/day%203/",
  "https://chibisnorlax.github.io/acnhbeginners/walkthrough/day%204/",
  "https://chibisnorlax.github.io/acnhbeginners/walkthrough/day%205-7/",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/icomoon.ttf",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/icomoon.woff",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/icomoon.eot",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/icomoon.woff2",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/icomoon.svg",
  "https://chibisnorlax.github.io/acnhfaq/assets/fonts/font.css",
  "https://chibisnorlax.github.io/acnhbeginners/assets/css/just-the-docs-default.css",
  "https://chibisnorlax.github.io/acnhbeginners/assets/css/just-the-docs-custom.css",
  "https://chibisnorlax.github.io/acnhbeginners/assets/js/vendor/lunr.min.js",
  "https://chibisnorlax.github.io/acnhbeginners/assets/js/just-the-docs.js",
  "https://chibisnorlax.github.io/acnhbeginners/serviceloader.js",
];
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        return request;
      } else {
        return fetch(e.request);
      }
    })
  );
});
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS);
    })
  );
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
