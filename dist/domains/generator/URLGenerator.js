"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URLGenerator {
    static generate(url, id) {
        return {
            long: url,
            short: 'http://localhost:8090' + '/short/' + id.substring(0, 12)
        };
    }
}
;
exports.default = URLGenerator;
