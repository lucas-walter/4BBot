/**   CONFIG
 *  Copy this file and rename it to 'config.js', then enter the values.
 *  The Comments will help you know what to insert.
 *  DO NOT share this file with anyone, if you push to Git it will be ignored.
*/

module.exports = {
	"discord": {
		"token": "WirMachenUnserenTokenNichtÖffentlichDanke" // Discord Token, get from https://discordapp.com/developers/applications/ -> Application -> Bot -> Token
	},
	"sentry": { // Sentry arguments, see https://docs.sentry.io/error-reporting/quickstart/?platform=node#configure-the-sdk
		"dsn": "https://th15i5r0ugh1yh0w7h15l00k5@sentry.io/123456"
	},
	"mysql": {
		host: "localhost",
		user: "3bbot",
		password: "P@ssw0rd",
		database: "3bbot"
	}
}