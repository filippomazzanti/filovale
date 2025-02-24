// Configurazione Firebase (METTI I TUOI DATI QUI!)
const firebaseConfig = {
  apiKey: "AIzaSyBZJQU5F9WlxNuqOjo8HE5NKi-iiaGiTFQ",
  authDomain: "filo-e-vale.firebaseapp.com",
databaseURL: "https://filo-e-vale-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filo-e-vale",
  storageBucket: "filo-e-vale.firebasestorage.app",
  messagingSenderId: "593118517860",
  appId: "1:593118517860:web:1c37411efed6b089be1d71",
  measurementId: "G-JDXM99D8EX"
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
