let push = require("web-push");
let vapidkeys = {
    publicKey: 'BJJGXe_UI1N4uuyLGwfXQ1p3LUPYQnSlo9K_QtMAmRBsIYYoiqtW6gppS8mg_TnRRktW37hnPgAa1s_ncB9yBIU',
    privateKey: 'R_PhSYZMWN3-zFXmTwphBBGwTenvu9nf1SXNHDw3iDo'
}

push.setVapidDetails('mailto:anupam@frappe.io', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {}
push.sendNotification(sub, "Test Message")