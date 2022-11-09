import { URLGeneratorType } from "../../../../domains/generator/URLGeneratorInterface";
import { DatabaseInterface } from "../../../../applications/bases/DatabaseInterface";
import ShortRepositoryInterface from "./ShortRepositoryInterface";
declare class ShortRepository implements ShortRepositoryInterface {
    private readonly db;
    constructor(db: DatabaseInterface);
    findUniqByShort(shortUrl: string): any;
    shortIsExisting(shortUrl: string): boolean;
    insertUrl(urls: URLGeneratorType): any;
}
export default ShortRepository;
