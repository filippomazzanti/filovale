// Configurazione Firebase (METTI I TUOI DATI QUI!)
const firebaseConfig = {
    apiKey: "TUO_API_KEY",
    authDomain: "TUO_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://TUO_PROJECT_ID.firebaseio.com",
    projectId: "TUO_PROJECT_ID",
    storageBucket: "TUO_PROJECT_ID.appspot.com",
    messagingSenderId: "TUO_MESSAGING_SENDER_ID",
    appId: "TUO_APP_ID"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const counterRef = database.ref("counter");

// Elementi HTML
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Aggiorna il contatore in tempo reale
counterRef.on("value", (snapshot) => {
    counter.innerText = snapshot.val() ?? 0;
});

// Aumenta il contatore
increaseBtn.addEventListener("click", () => {
    counterRef.get().then(snapshot => {
        let newValue = (snapshot.val() ?? 0) + 1;
        counterRef.set(newValue);
    });
});

// Diminuisce il contatore
decreaseBtn.addEventListener("click", () => {
    counterRef.get().then(snapshot => {
        let newValue = (snapshot.val() ?? 0) - 1;
        counterRef.set(newValue);
    });
});

// Resetta il contatore
resetBtn.addEventListener("click", () => {
    counterRef.set(0);
});
