// Configurazione Firebase
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
var database = firebase.database();

// Riferimenti per i contatori e per il totale accumulato
var valeRef = database.ref('vale');
var filoRef = database.ref('filo');
var accumulatedRef = database.ref('accumulated');

// Riferimento per la chat
var chatRef = database.ref('chat');

// Ascoltatori per aggiornare i contatori in tempo reale
valeRef.on('value', function(snapshot) {
  var value = snapshot.val() || 0;
  document.getElementById('vale-value').innerText = value;
});

filoRef.on('value', function(snapshot) {
  var value = snapshot.val() || 0;
  document.getElementById('filo-value').innerText = value;
});

accumulatedRef.on('value', function(snapshot) {
  var value = snapshot.val() || 0;
  document.getElementById('accumulated-value').innerText = value;
});

// Eventi per Vale
document.getElementById('vale-increase').addEventListener('click', function() {
  valeRef.transaction(function(currentValue) {
    return (currentValue || 0) + 1;
  });
});

document.getElementById('vale-decrease').addEventListener('click', function() {
  valeRef.transaction(function(currentValue) {
    return (currentValue || 0) - 1;
  });
});

document.getElementById('vale-reset').addEventListener('click', function() {
  valeRef.once('value').then(function(snapshot) {
    var currentVal = snapshot.val() || 0;
    // Aggiungi al totale accumulato
    accumulatedRef.transaction(function(currentTotal) {
      return (currentTotal || 0) + currentVal;
    });
    // Reset per Vale
    valeRef.set(0);
  });
});

// Eventi per Filo
document.getElementById('filo-increase').addEventListener('click', function() {
  filoRef.transaction(function(currentValue) {
    return (currentValue || 0) + 1;
  });
});

document.getElementById('filo-decrease').addEventListener('click', function() {
  filoRef.transaction(function(currentValue) {
    return (currentValue || 0) - 1;
  });
});

document.getElementById('filo-reset').addEventListener('click', function() {
  filoRef.once('value').then(function(snapshot) {
    var currentVal = snapshot.val() || 0;
    // Aggiungi al totale accumulato
    accumulatedRef.transaction(function(currentTotal) {
      return (currentTotal || 0) + currentVal;
    });
    // Reset per Filo
    filoRef.set(0);
  });
});

// Chat functionality
var chatMessagesDiv = document.getElementById('chat-messages');
var chatForm = document.getElementById('chat-form');
var chatInput = document.getElementById('chat-input');

// Ascolta l'aggiunta di nuovi messaggi nella chat
chatRef.on('child_added', function(snapshot) {
  var messageData = snapshot.val();
  displayChatMessage(messageData);
});

// Invio di un messaggio nella chat
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var text = chatInput.value.trim();
  if (text !== '') {
    var newMessageRef = chatRef.push();
    newMessageRef.set({
      text: text,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    chatInput.value = '';
  }
});

// Funzione per visualizzare un messaggio della chat
function displayChatMessage(data) {
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  var time = new Date(data.timestamp);
  var timeString = time.toLocaleTimeString();
  messageDiv.innerHTML = '<span class="message-text">' + data.text + '</span>' +
                         '<span class="message-time">' + timeString + '</span>';
  chatMessagesDiv.appendChild(messageDiv);
  // Scroll automatico verso il fondo della chat
  chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}
