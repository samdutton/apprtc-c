chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'width': 300,
    'height': 400,
    'left': 0,
    'top': 0
  });
});
