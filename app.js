/**
 * app.js
 */

var conn = null;
var person = 'guest';

function init() {
    person = prompt('Please enter your name:', 'guest');    
    conn = new WebSocket('ws://localhost:8085');
    
    conn.onopen = function(e) {
        console.log('[' + person + ']:');
		console.log('WEB_APP_CONNECTED');
		
		conn.send('[' + person + ']:');
		conn.send('WEB_APP_CONNECTED');
    };
    conn.onmessage = function(e) {
        console.log('message_received ' + e.data);
        //alert('message_received ' + e.data);
    };
}

function sendMessage(e) {
    var message = document.getElementById('input_message').value;
    conn.send('[' + person + ']:');
	conn.send(message);
}

init();

// EOF
