import { Container, ContainerModule } from "inversify";
const Database = require('better-sqlite3')
import { TYPES } from "./types";
import ShortRepositoryInterface from "../../infra/modules/urlShortener/repository/ShortRepositoryInterface";
import { URLGeneratorInterface } from "../../domains/generator/URLGeneratorInterface";
import ShortRepository from "../../infra/modules/urlShortener/repository/ShortRepository";
import URLGenerator from "../../domains/generator/URLGenerator";
import UrlShortenerController from "../../infra/modules/urlShortener/controller/UrlShortener";
import DatabaseSQLite from "../../applications/bases/database";
import { DatabaseInterface } from "../../applications/bases/DatabaseInterface";

const container = new Container();
container.bind<DatabaseInterface>(TYPES.DatabaseInterface).to(DatabaseSQLite).inSingletonScope();
container.bind<ShortRepositoryInterface>(TYPES.ShortRepositoryInterface).to(ShortRepository);
container.bind<URLGeneratorInterface>(TYPES.URLGeneratorInterface).to(URLGenerator);
container.bind<UrlShortenerController>(TYPES.UrlShortenerController).to(UrlShortenerController);

export { container };