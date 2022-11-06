"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contract_controller_1 = require("../../contract.controller");
class RedocsController extends contract_controller_1.default {
    static swaggerDocument(req, res) {
        RedocsController.fileRender(res, '/swagger.json');
    }
    ;
    static convertToRedocs(req, res) {
        RedocsController.fileRender(res, '/public/index.html');
    }
}
exports.default = RedocsController;
