import { URLGeneratorType } from "src/domains/generator/URLGeneratorInterface";
import DatabaseSQLite from "../../../../applications/bases/database";
import ShortRepositoryInterface from "./ShortRepositoryItenface";
declare class ShortRepository implements ShortRepositoryInterface {
    private readonly db;
    constructor(db: DatabaseSQLite);
    findUniqByShort(short: string): any;
    shortIsExisting(short: string): boolean;
    insertUrl(urls: URLGeneratorType): void;
}
export default ShortRepository;
