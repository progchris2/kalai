"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Redocs_1 = require("../controller/Redocs");
const router = (0, express_1.Router)();
exports.default = [
    router.get("/", Redocs_1.default.convertToRedocs),
    router.get("/swagger", Redocs_1.default.swaggerDocument),
];
