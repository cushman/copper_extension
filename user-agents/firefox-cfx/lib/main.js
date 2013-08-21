/*
 * Example Code for Toolbar Button Complete by user213 (Geek in Training)
 *    modified version of Toolbar Button (with popup menu) by globex-designs
 *
 * Authors : Evgueni Naverniouk (evgueni@globexdesigns.com), user213 (GoMobileFirefox@gmail.com)
 *
 */

// just testing a modified copy (azrafe7)

const {Cc, Ci} = require("chrome");

var menu,t;
var button;
var toolbarbutton = require("toolbarbutton");
var data = require("self").data;
var tabs = require('tabs');

// createButton()
// Creates the add-on toolbar button
//
// @return object
function createButton(options) {
    return toolbarbutton.ToolbarButton({
        id: "Louder Button",
        label: "Amplify with Louder",
        tooltiptext: "Amplify this page",
        image: data.url("button19.png"),
        onCommand: function() {
          var currentWindow = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator).getMostRecentWindow("navigator:browser");

          console.log('big browser');
          console.log(tabs.activeTab.url);
          tabs.activeTab.attach({
            contentScript: "(function(){var s=document.createElement('script');s.src='https://louder.is/amplify.js';document.body.appendChild(s);})()"
          });
          console.log(typeof currentWindow, JSON.stringify(Object.keys(currentWindow.document.body)));
        }
    });
}


exports.main = function(options) {
    button = createButton(options);

    // On install moves button into the toolbar
    if (options.loadReason == "install") {
        button.moveTo({
            toolbarID: "nav-bar",
            insertbefore: "home-button",
            forceMove: true
        });
    }

    // Change the button's icon
    //button.button().setAttribute('image', data.url("favicon.png"));
};