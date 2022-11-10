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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("../../../../core/container/types");
let ShortRepository = class ShortRepository {
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
        return statement.run(urls.shortUrl, urls.originalUri);
    }
};
ShortRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.DatabaseInterface)),
    __metadata("design:paramtypes", [Object])
], ShortRepository);
exports.default = ShortRepository;
function Inject() {
    throw new Error("Function not implemented.");
}
