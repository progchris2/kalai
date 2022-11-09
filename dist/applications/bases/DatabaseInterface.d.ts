declare const Statement: any;
export interface DatabaseInterface {
    initialize(): void;
    prepare(source: string): typeof Statement;
}
export {};
