"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    app;
    routesList;
    constructor(app, routesList) {
        this.app = app;
        this.routesList = routesList;
    }
    launcher() {
        for (let routeController of this.routesList) {
            this.app.use(routeController, (req, res, next) => {
                next();
            });
        }
    }
}
exports.default = Routes;
