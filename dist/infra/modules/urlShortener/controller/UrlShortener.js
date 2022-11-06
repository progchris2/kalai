"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const URLGenerator_1 = require("../../../..//domains/generator/URLGenerator");
const database_1 = require("../../../../applications/bases/database");
const contract_controller_1 = require("../../contract.controller");
const ShortRepository_1 = require("../repository/ShortRepository");
class UrlShortenerController extends contract_controller_1.default {
    static redirectUrl(req, res) {
        const shortUrlDB = new ShortRepository_1.default(database_1.default.instance);
        const urls = shortUrlDB.findUniqByShort(`http://localhost:8090${req.url}`);
        if (!urls)
            throw new Error('short url not found');
        console.log(urls.long);
        res.redirect(urls.long);
    }
    ;
    static generateUrl(req, res) {
        try {
            const shortUrlDB = new ShortRepository_1.default(database_1.default.instance);
            let urls = {
                short: '',
                long: ''
            };
            do {
                urls = URLGenerator_1.default.generate(req.body.url, (0, uuid_1.v4)());
            } while (shortUrlDB.shortIsExisting(urls.short) === true);
            shortUrlDB.insertUrl(urls);
            UrlShortenerController.jsonRender(res, {
                ...urls
            });
        }
        catch (e) {
            UrlShortenerController.jsonRender(res, {
                message: e.message,
            });
        }
    }
}
exports.default = UrlShortenerController;
