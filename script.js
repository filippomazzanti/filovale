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

// Riferimento al Realtime Database
var database = firebase.database();

// Riferimento al nodo "counter"
var counterRef = database.ref('counter');

// Aggiorna il contatore in tempo reale
counterRef.on('value', function(snapshot) {
  var value = snapshot.val();
  document.getElementById('counter').innerText = value !== null ? value : 0;
});

// Aumenta il contatore
document.getElementById('increase').addEventListener('click', function() {
  counterRef.transaction(function(currentValue) {
    return (currentValue || 0) + 1;
  });
});

// Diminuisce il contatore
document.getElementById('decrease').addEventListener('click', function() {
  counterRef.transaction(function(currentValue) {
    return (currentValue || 0) - 1;
  });
});

// Resetta il contatore
document.getElementById('reset').addEventListener('click', function() {
  counterRef.set(0);
});
