"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const contract_controller_1 = require("../../contract.controller");
class UrlShortenerController extends contract_controller_1.default {
    repository;
    urlGenerator;
    constructor(repository, urlGenerator) {
        super();
        this.repository = repository;
        this.urlGenerator = urlGenerator;
    }
    redirectUrl = (req, res) => {
        const urls = this.repository.findUniqByShort(`http://localhost:8090${req.url}`);
        if (!urls)
            throw new Error('short url not found');
        this.redirectRender(res, urls.originalUri);
    };
    generateUrl = (req, res) => {
        try {
            let urls = {
                originalUri: '',
                shortUrl: ''
            };
            do {
                urls = this.urlGenerator.generate(req.body.url, (0, uuid_1.v4)());
            } while (this.repository.shortIsExisting(urls.shortUrl) === true);
            this.repository.insertUrl(urls);
            this.jsonRender(res, {
                ...urls
            });
        }
        catch (e) {
            this.jsonRender(res, {
                message: e.message,
            }, 501);
        }
    };
}
exports.default = UrlShortenerController;
