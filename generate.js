﻿const mappings = {
    "!t": "™",
    "!c": "©",
    
    "!x": "✘",
    "!v": "✔",
    "!z": "✨",
    "!+m": "♫",
    "!m": "♪",
    "^!m": "♬",

    "!+4": "€",
    "!4": "€",
    "!+5": "₿",
    "!5": "₿",

    "!s": "§",
    "!p": "¶",

    "!a": "á",
    "!e": "é",
    "!i": "í",
    "!o": "ó",
    "!u": "ú",
    "!n": "ñ",

    "!+a": "Á",
    "!+e": "É",
    "!+i": "Í",
    "!+o": "Ó",
    "!+u": "Ú",
    "!+n": "Ñ",
    "!+/": "¿",
    "!+1": "¡",
}

const content = "\ufeff#SingleInstance force\n"
    + Object.keys(mappings)
        .map(key => `${key}::\nSend,${mappings[key]}\nreturn\n`)
        .join("\n");


require("fs").writeFileSync("alt-extras.ahk", content.replace(/\n/g,'\r\n'));