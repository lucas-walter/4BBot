/*
 * schedules.js - Copyright (C) 2019 Lucas Walter - All Rights Reserved
 * Commander for Schedule Commands. These include:
 *  - !hü
 *  - !termin
 */

const Discord = require('discord.js');
var mysql = require("../methods/mysql");
Homework = require("../classes/Homework");

/**
 * Commander for !hü
 * @param {Message} msg Message received from the user
 */
function commandHomework(msg) {
    if (msg.content.match(/!hü (<#\d*>) (.*) bis (\S).*/gi)) {
        var hueregex = /!hü <#(\d*)> (.*):(.*) bis (.*).*/gi
//	                          [1]    [2]   [3]      [4]
        if (!msg.content.includes(":")) hueregex = /!hü <#(\d*)> (.*)() bis (.*).*/gi
        var res = hueregex.exec(msg.content);
        
        var dateun = res[4];
        var dategood = false;
        if (dateun.match(/^([0-9]*)d/gi)) {
            dateun = new Date(Date.now()+86400000*(dateun.slice(0, -1))).toJSONLocal().slice(0, 10);
            dategood = true;
        }
        else if (dateun.match(/^([0-9]*)w/gi)) {
            dateun = new Date(Date.now()+86400000*7*(dateun.slice(0, -1))).toJSONLocal().slice(0, 10);
            dategood = true;
        }
        const embed = new Discord.RichEmbed()
            .setTitle(msg.guild.channels.get(res[1]).name + " : " + res[2])
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setColor(0xffff00)
            .setDescription(res[3])
            .setFooter('Aufgegeben bis ' + dateun + ' am')
            .setTimestamp(Date.now());
        
        msg.guild.channels.find("name","hü").send("", embed);

        var homeworkObj = new Homework(msg.guild.channels.get(res[1]).name, res[2], (res[3]) ? res[3] : "NULL", dateun, dategood)

        mysql.insertHomework(homeworkObj);
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

/**
 * Commander for !termin
 * @param {Message} msg Message received from the user
 */
function commandTermin(msg) {
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

Date.prototype.toJSONLocal = (function() {
    function addZ(n) {
        return (n<10? '0' : '') + n;
    }
    return function() {
      return this.getFullYear() + '-' +
             addZ(this.getMonth() + 1) + '-' +
             addZ(this.getDate());
    };
}())

module.exports = {
    commandHomework: commandHomework,
    commandTermin: commandTermin
}