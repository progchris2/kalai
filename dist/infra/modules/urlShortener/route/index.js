"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UrlShortener_1 = require("../controller/UrlShortener");
const router = (0, express_1.Router)();
exports.default = [
    router.get("/short/:id", UrlShortener_1.default.redirectUrl),
    router.post("/short_url", UrlShortener_1.default.generateUrl)
];
