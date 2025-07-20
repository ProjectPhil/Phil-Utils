var figlet = require('figlet'), moment = require('moment-timezone'), Fonts = figlet.fontsSync(), chalk = require('chalk');

module.exports = {
    Logger: function (str, options) {
        options = options || {};
        let out = str;
        if (options.bold) out = chalk.bold(out);
        if (options.color) out = chalk[options.color](out);
        if (options.bg) out = chalk[options.bg](out);
        if (options.title) out = `[${options.title}]: ` + out;
        console.log(out);
    },
    MakeID: function (length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    GetDate: function () {
        let date = new Date().toDateString();
        return date;
    },
    FetchTime: function (t, f) {
        return moment.tz(t).format(f);
    },
    GetRandomArray: function (a) {
        return a[Math.floor(a.length * Math.random())];
    },
    CheckIfHex: function (item) {
        if (!item.toUpperCase().startsWith('#')) return { pass: false, item: `#${item}` };
        return { pass: true };
    },
    Figlify: function (text, options) {
        options = options || {};
        var font = 'Standard';
        if (options.font) {
            font = options.font;
        } else if (options.randFont) {
            font = this.GetRandomArray(Fonts);
        }
        return new Promise(function (resolve, reject) {
            figlet.text(text, { font: font, width: options.width || 700 }, function (e, data) {
                if (e) return reject(e);
                resolve(data);
            });
        });
    },
}