'use strict'
function colorChoice() {};

colorChoice.prototype.get = function(color) {
    if (color === 'red') {
        let red = convert(255, 0, 0);
         return red;   
    } else

    if (color === 'blue') {
        let blue = convert(0, 0, 255);
        return blue;
    } else

    if (color === 'purple') {
        let purple = convert(128, 0, 128);
        return purple;
    } else

    if (color === 'green') {
        let green = convert(22, 171, 22);
        return green;
    } else

    if (color === 'cyan') {
        let cyan = convert(0, 255, 255);
        return cyan;
    } else

    if (color === 'turquoise') {
        let turquoise = convert(64, 224, 208);
        return turquoise;
    } else

    if (color === 'gray') {
        let gray = convert(128, 128, 128);
        return gray;
    } else

    if (color === 'white') {
        let white = convert(255, 255, 255);
        return white;
    } else

    if (color === 'black') {
        let black = convert(0, 0, 0);
        return black;
    } else

    if (color === 'pink') {
        let pink = convert(255, 192, 203);
        return pink;
    } else

    if (color === 'magenta') {
        let magenta = convert(255, 0, 255);
        return magenta;
    } else 

    if (color === 'yellow') {
        let yellow = convert(255, 255, 0);
        return yellow;
    } else

    if (color === 'toxic') {
        let toxic = convert(73, 255, 0);
        return toxic;
    };
};

colorChoice.prototype.rgb = function(hex) {
    if (!hex) return;
    return htr(hex);
};

colorChoice.prototype.hex = function(r,g,b) {
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return '#' + new Array(7-h.length).join("0")+h
    })(bin.toString(16).toUpperCase())
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
        let rgb = "0x" + ctoHex(r) + ctoHex(g) + ctoHex(b);
        let final = parseInt(rgb);
        return final;
    };
 
module.exports = colorChoice;


