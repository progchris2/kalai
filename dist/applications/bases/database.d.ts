declare const BetterSqlite3: any;
import { DatabaseInterface } from './DatabaseInterface';
declare class DatabaseSQLite implements DatabaseInterface {
    private db;
    constructor();
    initialize(): void;
    prepare(source: string): typeof BetterSqlite3.Statement;
}
export default DatabaseSQLite;
