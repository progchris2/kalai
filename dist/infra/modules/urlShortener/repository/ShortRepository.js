"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShortRepository {
    db;
    constructor(db) {
        this.db = db;
    }
    findUniqByShort(short) {
        const statement = this.db.prepare("SELECT * FROM short_url WHERE short = ?");
        return statement.get(short);
    }
    shortIsExisting(short) {
        const statement = this.db.prepare("SELECT COUNT('*') FROM short_url WHERE short = ?");
        const count = statement.get(short);
        return count["COUNT('*')"] !== 0;
    }
    insertUrl(urls) {
        const statement = this.db.prepare("INSERT INTO short_url(short, long) VALUES(?, ?)");
        statement.run(urls.short, urls.long);
    }
}
exports.default = ShortRepository;
