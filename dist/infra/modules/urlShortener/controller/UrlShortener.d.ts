import { Request, Response } from 'express';
import ContractController from '../../contract.controller';
export default class UrlShortenerController extends ContractController {
    static redirectUrl(req: Request, res: Response): void;
    static generateUrl(req: Request, res: Response): void;
}
