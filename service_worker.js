self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Push message no payload';
  }

  var options = {
    body: body
  };
  e.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});