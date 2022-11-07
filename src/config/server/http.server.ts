import * as express from 'express';
import {join}  from 'path';
import * as morgan  from 'morgan';
import {createWriteStream} from 'fs';
import * as http from 'http'
import {urlencoded, json} from 'body-parser'

export default class HttpServer {
    private readonly port = process.env.PORT || 8090
    private readonly app: express.Express
    private readonly styles = [
        'color: green',
        'background: red',
      ].join(';');
    
    constructor() {
       this.app = express()
    }

    get configServer(): express.Express {
        const writeLogStream = createWriteStream(join(__dirname, '..', 'errors.log'), { flags: 'a' });

        this.app.use(express.static(join(__dirname, '../../..', 'public')))
        this.app.use(urlencoded({extended: false}));
        this.app.use(json({ type: 'application/json' }));

        this.app.use(morgan('combined', {
            skip: (_, res) => res.statusCode < 400,
            stream: writeLogStream
        }));
        
        return this.app;
    }

    public start() {
        http.createServer(this.app)
            .listen(this.port, 
                () => console.info('%c%s', this.styles, `le server c\'est bien lancé sur le host: http://localhost:${this.port}`));
    }
}