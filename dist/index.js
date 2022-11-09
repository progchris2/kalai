"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = require("./applications/bases/database");
const core_1 = require("./core");
function bootstrap() {
    try {
        const server = new core_1.HttpServer();
        const router = new core_1.Routes(server.configServer, core_1.routesList);
        new database_1.default()
            .initialize();
        router.launcher();
        server.start();
    }
    catch (e) {
        throw new Error(e.message);
    }
}
bootstrap();
