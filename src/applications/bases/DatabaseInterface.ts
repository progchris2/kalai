const Statement = require('better-sqlite3').Statement;

export interface DatabaseInterface {
    initialize(): void
    prepare(source: string): typeof Statement
}