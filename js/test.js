'use strict';

/* globals onChannelClosed, onChannelError, onChannelMessage, onChannelOpened */

// doesn't work with wss :^(
var ws = new WebSocket('ws://sockets.mbed.org/ws/foo/rw');

ws.onclose = function(event) {
  onChannelClosed();
  console.log('close', event, event.data);
};

ws.onerror = function(event) {
  onChannelError(event.data);
  console.log('error', event, event.data);
};

ws.onmessage = function(event) {
  onChannelMessage(event);
};

ws.onopen = function() {
  onChannelOpened();
};
