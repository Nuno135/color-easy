'use strict'
function colorChoice() {};

colorChoice.prototype.get = function(color) {
    if (color === 'red') {
        let string = convert(255, 0, 0);
         let red = string.replace(/(#)/g, '0x');
         return red;   
    } else

    if (color === 'blue') {
        let string = convert(0, 0, 255);
        let blue = string.replace(/(#)/g, '0x');
        return blue;
    } else

    if (color === 'purple') {
        let string = convert(128, 0, 128);
        let purple = string.replace(/(#)/g, '0x');
        return purple;
    } else

    if (color === 'green') {
        let string = convert(0, 128, 0);
        let green = string.replace(/(#)/g, '0x');
        return green;
    } else

    if (color === 'cyan') {
        let string = convert(0, 255, 255);
        let cyan = string.replace(/(#)/g, '0x');
        return cyan;
    } else

    if (color === 'turquoise') {
        let string = convert(64, 224, 208);
        let turquoise = string.replace(/(#)/g, '0x');
        return turquoise;
    } else

    if (color === 'gray') {
        let string = convert(128, 128, 128);
        let gray = string.replace(/(#)/g, '0x');
        return gray;
    } else

    if (color === 'white') {
        let string = convert(255, 255, 255);
        let white = string.replace(/(#)/g, '0x');
        return white;
    } else

    if (color === 'black') {
        let string = convert(0, 0, 0);
        let black = string.replace(/(#)/g, '0x');
        return black;
    } else

    if (color === 'pink') {
        let string = convert(255, 192, 203);
        let pink = string.replace(/(#)/g, '0x');
        return pink;
    } else

    if (color === 'magenta') {
        let string = convert(255, 0, 255);
        let magenta = string.replace(/(#)/g, '0x');
        return magenta;
    } else 

    if (color === 'yellow') {
        let string = convert(255, 255, 0);
        let yellow = string.replace(/(#)/g, '0x');
        return yellow;
    } else

    if (color === 'toxic') {
        let string = convert(73, 255, 0);
        let toxic = string.replace(/(#)/g, '0x');
        return toxic;
    };
};

colorChoice.prototype.rgb = function(hex) {
    if (!hex) return;
    return htr(hex);
};



    // Convert HEX to RGB
function htr(hex) {
        if (!hex) return;
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let rgb = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
        return rgb;
    };

    // Convert RGB to HEX
function ctoHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex.toUpperCase();
    };
    
function convert(r, g, b) {
        return "0x" + ctoHex(r) + ctoHex(g) + ctoHex(b);
    };

 
module.exports = colorChoice;


