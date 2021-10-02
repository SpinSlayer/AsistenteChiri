
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false');
    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}

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