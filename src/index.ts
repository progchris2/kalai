import 'reflect-metadata';

import DatabaseSQLite from "./applications/bases/database";
import { HttpServer, Routes, routesList } from "./core";

function bootstrap() {
    try {
        const server = new HttpServer();
        const router = new Routes(server.configServer, routesList);
        
        new DatabaseSQLite()
            .initialize();
        
        router.launcher();
        server.start();
    } catch (e: unknown) {
       throw new Error((e as unknown as Record<string, string>).message)
    }
}

bootstrap();

