"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./applications/bases/database");
const config_1 = require("./config");
function bootstrap() {
    try {
        const server = new config_1.HttpServer();
        const router = new config_1.Routes(server.configServer, config_1.routesList);
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
