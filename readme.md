# 3BBot

3BBot is a Discord Bot that was created for serving the 3BHIF Discord Server. Here it is open-sourced. Feel free to PR Features here.

## Running the Bot
To run the bot you will need the following:
- A Discord Server
- A Discord Bot Token, you can get this from https://discordapp.com/developers/applications/ -> Application -> Bot -> Token
- A Sentry.io Project and its DSN, see https://docs.sentry.io/error-reporting/quickstart/?platform=node
- (Kind of optional, unless you want to comment out parts of the code) A MySQL Database and a user for it.

Rename `config.example.js` to `config.js` and set the values inside it.
You can run `database-init-script.sql` to create the Database along with its required Tables.

Your Discord Server needs the following:

- A channel called `termine`
- A channel called `hü`
- A channel called `termin-archiv`
- A channel called `hü-archiv`
- A channel called `logs`

Then you should be ready to go, just start the bot using `node 3bbot.js`!

There **are** some hardcoded values in the Bot at the moment, this includes some Channel IDs (for whatever reason) and User IDs (Namely mine with the !exec command because [you shouldn't trust anyone with that](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!). Everything should™ work without changing that though.

I also would recommend running the Bot with [PM2](http://pm2.keymetrics.io/), which is what I currently use in Production and what this Bot is almost solely tested on. This Bot hardly writes anything into the console, except if it dies from a Syntax Error or anything that happens before initializing Sentry.

## Bot Features

-- Coming Soon --