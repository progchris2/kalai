"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const BetterSqlite3 = require('better-sqlite3');
const inversify_1 = require("inversify");
const createTable_sql_1 = require("./createTable.sql");
let DatabaseSQLite = class DatabaseSQLite {
    db;
    constructor() {
        this.db = new BetterSqlite3('database.db');
    }
    initialize() {
        for (let table of createTable_sql_1.default)
            this.db.exec(table);
    }
    prepare(source) {
        return this.db.prepare(source);
    }
};
DatabaseSQLite = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], DatabaseSQLite);
exports.default = DatabaseSQLite;
