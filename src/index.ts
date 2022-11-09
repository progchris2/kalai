import 'reflect-metadata';

import { DatabaseInterface } from './applications/bases/DatabaseInterface';
import { HttpServer, Routes, routesList } from "./core";
import { container } from './core/container/inversify.config';
import { TYPES } from './core/container/types';

function bootstrap() {
    try {
        const server = new HttpServer();
        const router = new Routes(server.configServer, routesList);

        container
        .get<DatabaseInterface>(TYPES.DatabaseInterface)
        .initialize();
        
        router.launcher();
        server.start();
    } catch (e: unknown) {
       throw new Error((e as unknown as Record<string, string>).message)
    }
}

bootstrap();

