document.addEventListener("DOMContentLoaded", function () {
    let currentUser = null;

    document.getElementById("login-btn").addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const pin = document.getElementById("pin").value;
        const validPins = { filo: "25042004", vale: "10062004" };

        if (validPins[username] === pin) {
            currentUser = username;
            localStorage.setItem("currentUser", username); // Salva l'utente nel localStorage
            document.getElementById("login-container").style.display = "none";
            document.getElementById("app-container").style.display = "block";
        } else {
            document.getElementById("login-error").style.display = "block";
        }
    });

    // Controlla se l'utente è già loggato
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        currentUser = savedUser;
        document.getElementById("login-container").style.display = "none";
        document.getElementById("app-container").style.display = "block";
    }

    // Firebase config e inizializzazione
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

    // Riferimento per la chat
    var chatRef = database.ref('chat');

    // Funzionalità Clear Chat
    document.getElementById('clear-chat').addEventListener('click', function () {
        if (confirm("Sei sicuro di voler cancellare tutta la chat?")) {
            chatRef.remove(); // Rimuove tutti i messaggi dalla chat in Firebase
            document.getElementById('chat-messages').innerHTML = ''; // Pulisce la chat dal DOM
        }
    });

    // Ascolta l'aggiunta di nuovi messaggi
    let lastMessageTimestamp = 0;

    chatRef.orderByChild("timestamp").on('child_added', function(snapshot) {
        var messageData = snapshot.val();
        if (messageData.timestamp > lastMessageTimestamp) {
            displayChatMessage(messageData);
            lastMessageTimestamp = messageData.timestamp;
        }
    });

    // Invio di un nuovo messaggio
    var chatForm = document.getElementById('chat-form');
    var chatInput = document.getElementById('chat-input');

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var text = chatInput.value.trim();
        if (text !== '' && currentUser) {
            var newMessageRef = chatRef.push();
            newMessageRef.set({
                text: currentUser.charAt(0).toUpperCase() + currentUser.slice(1) + ": " + text,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
            chatInput.value = '';
        }
    });

    function displayChatMessage(data) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        var time = new Date(data.timestamp);
        var timeString = time.toLocaleTimeString();
        messageDiv.innerHTML = '<span class="message-text">' + data.text + '</span>' +
                               '<span class="message-time">' + timeString + '</span>';
        document.getElementById('chat-messages').appendChild(messageDiv);
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
    }
});
