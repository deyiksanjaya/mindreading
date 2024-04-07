// Service worker code

// Listen for the 'install' event
self.addEventListener('install', function(event) {
  // Perform installation steps
  console.log('Service Worker installed');
});

// Listen for the 'activate' event
self.addEventListener('activate', function(event) {
  // Perform activation steps
  console.log('Service Worker activated');
});

// Listen for fetch events
self.addEventListener('fetch', function(event) {
  // Handle fetch events
  console.log('Fetch intercepted:', event.request.url);
});
