/**
 * app.js
 */

var conn = null;
var person = 'guest';

function init() {
    person = prompt('Please enter your name:', 'guest');    
    conn = new WebSocket('ws://localhost:8080');
    
    conn.onopen = function(e) {
        console.log('local [' + person + ']: connection_established');
        conn.send('[' + person + ']: connection_established');
    };
    conn.onmessage = function(e) {
        console.log('message_received ' + e.data);
        alert('message_received ' + e.data);
    };
}

function sendMessage(e) {
    var message = document.getElementById('input_message').value;
    conn.send('[' + person + ']: ' +  message);
}

init();

// EOF
