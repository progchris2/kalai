"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shurtUrl = `CREATE TABLE  IF NOT EXISTS short_url ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 'shortUrl' VARCHAR(100) UNIQUE NOT NULL, 'originalUri' VARCHAR(100), 'created_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
exports.default = [
    shurtUrl
];
