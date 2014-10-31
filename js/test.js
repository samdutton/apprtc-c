'use strict';

// var button = document.querySelector('button');
// var div = document.querySelector('div#receivedMessage');
// var input = document.querySelector('input');

// doesn't work with wss :^|
var ws = new WebSocket('ws://sockets.mbed.org/ws/foo/rw');
// button.onclick = function(){ws.send(input.value);};

ws.onclose = function(event) {
  onChannelClosed();
  console.log('close', event, event.data);
};

ws.onerror = function(event) {
  onChannelError(event.data);
  console.log('error', event, event.data);
};

ws.onmessage = function(event) {
  onChannelMessage(event.data);
  console.log('message', event, event.data);
  //  div.textContent += event.data + ' ';
};

ws.onopen = function(event) {
  onChannelOpened();
  console.log('open', event);
};

