'use strict';

var utils = require('./utils');

class Colors {

    static get(color) {
        if (color === 'red') {
            let red = utils.convert(255, 0, 0);
            return red;
        } else

        if (color === 'blue') {
            let blue = utils.convert(0, 0, 255);
            return blue;
        } else

        if (color === 'purple') {
            let purple = utils.convert(128, 0, 128);
            return purple;
        } else

        if (color === 'green') {
            let green = utils.convert(22, 171, 22);
            return green;
        } else

        if (color === 'cyan') {
            let cyan = utils.convert(0, 255, 255);
            return cyan;
        } else

        if (color === 'turquoise') {
            let turquoise = utils.convert(64, 224, 208);
            return turquoise;
        } else

        if (color === 'gray') {
            let gray = utils.convert(128, 128, 128);
            return gray;
        } else

        if (color === 'white') {
            let white = utils.convert(255, 255, 255);
            return white;
        } else

        if (color === 'black') {
            let black = utils.convert(0, 0, 0);
            return black;
        } else

        if (color === 'pink') {
            let pink = utils.convert(255, 192, 203);
            return pink;
        } else

        if (color === 'magenta') {
            let magenta = utils.convert(255, 0, 255);
            return magenta;
        } else

        if (color === 'yellow') {
            let yellow = utils.convert(255, 255, 0);
            return yellow;
        } else

        if (color === 'toxic') {
            let toxic = utils.convert(73, 255, 0);
            return toxic;
        };

        if (color === 'orange') {
            let orange = utils.convert(255, 165, 0);
            return orange;
        }

        if (color === 'brown') {
            let brown = utils.convert(165, 42, 42);
            return brown;
        }
    }

    static rgb(hex) {
        if (!hex) throw new Error('Invalid Arguments');
        if (hex.length < 7) throw new Error('Invalid Hex');

        return utils.htr(hex);
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
        return utils.htra(hex)
    }

    static randomRGB() {
        return `rgb(${r}, ${g}, ${b})`;
    }

    static randomHex() {
        var hex = utils.convert(r, g, b);
        return hex;
    }

    static randomRGBA() {
        return `rgba(${r},${g},${b},${a})`;
    }
}

var r = utils.random(255);
var g = utils.random(255);
var b = utils.random(255);
var a = Number((Math.random().toFixed(1)));

module.exports = Colors;
