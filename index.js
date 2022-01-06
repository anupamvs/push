if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./service_worker.js');
    console.log(sw);
  });
}

function subscribe() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function(reg) {

      reg.pushManager.subscribe({
        userVisibleOnly: true
      }).then(function(sub) {
        console.log(sub);
      }).catch(function(e) {
        if (Notification.permission === 'denied') {
          console.warn('Permission for notifications was denied');
        } else {
          console.error('Unable to subscribe to push', e);
        }
      });
    })
  }
}