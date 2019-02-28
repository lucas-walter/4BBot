const Discord = require('discord.js');
const anwesend = ["anwesend","hier","mit dabei","präsent","vor Ort","zeigt sich","zugegen","einsatzbereit","dabei","gekommen", "angeschossen", "angefahren","disponibel","zum Greifen nah","mit von der Partie","teilnehmend","unter den Teilnehmenden","beehrt","platziert in der x-ten Reihe", "wohnt bei","lässt sich blicken","ist da","lässt sich sehen","verfügbar","vorhanden","hat Anteil","ist beteiligt","partizipiert","teilhabend","Hält sich auf","beiwohnend","verweilt","ist gegenwärtig","eingetreten","angetreten","erschienen","repräsentiert","Vertreten","zur Stelle","am Platze","Befindet sich hier","An Ort und Stelle","Kommt zum Vorschein","Arbeitet mit","Beteiligt","frequentiert","Erlebt mit","Greifbar","parat","ebenda","daselbst","In Erscheinung getreten","aufgetaucht","zeigt sich","an die Öffentlichkeit getreten","angetanzt","eingelaufen","angekommen","eingetroffen","eingetrudelt","allhier","bei uns","arbeitend","eingegangen","angerollt","aufgekreuzt","Hat sich eingefunden","hereingeschneit","hierselbst","anmarschiert","angelangt","eingefunden","örtlich","zur Hand","gelandet","angerückt"];
const client = new Discord.Client();
const cfg = require('./config.js');
const Sentry = require('@sentry/node');
Sentry.init(cfg.sentry);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', e => {});

client.on('message', msg => {
	if (msg.content.startsWith("!")) msg.reply("3BBot läuft im **Safe Mode**.").delete(5000);
	
  if (!msg.author.bot && msg.content.startsWith('!hü')) {
	  if (msg.content.match(/!hü (<#\d*>) (.*) bis (\S).*/gi)) {
		  var hueregex = /!hü <#(\d*)> (.*):(.*) bis (.*).*/gi
//	Comment or I'll go insane	 [1]    [2]   [3]      [4]
		  if (!msg.content.includes(":")) hueregex = /!hü <#(\d*)> (.*)() bis (.*).*/gi
		  var res = hueregex.exec(msg.content);
		  var cdate = Date.now();
		  
		  var dateun = res[4];
		  if (dateun.match(/(.*)d/gi)) dateun = new Date(Date.now()+86400000*(dateun.slice(0, -1))).toString();
		  if (dateun.match(/(.*)w/gi)) dateun = new Date(Date.now()+86400000*7*(dateun.slice(0, -1))).toString();
		  var days = 1;
		  const embed = new Discord.RichEmbed()
			  .setTitle(msg.guild.channels.get(res[1]).name + " : " + res[2])
			  .setAuthor(msg.author.tag, msg.author.avatarURL)
			  .setColor(0xffff00)
			  .setDescription(res[3])
			  .setFooter('Aufgegeben bis ' + dateun + ' am')
			  .setTimestamp(Date.now());
		  
		  var sentmsg = 0;
		  if (msg.guild.channels.get(res[1]).name == "3bbot") {
			  msg.channel.send("", embed).then(g => sentmsg = g.id);
		  }
		  else {
			  msg.guild.channels.find("name","hü").send("", embed).then(g => sentmsg = g.id)
		  }

		  
	  }
	  else {
		  msg.reply("In welchen Fach ist diese Hausübung aufgegeben?").then(msg1 => {
			const filter = m => m.author == msg.author;
			msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
			  .then(collected => msg.reply(collected))
			  .catch(collected => msg.reply(`Du hast gerade 30 Sekunden meiner Lebenszeit mit Warten verschwendet. Danke.`));  
		  })
	  }
	  if (msg.channel.name == "hü") msg.delete(5000);
  }
  
  if (!msg.author.bot && msg.content.startsWith('!termin ')) {
	  if (msg.content.match(/!termin (<#\d*>) (.*) am (\S).*/gi)) {
		  var hueregex = /!termin <#(\d*)> (.*):(.*) am (.*).*/gi
//	Comment or I'll go insane	 [1]    [2]   [3]      [4]
		  if (!msg.content.includes(":")) hueregex = /!termin <#(\d*)> (.*)() am (.*).*/gi
		  var res = hueregex.exec(msg.content);
		  var cdate = Date.now();
		  
		  var dateun = res[4];
		  var days = 1;
		  const embed = new Discord.RichEmbed()
			  .setTitle(msg.guild.channels.get(res[1]).name + " : " + res[2])
			  .setAuthor(msg.author.tag, msg.author.avatarURL)
			  .setColor(0xff0000)
			  .setDescription(res[3])
			  .setFooter('Am ' + res[4] + '; Bekanntgegeben am')
			  .setTimestamp(Date.now());
		  var mid;
		  msg.guild.channels.find("name","termine").send("", embed).then(sentm => mid = sentm.id);
		  
		  
	  }
	  if (msg.channel.name == "termine") msg.delete(5000);
  }
  
  if (msg.content.toLowerCase().startsWith('anwesend')) {
	  math = Math.random();
	  msg.reply(anwesend[Math.floor(math*anwesend.length)]);
  }
  else if (msg.content.startsWith('!exec') && (msg.author.id == 132238802767839233)) {
	  if (msg.content.includes('token')) {msg.reply('Netter Versuch')}
	  else {
		  try {
			ret = eval(msg.content.slice(6));
			msg.reply(ret);
		  } catch (e) { msg.reply("Fehler: " + e); }
	  }
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
function setDay(date, dayOfWeek) {
  date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDate()) % 7);
  return date;
}
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function mySQLDate(d) {
	// Your default date object  
	var starttime = d
	// Get the iso time (GMT 0 == UTC 0)
	var isotime = new Date((new Date(starttime)).toISOString() );
	// getTime() is the unix time value, in milliseconds.
	// getTimezoneOffset() is UTC time and local time in minutes.
	// 60000 = 60*1000 converts getTimezoneOffset() from minutes to milliseconds. 
	var fixedtime = new Date(isotime.getTime()-(starttime.getTimezoneOffset()*60000));
	// toISOString() is always 24 characters long: YYYY-MM-DDTHH:mm:ss.sssZ.
	// .slice(0, 19) removes the last 5 chars, ".sssZ",which is (UTC offset).
	// .replace('T', ' ') removes the pad between the date and time.
	var formatedMysqlString = fixedtime.toISOString().slice(0, 19).replace('T', ' ');
	return formatedMysqlString;
}

client.login(cfg.discord.token);
