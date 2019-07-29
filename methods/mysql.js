var cfg = require("../config");
var mysql = require("mysql");

function insertHomework(homework) {
    let connection = mysql.createConnection(cfg.mysql);
    let sql;
    if (homework.gooddate) sql = `INSERT INTO aufgaben(fach, titel, beschreibung, bis, vom, bisdatum) VALUES('${homework.subject}', '${homework.title}', '${homework.description}', '${homework.until}', NOW(), '${homework.until}')`
    else sql = `INSERT INTO aufgaben(fach, titel, beschreibung, bis, vom) VALUES('${homework.subject}', '${homework.title}', '${homework.description}', '${homework.until}', NOW())`
    console.log(sql);
    connection.query(sql);
    connection.end();
}

module.exports = {
    insertHomework : insertHomework
}