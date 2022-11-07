const Database = require('better-sqlite3');
import createTable from './createTable.sql';

class DatabaseSQLite extends Database {
    private db?: DatabaseSQLite;

    constructor() {
        super('database.db');
    }
   
    static get instance(): DatabaseSQLite {
        if (!this.db) 
            this.db = new DatabaseSQLite()
        return this.db;
    }
    
    public initialize(): void {
        for (let table of createTable) this.exec(table);
    }
}

export default DatabaseSQLite;