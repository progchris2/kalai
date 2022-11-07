"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_controller_1 = require("../../contract.controller");
class RedocsController extends contract_controller_1.default {
    swaggerDocument = (req, res) => {
        this.fileRender(res, '/swagger.json');
    };
    convertToRedocs = (req, res) => {
        this.fileRender(res, '/public/index.html');
    };
}
exports.default = RedocsController;
