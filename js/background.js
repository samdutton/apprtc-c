'use strict';

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'width': 400,
    'height': 300,
    'left': 0,
    'top': 0
  });
});
