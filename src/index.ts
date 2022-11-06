import DatabaseSQLite from "./applications/bases/database";
import { HttpServer, Routes, routesList } from "./utils";

function bootstrap() {
    try {
        const server = new HttpServer();
        const router = new Routes(server.configServer, routesList);
        const connect = DatabaseSQLite.instance;

        connect.initialize();
        router.launcher();

        server.start();
    } catch (e: unknown) {
       throw new Error((e as unknown as Record<string, string>).message)
    }
}

bootstrap();

