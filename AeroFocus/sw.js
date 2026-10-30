// Önbelleğin adını ve güncel sürümünü tanımlar (v4)
const CACHE_NAME = "aerofocus-cache-v5";

// İnternetsiz (çevrimdışı) çalışması için cihazın hafızasına kaydedilecek dosyaların listesi
const ASSETS_TO_CACHE = [
  "./",                // Ana dizini önbelleğe alır
  "./index.html",      // Sayfa iskeletini tutan HTML dosyasını önbelleğe alır
  "./style.css",       // Görsel tasarım stil dosyasını önbelleğe alır
  "./index.js",        // Sayacın çalışma mantığını barındıran JS dosyasını önbelleğe alır
  "./manifest.json",   // Uygulama kurulum yapılandırmasını önbelleğe alır
  "./icon-192.png",    // 192px boyutundaki uygulama ikonunu önbelleğe alır
  "./icon-512.png"     // 512px boyutundaki yüksek çözünürlüklü ikonu önbelleğe alır
];

// Service Worker cihaza ilk kurulduğunda çalışan 'install' olayını dinler
self.addEventListener("install", (event) => {
  // Önbelleğe alma işlemi tamamlanana kadar kurulumun bitmesini bekletir
  event.waitUntil(
    // Belirlenen isimle tarayıcıda bir önbellek deposu açar
    caches.open(CACHE_NAME).then((cache) => {
      // Listedeki tüm dosya yollarını indirip hafızaya/önbelleğe depolar
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Yeni Service Worker'ın anında aktif olmasını sağlar
  self.skipWaiting();
});

// Eski önbellekleri temizleyen 'activate' olayını dinler
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            // Eski sürüme ait önbellekleri siler
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Tüm sekmeleri anında yeni service worker ile denetlemeye başlar
  self.clients.claim();
});

// Sayfa her dosya veya kod istediğinde araya giren 'fetch' olayını dinler
self.addEventListener("fetch", (event) => {
  // Tarayıcının varsayılan ağ isteğini yakalayıp yanıt döndürür
  event.respondWith(
    // İstenen dosyanın önbellekte kayıtlı olup olmadığını kontrol eder
    caches.match(event.request).then((response) => {
      // Dosya önbellekte varsa doğrudan hafızadan verir (internetsiz çalıştırır), yoksa internetten çeker
      return response || fetch(event.request);
    })
  );
});