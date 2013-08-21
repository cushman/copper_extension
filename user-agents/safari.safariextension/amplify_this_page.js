safari.self.addEventListener("message", function (msgEvent){
  if (msgEvent.name === "amplify_this_page"){
    if (window.top === window) {
      var s = document.createElement('script');
      s.src = 'https://louder.is/amplify.js';
      document.body.appendChild(s);
    }
  }
}, false);

var host = window.location.host
if (host.match(/louder\.is/) || host.match(/localhost/)){
  var s = window.document.createElement('script');
  s.innerHTML = '$(document).trigger("amplify_button_installed")';
  window.document.body.appendChild(s);
}