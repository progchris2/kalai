"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("../../infra/modules/urlShortener/route");
const route_2 = require("../../infra/modules/docs/route");
exports.default = [
    ...route_1.default,
    ...route_2.default
];
