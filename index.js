class color {
    constructor() {
function ctoHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function convert(r, g, b) {
    return "0x" + ctoHex(r) + ctoHex(g) + ctoHex(b);
}


this.red = function() {
    let string = convert(0, 0, 255);
    let red = string.replace(/([#])\w+/g, '0x');
    this.color = blue;
    if (this.color !== red) return;
    return this.color;
};

this.blue = function() {
    let string = convert(0, 0, 255);
    let blue = string.replace(/([#])\w+/g, '0x');
    this.color = blue;
    if (this.color !== blue) return;
    return this.color;
};

this.purple = function() {
    let string = convert(128, 0, 128);
    let purple = string.replace(/([#])\w+/g, '0x');
    this.color = purple;
    if (this.color !== purple) return;
    return this.color;
}
;
this.green = function() {
    let string = convert(0, 128, 0);
    let green = string.replace(/([#])\w+/g, '0x');
    this.color = green;
    if (this.color !== green) return;
    return this.color;
};

this.cyan = function() {
    let string = convert(0, 255, 255);
    let cyan = string.replace(/([#])\w+/g, '0x');
    this.color = cyan;
    if (this.color !== cyan) return;
    return this.color;
};

this.turquoise = function() {
    let string = convert(64, 224, 208);
    let turquoise = string.replace(/([#])\w+/g, '0x');
    this.color = turquoise;
    if (this.color !== turquoise) return;
    return this.color;
}

this.gray = function() {
    let string = convert(128, 128, 128);
    let gray = string.replace(/([#])\w+/g, '0x');
    this.color = gray;
    if (this.color !== gray) return;
    return this.color;
}

this.white = function() {
    let string = convert(255, 255, 255);
    let white = string.replace(/([#])\w+/g, '0x');
    this.color = white;
    if (this.color !== white) return;
    return this.color;
}

this.black = function() {
    let string = convert(0, 0, 0);
    let black = string.replace(/([#])\w+/g, '0x');
    this.color = black;
    if (this.color !== black) return;
    return this.color;
}

this.pink = function() {
    let string = convert(255, 192, 203);
    let pink = string.replace(/([#])\w+/g, '0x');
    this.color = pink;
    if (this.color !== pink) return;
    return this.color;
}

this.magenta = function() {
    let string = convert(255, 0, 255);
    let magenta = string.replace(/([#])\w+/g, '0x');
    this.color = magenta;
    if (this.color !== magenta) return;
    return this.color;
}

this.yellow = function() {
    let string = convert(255, 255, 0);
    let yellow = string.replace(/([#])\w+/g, '0x');
    this.color = yellow;
    if (this.color !== yellow) return;
    return this.color;
}

this.toxic = function() {
    let string = convert(73, 255, 0);
    let toxic = string.replace(/([#])\w+/g, '0x');
    this.color = toxic;
    if (this.color !== toxic) return;
    return this.color;
}
}
}
module.exports = color;
