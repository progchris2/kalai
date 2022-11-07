"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../applications/bases/database");
const URLGenerator_1 = require("../../domains/generator/URLGenerator");
const UrlShortener_1 = require("../../infra/modules/urlShortener/controller/UrlShortener");
const ShortRepository_1 = require("../../infra/modules/urlShortener/repository/ShortRepository");
const CreatorFactory_1 = require("./CreatorFactory");
class UrlShortFactory extends CreatorFactory_1.CreatorFactory {
    factoryMethod() {
        const urlGenerator = new URLGenerator_1.default();
        const repository = new ShortRepository_1.default(database_1.default.instance);
        return new UrlShortener_1.default(repository, urlGenerator);
    }
    get getController() {
        return this.factoryMethod();
    }
}
exports.default = UrlShortFactory;
