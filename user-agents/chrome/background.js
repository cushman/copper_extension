
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {code:" var s=document.createElement('script'); s.src='https://louder.is/amplify.js'; document.body.appendChild(s);"});
});

// // This is triggered when the extension is installed or updated.
chrome.runtime.onInstalled.addListener(function(){
  chrome.tabs.executeScript(null, {code:"$(document).trigger('amplify_button_installed')"});
});