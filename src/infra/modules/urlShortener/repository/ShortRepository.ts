import { URLGeneratorInterface, URLGeneratorType} from "../../../../domains/generator/URLGeneratorInterface";
import {DatabaseInterface} from "../../../../applications/bases/DatabaseInterface";
import ShortRepositoryInterface from "./ShortRepositoryInterface";
import {inject, injectable } from "inversify";
import { TYPES } from "../../../../core/container/types";

@injectable()
class ShortRepository implements ShortRepositoryInterface {
    constructor(@inject(TYPES.DatabaseInterface) private readonly db: DatabaseInterface) {}

    /**
     * @param shortUrl{string}
     */
    public findUniqByShort (shortUrl: string) {
        const statement = this.db.prepare("SELECT * FROM short_url WHERE shortUrl = ?");
        return statement.get(shortUrl)
    }

    /**
     * @param shortUrl{string}
     * @return boolean
     */
    public shortIsExisting(shortUrl: string): boolean {
        const statement = this.db.prepare("SELECT COUNT('*') FROM short_url WHERE shortUrl = ?")
        const count = statement.get(shortUrl)
        return count["COUNT('*')"] !== 0;
    }

     public insertUrl(urls: URLGeneratorType) {
        const statement = this.db.prepare("INSERT INTO short_url(shortUrl, originalUri) VALUES(?, ?)")
        return statement.run(urls.shortUrl, urls.originalUri)
     }
}

export default ShortRepository

function Inject() {
    throw new Error("Function not implemented.");
}
