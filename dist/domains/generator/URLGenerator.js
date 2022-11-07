"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URLGenerator {
    test = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    generate(url, id) {
        if (!this.isValidUrl(url))
            throw new Error('invalid url');
        return {
            originalUri: url,
            shortUrl: id.substring(0, 12)
        };
    }
    isValidUrl(url) {
        const regex = new RegExp(this.test);
        return regex.test(url);
    }
}
;
exports.default = URLGenerator;
