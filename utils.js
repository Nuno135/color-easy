class Utils {
    static htr(hex) {
        if (!hex) return;
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let rgb = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
        return rgb;
    }

    static convert(r, g, b) {
        var bin = r << 16 | g << 8 | b;
        return (function(h) {
            return '#' + new Array(7 - h.length).join("0") + h
        })(bin.toString(16).toUpperCase())
    }

    static htra(hex) {
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
    }

    static random(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

module.exports = Utils;
