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
const uuid_1 = require("uuid");
const inversify_1 = require("inversify");
const contract_controller_1 = require("../../contract.controller");
const types_1 = require("../../../../core/container/types");
let UrlShortenerController = class UrlShortenerController extends contract_controller_1.default {
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
};
UrlShortenerController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ShortRepositoryInterface)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.URLGeneratorInterface)),
    __metadata("design:paramtypes", [Object, Object])
], UrlShortenerController);
exports.default = UrlShortenerController;
