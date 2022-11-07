import { Request, Response } from 'express';
import ContractController from '../../contract.controller';
export default class RedocsController extends ContractController {
    swaggerDocument: (req: Request, res: Response) => void;
    convertToRedocs: (req: Request, res: Response) => void;
}
