"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContractController {
    jsonRender(res, data, code = 200) {
        res.status(code).json(data);
    }
    fileRender(res, path, code = 200) {
        res.status(code).sendFile(process.cwd() + path);
    }
    redirectRender(res, path, code = 200) {
        res.status(code).sendFile(process.cwd() + path);
    }
}
exports.default = ContractController;
