import { Response } from 'express';
declare abstract class ContractController {
    static jsonRender<T extends object>(res: Response, data: T, code?: number): void;
    static fileRender(res: Response, path: string): void;
}
export default ContractController;
