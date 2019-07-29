/*
 * administrative.js - Copyright (C) 2019 Lucas Walter - All Rights Reserved
 * Commander for Administrative Commands. These include:
 *  - !exec
 */

function commandExec(msg) {
    if (msg.content.includes('token') || msg.author.id != 132238802767839233) msg.reply('Netter Versuch')
    else {
        try {
        ret = eval(msg.content.slice(6));
        msg.reply(ret);
        } catch (e) { msg.reply("Fehler: " + e); }
    }
}

module.exports = {
    commandExec : commandExec
}