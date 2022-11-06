declare const Database: any;
declare class DatabaseSQLite extends Database {
    private db?;
    constructor();
    static get instance(): DatabaseSQLite;
    initialize(): void;
}
export default DatabaseSQLite;
