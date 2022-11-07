import DatabaseSQLite from "../../../..//applications/bases/database";
import { URLGeneratorType } from "../../../../domains/generator/URLGeneratorInterface";

interface ShortRepositoryInterface {
    shortIsExisting(short: string): boolean
    insertUrl(urls: URLGeneratorType): void;
    findUniqByShort (short: string): any
}

export default ShortRepositoryInterface;