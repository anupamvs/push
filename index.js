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
        userVisibleOnly: true,
        applicationServerKey: 'BJJGXe_UI1N4uuyLGwfXQ1p3LUPYQnSlo9K_QtMAmRBsIYYoiqtW6gppS8mg_TnRRktW37hnPgAa1s_ncB9yBIU'
      }).then(function(sub) {
        console.log(JSON.stringify(sub));
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