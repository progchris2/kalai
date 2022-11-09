"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
let URLGenerator = class URLGenerator {
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
};
URLGenerator = __decorate([
    (0, inversify_1.injectable)()
], URLGenerator);
;
exports.default = URLGenerator;
