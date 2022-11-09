"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("./core");
const inversify_config_1 = require("./core/container/inversify.config");
const types_1 = require("./core/container/types");
function bootstrap() {
    try {
        const server = new core_1.HttpServer();
        const router = new core_1.Routes(server.configServer, core_1.routesList);
        inversify_config_1.container
            .get(types_1.TYPES.DatabaseInterface)
            .initialize();
        router.launcher();
        server.start();
    }
    catch (e) {
        throw new Error(e.message);
    }
}
bootstrap();
