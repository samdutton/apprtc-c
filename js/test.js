'use strict';

var button = document.querySelector('button');
var div = document.querySelector('div#receivedMessage');
var input = document.querySelector('input');

// var websocket = new WebSocket('wss://echo.websocket.org/');

// doesn't work with wss :^|
var websocket = new WebSocket('ws://sockets.mbed.org/ws/foo/rw');

websocket.onopen = function(event) {
  console.log('open', event);
};

websocket.onclose = function(event) {
  console.log('close', event);
};

websocket.onmessage = function(event) {
  console.log('message', event, event.data);
  div.textContent += event.data + ' ';
};

websocket.onerror = function(event) {
  console.log('error', event.data);
};

function send(message) {
  websocket.send(message);
}

button.onclick = function(){send(input.value);};
