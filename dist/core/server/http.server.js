"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path_1 = require("path");
const morgan = require("morgan");
const fs_1 = require("fs");
const http = require("http");
const body_parser_1 = require("body-parser");
class HttpServer {
    port = process.env.PORT || 8090;
    app;
    styles = [
        'color: green',
        'background: red',
    ].join(';');
    constructor() {
        this.app = express();
    }
    get configServer() {
        const writeLogStream = (0, fs_1.createWriteStream)((0, path_1.join)(__dirname, '..', 'errors.log'), { flags: 'a' });
        this.app.use(express.static((0, path_1.join)(__dirname, '../../..', 'public')));
        this.app.use((0, body_parser_1.urlencoded)({ extended: false }));
        this.app.use((0, body_parser_1.json)({ type: 'application/json' }));
        this.app.use(morgan('combined', {
            skip: (_, res) => res.statusCode < 400,
            stream: writeLogStream
        }));
        return this.app;
    }
    start() {
        http.createServer(this.app)
            .listen(this.port, () => console.info('%c%s', this.styles, `le server c\'est bien lancé sur le host: http://localhost:${this.port}`));
    }
}
exports.default = HttpServer;
