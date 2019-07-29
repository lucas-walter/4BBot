/*
 * text.js - Copyright (C) 2019 Lucas Walter - All Rights Reserved
 * Commander for Text Commands. These include:
 *  - !anwesend
 */

const anwesend = ["anwesend","hier","mit dabei","präsent","vor Ort","zeigt sich","zugegen","einsatzbereit","dabei","gekommen", "angeschossen", "angefahren","disponibel","zum Greifen nah","mit von der Partie","teilnehmend","unter den Teilnehmenden","beehrt","platziert in der x-ten Reihe", "wohnt bei","lässt sich blicken","ist da","lässt sich sehen","verfügbar","vorhanden","hat Anteil","ist beteiligt","partizipiert","teilhabend","Hält sich auf","beiwohnend","verweilt","ist gegenwärtig","eingetreten","angetreten","erschienen","repräsentiert","Vertreten","zur Stelle","am Platze","Befindet sich hier","An Ort und Stelle","Kommt zum Vorschein","Arbeitet mit","Beteiligt","frequentiert","Erlebt mit","Greifbar","parat","ebenda","daselbst","In Erscheinung getreten","aufgetaucht","zeigt sich","an die Öffentlichkeit getreten","angetanzt","eingelaufen","angekommen","eingetroffen","eingetrudelt","allhier","bei uns","arbeitend","eingegangen","angerollt","aufgekreuzt","Hat sich eingefunden","hereingeschneit","hierselbst","anmarschiert","angelangt","eingefunden","örtlich","zur Hand","gelandet","angerückt"];

function commandAnwesend(msg) {
    math = Math.random();
    msg.reply(anwesend[Math.floor(math*anwesend.length)]);
}