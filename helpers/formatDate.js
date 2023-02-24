const moment = require("moment");

/**
 * // Cette fonction prend paramètres (username ,texte)
 * et retourne un objet qui contient leusername,
 * le texte et l'heure actuelle au format "h:mm a",
 *  (utilisant la bibliothèque moment)
 */

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
