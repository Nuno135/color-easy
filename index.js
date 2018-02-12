'use strict';

class Colors {

    static get(color) {
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
    }

    static rgb(hex) {
        if (!hex) throw new Error('Invalid Arguments');
        if (hex.length < 7) throw new Error('Invalid Hex');

        return htr(hex);
    }

    static hex(r, g, b) {
        if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0) throw new Error('Invalid RGB');
        var bin = r << 16 | g << 8 | b;
        return (function(h) {
            return '#' + new Array(7 - h.length).join("0") + h
        })(bin.toString(16).toUpperCase())
    }

    static rgba(hex) {
        if (!hex) return;
        return htra(hex)
    }

    static randomRGB() {
        return `rgb(${r}, ${g}, ${b})`;
    }

    static randomHex() {
        var hex = convert(r, g, b);
        return hex;
    }

    static randomRGBA() {
        return `rgba(${r},${g},${b},${a})`;
    }
}

// Convert HEX to RGB
function htr(hex) {
    if (!hex) return;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let rgb = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
    return rgb;
};

// RGB to HEX
function convert(r, g, b) {
    var bin = r << 16 | g << 8 | b;
    return (function(h) {
        return '#' + new Array(7 - h.length).join("0") + h
    })(bin.toString(16).toUpperCase())
};

// HEX to RGBA
function htra(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ') + ', 1)';
    }
    if (Error) throw new Error('Invalid Hex.');
};

// Random RGB
function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// rgb
var r = random(255);
var g = random(255);
var b = random(255);
var a = Number((Math.random().toFixed(1)));
// end

module.exports = Colors;
