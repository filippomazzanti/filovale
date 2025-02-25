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

// Variabili per l'accesso
var loggedInUser = null;

document.addEventListener("DOMContentLoaded", function() {
  // Gestione del login
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const counterContainer = document.getElementById('counter-container');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const pin = document.getElementById('pin').value;
    const username = document.getElementById('username').value;

    // Verifica PIN per Filo o Vale
    if (username.toLowerCase() === "filo" && pin === "25042004") {
      loggedInUser = "Filo";
    } else if (username.toLowerCase() === "vale" && pin === "10062004") {
      loggedInUser = "Vale";
    } else {
      loginError.style.display = 'block';
      return;
    }

    // Mostra il contenitore dei contatori
    loginError.style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    counterContainer.style.display = 'block';
    updateChatUsername();
  });

  // Funzione per aggiornare il nome utente nella chat
  function updateChatUsername() {
    var chatInput = document.getElementById('chat-input');
    var chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault();
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

  // Funzione per cancellare la chat
  document.getElementById('clear-chat-btn').addEventListener('click', function() {
    chatRef.remove();
    document.getElementById('chat-messages').innerHTML = '';
  });

  // Visualizza i messaggi della chat
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
});

// Notifiche
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
