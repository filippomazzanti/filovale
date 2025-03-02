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

// Variabile per l'utente loggato
var loggedInUser = null;

document.addEventListener("DOMContentLoaded", function() {

  // Se l'utente è già loggato, ripristina lo stato
  if (localStorage.getItem('loggedInUser')) {
    loggedInUser = localStorage.getItem('loggedInUser');
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('counter-container').style.display = 'block';
    setupChat();
  }

  // Gestione del login
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const counterContainer = document.getElementById('counter-container');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const pin = document.getElementById('pin').value;
    // Usa il select per l'utente
    const selectedUser = document.getElementById('user-select').value;

    // Verifica PIN per Filo o Vale
    if (selectedUser === "filo" && pin === "filo25042004filo") {
      loggedInUser = "Filo";
    } else if (selectedUser === "vale" && pin === "vale25042004vale") {
      loggedInUser = "Vale";
    } else {
      loginError.style.display = 'block';
      return;
    }

    // Salva l'utente nel localStorage per mantenere la sessione
    localStorage.setItem('loggedInUser', loggedInUser);

    // Mostra il contenitore dei contatori e nascondi il login
    loginError.style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    counterContainer.style.display = 'block';

    setupChat();
  });

  // Configurazione degli event listener per i contatori di Vale
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
      accumulatedRef.transaction(function(currentAccumulated) {
        return (currentAccumulated || 0) + currentVal;
      });
      valeRef.set(0);
    });
  });

  // Configurazione degli event listener per i contatori di Filo
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
      accumulatedRef.transaction(function(currentAccumulated) {
        return (currentAccumulated || 0) + currentVal;
      });
      filoRef.set(0);
    });
  });

  // Aggiornamento in tempo reale dei valori dei contatori
  valeRef.on('value', function(snapshot) {
    document.getElementById('vale-value').innerText = snapshot.val() || 0;
  });

  filoRef.on('value', function(snapshot) {
    document.getElementById('filo-value').innerText = snapshot.val() || 0;
  });

  accumulatedRef.on('value', function(snapshot) {
    document.getElementById('accumulated-value').innerText = snapshot.val() || 0;
  });

  // Funzione per cancellare la chat
  document.getElementById('clear-chat-btn').addEventListener('click', function() {
    chatRef.remove();
    document.getElementById('chat-messages').innerHTML = '';
  });

  // Visualizzazione dei messaggi della chat
  chatRef.on('child_added', function(snapshot) {
    var messageData = snapshot.val();
    displayChatMessage(messageData);
  });

  // Funzione per visualizzare un messaggio della chat
  function displayChatMessage(data) {
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    var time = new Date(data.timestamp);
    var timeString = time.toLocaleTimeString();
    messageDiv.innerHTML = '<span class="message-text">' + data.text + '</span>' +
                           '<span class="message-time">' + timeString + '</span>';
    document.getElementById('chat-messages').appendChild(messageDiv);
  }

  // Funzione per configurare la chat (aggiunge l'evento submit al form)
  function setupChat() {
    var chatForm = document.getElementById('chat-form');
    // Rimuoviamo eventuali listener duplicati
    chatForm.replaceWith(chatForm.cloneNode(true));
    chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var chatInput = document.getElementById('chat-input');
      var text = chatInput.value.trim();
      if (text !== '') {
        var newMessageRef = chatRef.push();
        newMessageRef.set({
          text: loggedInUser + ": " + text,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
        chatInput.value = '';
      }
    });
  }
});

// Notifiche standard
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

// Firebase Cloud Messaging per notifiche push
if (firebase.messaging && firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();

  messaging.requestPermission()
    .then(function() {
      console.log('Permesso per le notifiche concesso.');
      return messaging.getToken();
    })
    .then(function(token) {
      console.log('FCM Token:', token);
      // Invia il token al server se necessario
    })
    .catch(function(err) {
      console.error('Impossibile ottenere il permesso per le notifiche.', err);
    });

  messaging.onMessage(function(payload) {
    console.log('Messaggio in arrivo:', payload);
    if (Notification.permission === 'granted') {
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon || 'icon.png'
      });
    }
  });
}
