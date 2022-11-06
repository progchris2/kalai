"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shurtUrl = `CREATE TABLE  IF NOT EXISTS short_url ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 'short' VARCHAR(100) UNIQUE NOT NULL, 'long' VARCHAR(100), 'created_at' TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
exports.default = [
    shurtUrl
];
