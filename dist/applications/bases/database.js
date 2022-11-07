"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database = require('better-sqlite3');
const createTable_sql_1 = require("./createTable.sql");
class DatabaseSQLite extends Database {
    db;
    constructor() {
        super('database.db');
    }
    static get instance() {
        if (!this.db)
            this.db = new DatabaseSQLite();
        return this.db;
    }
    initialize() {
        for (let table of createTable_sql_1.default)
            this.exec(table);
    }
}
exports.default = DatabaseSQLite;
