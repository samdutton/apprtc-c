'use strict';

var websocket = new WebSocket('ws://echo.websocket.org/');

websocket.onopen = function(event) {
  console.log(event);
  var message = 'This is a test message';
  websocket.send(message);
}

websocket.onclose = function(event) {
  console.log(event);
};

websocket.onmessage = function(event) {
  console.log(event, event.data);
};

websocket.onerror = function(event) {
  console.log('Error: '+ event.data);
};

