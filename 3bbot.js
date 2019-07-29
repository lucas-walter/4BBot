const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require('./config.js');
const Sentry = require('@sentry/node');
Sentry.init(cfg.sentry);

var scheduleCommander = require("./commands/schedules");
var textCommander = require("./commands/text");
var administrativeCommander = require("./commands/administrative");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', e => {});

client.on('message', msg => {
  if (!msg.author.bot && msg.content.startsWith('!hü')) {
	  scheduleCommander.commandHomework(msg);
  }
  
  else if (!msg.author.bot && msg.content.startsWith('!termin')) {
	  scheduleCommander.commandTermin(msg);
  }
  
  else if (msg.content.toLowerCase().startsWith('anwesend')) {
	  textCommander.commandAnwesend(msg);
	}
	
  else if (msg.content.startsWith('!exec') && (msg.author.id == 132238802767839233)) {
	  administrativeCommander.commandExec(msg);
  }
});

// Automod
client.on('message', msg => {
	if ((msg.channel.name == "allgemein" || msg.channel.name == "termine" || msg.channel.id == "hü") && msg.content.match(/pls (boobies|meme|gif|steal|rob|daily|inv|rich|bank|cat|animals|aww|birb|ducc|foxxy|hootyboi|snek|asktrump|creditscore|dankrate|deletethis|penis|4chan|fight|guess|trivia|partyparrot).*/gi)) {
		mamlog('DEL_COMMANDS', msg)
		msg.delete(1);
	}
});

// Server Organisation
client.on('messageDelete', msg => {
	if (msg.channel.name == "termine") {
		msg.guild.channels.find("name","termin-archiv").send(msg.content, msg.embeds[0]);
	}
});

function mamlog(action, msg) {
	msg.guild.channels.find("name","logs").send(`MAM > Executed ${action} in ${msg.channel}`);
}

client.login(cfg.discord.token);
