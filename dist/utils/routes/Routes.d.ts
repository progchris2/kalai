import { Express, Router } from 'express';
export default class Routes {
    private readonly app;
    private readonly routesList;
    constructor(app: Express, routesList: Router[]);
    launcher(): void;
}
