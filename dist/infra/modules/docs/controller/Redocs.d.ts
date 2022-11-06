import { Request, Response } from 'express';
import ContractController from '../../contract.controller';
export default class RedocsController extends ContractController {
    static swaggerDocument(req: Request, res: Response): void;
    static convertToRedocs(req: Request, res: Response): void;
}
