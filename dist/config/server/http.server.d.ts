import * as express from 'express';
export default class HttpServer {
    private readonly port;
    private readonly app;
    private readonly styles;
    constructor();
    get configServer(): express.Express;
    start(): void;
}
