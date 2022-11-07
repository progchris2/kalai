"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShortRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    findUniqByShort(shortUrl) {
        const statement = this.db.prepare("SELECT * FROM short_url WHERE shortUrl = ?");
        return statement.get(shortUrl);
    }
    shortIsExisting(shortUrl) {
        const statement = this.db.prepare("SELECT COUNT('*') FROM short_url WHERE shortUrl = ?");
        const count = statement.get(shortUrl);
        return count["COUNT('*')"] !== 0;
    }
    insertUrl(urls) {
        const statement = this.db.prepare("INSERT INTO short_url(shortUrl, originalUri) VALUES(?, ?)");
        statement.run(urls.shortUrl, urls.originalUri);
    }
}
exports.default = ShortRepository;
