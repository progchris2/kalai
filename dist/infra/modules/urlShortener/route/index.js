"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UrlShortFactory_1 = require("../../../../config/factory/UrlShortFactory");
const controller = new UrlShortFactory_1.default().getController;
const router = (0, express_1.Router)();
exports.default = [
    router.get("/api/shorturl/:id", controller.redirectUrl),
    router.post("/api/short_url", controller.generateUrl)
];
