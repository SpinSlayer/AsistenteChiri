function showNotification() {
    const notification = new Notification("Asistente Chiri", {
        body: "Bienvenido a tu asistente personalizado",
        icon: "alexa.ico"
    }) 
}

// default, granted, denied
console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification();
        }
    });
}