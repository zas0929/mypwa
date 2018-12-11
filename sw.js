'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html", "static/css*"]);

toolbox.router.get('/static/media*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
