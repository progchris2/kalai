"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Redocs_1 = require("../controller/Redocs");
const router = (0, express_1.Router)();
const controller = new Redocs_1.default();
exports.default = [
    router.get("/", controller.convertToRedocs),
    router.get("/swagger", controller.swaggerDocument),
];
