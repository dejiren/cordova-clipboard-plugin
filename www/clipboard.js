var cordova = require("cordova");

/**
 * Clipboard plugin for Cordova
 *
 * @constructor
 */
function Clipboard() {}

/**
 * Sets the clipboard content
 *
 * @param {String}   text      The content to copy to the clipboard  for text/html MIME type
 * @param {String}   plainText The plain text  to copy to the clipboard for text/plain MIME type
 * @param {Function} onSuccess The function to call in case of success (takes the copied text as argument)
 * @param {Function} onFail    The function to call in case of error
 */
Clipboard.prototype.copy = function (text, plainText, onSuccess, onFail) {
  if (typeof text === "undefined" || text === null) text = "";
  if (typeof plainText === "undefined" || plainText === null) plainText = "";

  cordova.exec(onSuccess, onFail, "Clipboard", "copy", [text, plainText]);
};

/**
 * Gets the clipboard content
 *
 * @param {Function} onSuccess The function to call in case of success
 * @param {Function} onFail    The function to call in case of error
 */
Clipboard.prototype.paste = function (onSuccess, onFail) {
  cordova.exec(onSuccess, onFail, "Clipboard", "paste", []);
};

// Register the plugin
var clipboard = new Clipboard();
module.exports = clipboard;
