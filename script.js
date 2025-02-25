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

// Richiesta permesso notifiche
function requestNotificationPermission() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        console.log("Notifiche abilitate!");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", requestNotificationPermission);

// Aggiornamento e notifica per il contatore di Vale
valeRef.on('value', function(snapshot) {
  var value = snapshot.val() || 0;
  document.getElementById('vale-value').innerText = value;
  if (Notification.permission === 'granted') {
    new Notification("Aggiornamento Contatore", {
      body: "Vale: " + value,
      icon: 'icon.png'
    });
  }
});

// Aggiornamento e notifica per il contatore di Filo
filoRef.on('value', function(snapshot) {
  var value = snapshot.val() || 0;
  document.getElementById('filo-value').innerText = value;
  if (Notification.permission === 'granted') {
    new Notification("Aggiornamento Contatore", {
      body: "Filo: " + value,
      icon: 'icon.png'
    });
  }
});

// Aggiornamento del totale accumulato (senza notifiche, opzionale)
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
    accumulatedRef.transaction(function(currentTotal) {
      return (currentTotal || 0) + currentVal;
    });
    valeRef.set(0);
    if (Notification.permission === 'granted') {
      new Notification("Contatore Resettato", {
        body: "Vale ha resettato il contatore!",
        icon: 'icon.png'
      });
    }
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
    accumulatedRef.transaction(function(currentTotal) {
      return (currentTotal || 0) + currentVal;
    });
    filoRef.set(0);
    if (Notification.permission === 'granted') {
      new Notification("Contatore Resettato", {
        body: "Filo ha resettato il contatore!",
        icon: 'icon.png'
      });
    }
  });
});

// Funzionalità Chat
var chatMessagesDiv = document.getElementById('chat-messages');
var chatForm = document.getElementById('chat-form');
var chatInput = document.getElementById('chat-input');

// Ascolta l'aggiunta di nuovi messaggi
chatRef.on('child_added', function(snapshot) {
  var messageData = snapshot.val();
  displayChatMessage(messageData);
  if (Notification.permission === 'granted') {
    new Notification("Nuovo Messaggio", {
      body: messageData.text,
      icon: 'icon.png'
    });
  }
});

// Invio di un nuovo messaggio
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

// Funzione per visualizzare un messaggio della chat con animazione fade-in
function displayChatMessage(data) {
  var messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  var time = new Date(data.timestamp);
  var timeString = time.toLocaleTimeString();
  messageDiv.innerHTML = '<span class="message-text">' + data.text + '</span>' +
                         '<span class="message-time">' + timeString + '</span>';
  chatMessagesDiv.appendChild(messageDiv);
  chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}
