import { URLGeneratorType } from "src/domains/generator/URLGeneratorInterface";
import DatabaseSQLite from "../../../../applications/bases/database";
import ShortRepositoryInterface from "./ShortRepositoryItenface";

class ShortRepository implements ShortRepositoryInterface {
    constructor(private readonly db: DatabaseSQLite)
    {}

    public findUniqByShort (short: string) {
        const statement = this.db.prepare("SELECT * FROM short_url WHERE short = ?");
        return statement.get(short)
    }

    /**
     * @param short{string}
     * @return boolean
     */
    public shortIsExisting(short: string): boolean {
        const statement = this.db.prepare("SELECT COUNT('*') FROM short_url WHERE short = ?")
        const count = statement.get(short)
        return count["COUNT('*')"] !== 0;
    }

     public insertUrl(urls: URLGeneratorType) {
        const statement = this.db.prepare("INSERT INTO short_url(short, long) VALUES(?, ?)")
        statement.run(urls.short, urls.long)
    }
}

export default ShortRepository;