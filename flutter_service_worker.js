'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "11642de0cd4726d76043bc924c63204d",
"index.html": "58463c8a36cc443b1d8b224d1d668f03",
"/": "58463c8a36cc443b1d8b224d1d668f03",
"main.dart.js": "72cd69afff0908b867f4f29822b5c85f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/logo_willdand_dark.png": "2a8e9195f983b2abdb3de971086a8a92",
"icons/logo_wiildand_light.png": "ffdd4713337d2cd2d433539787759375",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7d5899385dbb57c8a6785470eea37e0",
"assets/AssetManifest.json": "1218eb11a659d8f5a9a598dc944f58d6",
"assets/NOTICES": "a54170db84561a4b4b69752cd3329aaa",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/CV_2021-2022.pdf": "55a355b5d85337b7980746f0529ea0bf",
"assets/assets/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/blog/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/blog/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/blog/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/logo/logoOrsacMontfleuri.png": "342f81ad17d81f517dd369a23dc26b46",
"assets/assets/logo/360&1.png": "8d32c934486688437710e035dcd6365b",
"assets/assets/logo/keimyung_university.png": "3070c343aadb334257aa744bdf5240dd",
"assets/assets/logo/language/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/logo/language/php-original.svg": "fea4d54f3adf48d44cedd0a745841a4a",
"assets/assets/logo/language/symfony-original.svg": "10428a5b3498e7f8c5f686f29a71f9bc",
"assets/assets/logo/language/cplusplus-original.svg": "951e0f370482b5861bb0744ddb24ae70",
"assets/assets/logo/language/mysql-original.svg": "9a87849cee36242dc6ab7399078e0869",
"assets/assets/logo/language/c-original.svg": "7984f1f99e00b58e6402c5624e1dc298",
"assets/assets/logo/language/python-original.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/logo/language/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/logo/language/nodejs-original.svg": "d5e1cd8cbfe460c028711921565399d6",
"assets/assets/logo/language/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/assets/logo/logo_wiildand_dark.png": "5ec226da291d4d75bb327978cb828ae5",
"assets/assets/logo/logo360&1.jpeg": "0e7f493c3b0764c20d5315f993484d01",
"assets/assets/logo/logo_dark.png": "172c6851a256eb6ca04d9b99cc231ac8",
"assets/assets/logo/logo_wiildand_light.png": "838919b134865baaa2c568e999a1cfde",
"assets/assets/logo/logo_light.png": "708b0d915b6cededbda03f881683e529",
"assets/assets/logo/logo_willdand.png": "2a8e9195f983b2abdb3de971086a8a92",
"assets/assets/logo/logoEpitech.png": "c106b8f42fb370763dd0ded48478739e",
"assets/assets/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/portfolio/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/portfolio/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/portfolio/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/portfolio/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/portfolio/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/portfolio/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/dev/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/dev/dev_header.png": "6e4b03020cee4b554c35ef65a45b0a05",
"assets/assets/dev/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/france_flag.png": "aba7667f3a646bd4205a799161df1888",
"assets/assets/dots/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/dots/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/dots/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/blob/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/blob/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/blob/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/blob/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/blob/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/blob/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
