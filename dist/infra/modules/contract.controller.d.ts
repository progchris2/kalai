import { Response } from 'express';
declare abstract class ContractController {
    jsonRender<T extends object>(res: Response, data: T, code?: number): void;
    fileRender(res: Response, path: string, code?: number): void;
    redirectRender(res: Response, path: string, code?: number): void;
}
export default ContractController;
