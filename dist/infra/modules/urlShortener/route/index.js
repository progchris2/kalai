"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../../../core/container/types");
const inversify_config_1 = require("../../../../core/container/inversify.config");
const router = (0, express_1.Router)();
const controller = inversify_config_1.container.get(types_1.TYPES.UrlShortenerController);
exports.default = [
    router.get("/api/shorturl/:id", controller.redirectUrl),
    router.post("/api/short_url", controller.generateUrl)
];
