"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContractController {
    static jsonRender(res, data, code = 200) {
        res.status(code).json(data);
    }
    static fileRender(res, path) {
        res.sendFile(process.cwd() + path);
    }
}
exports.default = ContractController;
