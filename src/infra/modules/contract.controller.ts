import {Response} from 'express'

abstract class ContractController {
    public static jsonRender<T extends object>(res: Response, data: T, code = 200): void {
        res.status(code).json(data)
    }

    public static fileRender(res: Response, path: string) {
        res.sendFile(process.cwd() + path);
    }
}

export default ContractController;