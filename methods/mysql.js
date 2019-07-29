/*
 * mysql.js - Copyright (C) 2019 Lucas Walter - All Rights Reserved
 * MySQL Handler for 4BBot
 */

var cfg = require("../config");
var mysql = require("mysql");

/**
 * Inserts a Homework Object into the Database
 * @param {Homework} homework The Homework Object to insert into the Database
 */
function insertHomework(homework) {
    let connection = mysql.createConnection(cfg.mysql);
    let sql;
    if (homework.gooddate) sql = `INSERT INTO aufgaben(fach, titel, beschreibung, bis, vom, bisdatum) VALUES('${homework.subject}', '${homework.title}', '${homework.description}', '${homework.until}', NOW(), '${homework.until}')`
    else sql = `INSERT INTO aufgaben(fach, titel, beschreibung, bis, vom) VALUES('${homework.subject}', '${homework.title}', '${homework.description}', '${homework.until}', NOW())`
    console.log(sql);
    connection.query(sql);
    connection.end();
}

/**
 * Inserts a Termin Object into the Database
 * @param {Termin} termin The Termin Object to insert into the Database
 */
function insertTermin(termin) {
    let connection = mysql.createConnection(cfg.mysql);
    let sql;termin
    if (homework.gooddate) sql = `INSERT INTO termine(fach, titel, beschreibung, am, vom, amdatum) VALUES('${termin.subject}', '${termin.title}', '${termin.description}', '${termin.until}', NOW(), '${termin.until}')`
    else sql = `INSERT INTO aufgaben(fach, titel, beschreibung, am, vom) VALUES('${termin.subject}', '${termin.title}', '${termin.description}', '${termin.until}', NOW())`
    console.log(sql);
    connection.query(sql);
    connection.end();
}

module.exports = {
    insertHomework : insertHomework,
    insertTermin : insertTermin
}