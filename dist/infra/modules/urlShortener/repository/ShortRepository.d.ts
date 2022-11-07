import { URLGeneratorType } from "../../../../domains/generator/URLGeneratorInterface";
import DatabaseSQLite from "../../../../applications/bases/database";
import ShortRepositoryInterface from "./ShortRepositoryItenface";
declare class ShortRepository implements ShortRepositoryInterface {
    private readonly db;
    constructor(db: DatabaseSQLite);
    findUniqByShort(shortUrl: string): any;
    shortIsExisting(shortUrl: string): boolean;
    insertUrl(urls: URLGeneratorType): void;
}
export default ShortRepository;
