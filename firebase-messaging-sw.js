importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBfLJ86Vj_i-rZBh0VD9iRYYttp013CBms",
  authDomain: "terrefrance-effce.firebaseapp.com",
  projectId: "terrefrance-effce",
  storageBucket: "terrefrance-effce.firebasestorage.app",
  messagingSenderId: "623876901903",
  appId: "1:623876901903:web:61fdc1da62e7bb9858677a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body: body || "TerreFrance",
    icon: icon || "/icon-192.png",
    badge: "/icon-192.png",
    data: payload.data,
  });
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
