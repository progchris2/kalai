import { URLGeneratorInterface, URLGeneratorType} from "../../../../domains/generator/URLGeneratorInterface";
import DatabaseSQLite from "../../../../applications/bases/database";
import ShortRepositoryInterface from "./ShortRepositoryItenface";

class ShortRepository implements ShortRepositoryInterface {
    constructor(private readonly db: DatabaseSQLite) {}

    public findUniqByShort (shortUrl: string) {
        const statement = this.db.prepare("SELECT * FROM short_url WHERE shortUrl = ?");
        return statement.get(shortUrl)
    }

    /**
     * @param short{string}
     * @return boolean
     */
    public shortIsExisting(shortUrl: string): boolean {
        const statement = this.db.prepare("SELECT COUNT('*') FROM short_url WHERE shortUrl = ?")
        const count = statement.get(shortUrl)
        return count["COUNT('*')"] !== 0;
    }

     public insertUrl(urls: URLGeneratorType) {
        const statement = this.db.prepare("INSERT INTO short_url(shortUrl, originalUri) VALUES(?, ?)")
        statement.run(urls.shortUrl, urls.originalUri)
    }
}

export default ShortRepository