"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","c061ea305800d562d31937ca10e587b5"],["/portfolio/static/css/main.6f4da3ec.css","0a56cec2e79f2a09e0b7ce792eb59a46"],["/portfolio/static/js/main.3045b538.js","ac37049d506344aa59ea31c61a58e77a"],["/portfolio/static/media/board.f44089fd.jpeg","f44089fd4217ed027c9c7290fb204c6c"],["/portfolio/static/media/book.81515f3e.jpeg","81515f3e090a456844a2eebc4145e092"],["/portfolio/static/media/building.d909d94b.jpeg","d909d94bdaf42953280286882f258eb8"],["/portfolio/static/media/bulb.d9b4c7fe.jpeg","d9b4c7feee64d22b3f75b1a5975541c1"],["/portfolio/static/media/calculation.556c4573.jpeg","556c4573139158ad63f4a53f01c7ec01"],["/portfolio/static/media/calendar.1d263704.jpeg","1d2637048a5eff059ab0750c40297c9d"],["/portfolio/static/media/cv.1589ad07.jpg","1589ad0716146bc98d93f8fe5b4b8523"],["/portfolio/static/media/keyboard.3b0d45f1.jpeg","3b0d45f13d810f9c7f1df9fa5bac9e4b"],["/portfolio/static/media/metal.471e0798.jpeg","471e0798606673b472df19c6be3928e6"],["/portfolio/static/media/newyork.9fbebc67.jpeg","9fbebc6758cb8daafce95b5b349e1fa8"],["/portfolio/static/media/office.174cd460.jpeg","174cd46037dc777067f983151bb18736"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});