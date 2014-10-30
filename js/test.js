'use strict';

var uri = "ws://localhost:9000/daemon.php";
var websocket = new WebSocket(uri);

websocket.onopen = function(event) {
  alert('Connected to server ');
}

websocket.onclose = function(event) {
  alert('Disconnected');
};

websocket.onmessage = function(event) {
  alert('Message '+event.data);
};

websocket.onerror = function(event) {
  alert('Error '+event.data);
};

var message = 'This is a test message';
websocket.send(message);
