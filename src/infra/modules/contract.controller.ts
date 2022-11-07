import {Response} from 'express'

abstract class ContractController {
    public jsonRender<T extends object>(res: Response, data: T, code = 200): void {
        res.status(code).json(data);
    }

    public fileRender(res: Response, path: string, code = 200) {
        res.status(code).sendFile(process.cwd() + path);
    }

    public redirectRender(res: Response, path: string, code= 200) {
        res.status(code).sendFile(process.cwd() + path);
    }
}

export default ContractController;