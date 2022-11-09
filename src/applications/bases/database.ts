const BetterSqlite3 = require('better-sqlite3');
import { injectable } from 'inversify';
import createTable from './createTable.sql';
import {DatabaseInterface} from './DatabaseInterface'

@injectable()
class DatabaseSQLite implements DatabaseInterface {
    private db: typeof BetterSqlite3
    
    constructor() {
        this.db = new BetterSqlite3('database.db')
    }
    
    public initialize(): void {
        for (let table of createTable) this.db.exec(table);
    }
    
    public prepare(source: string): typeof BetterSqlite3.Statement {
        return this.db.prepare(source)
    }
}

export default DatabaseSQLite;