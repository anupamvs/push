async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      'BJJGXe_UI1N4uuyLGwfXQ1p3LUPYQnSlo9K_QtMAmRBsIYYoiqtW6gppS8mg_TnRRktW37hnPgAa1s_ncB9yBIU'
  });
  console.log(JSON.stringify(push));
}

if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./service_worker.js');
    console.log(sw);
  });
}