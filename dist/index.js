"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./applications/bases/database");
const utils_1 = require("./utils");
function bootstrap() {
    try {
        const server = new utils_1.HttpServer();
        const router = new utils_1.Routes(server.configServer, utils_1.routesList);
        const connect = database_1.default.instance;
        connect.initialize();
        router.launcher();
        server.start();
    }
    catch (e) {
        throw new Error(e.message);
    }
}
bootstrap();
