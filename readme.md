# 3BBot

3BBot is a Discord Bot that was created for serving the 3BHIF Discord Server. Here it is open-sourced. Feel free to PR Features here.

## Running the Bot
To run the bot you will need the following:
- A Discord Server
- A Discord Bot Token, you can get this from https://discordapp.com/developers/applications/ -> Application -> Bot -> Token
- A Sentry.io Project and its DSN, see https://docs.sentry.io/error-reporting/quickstart/?platform=node
- (Kind of optional, unless you want to comment out parts of the code) A MySQL Database and a user for it.

Rename `config.example.js` to `config.js` and set the values inside it.

Your Database will need:
- A table called 