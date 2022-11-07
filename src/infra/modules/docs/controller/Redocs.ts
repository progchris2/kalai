import {Request, Response} from 'express'
import ContractController from '../../contract.controller'

/**
 * RedocsController
 * gestion de la docs
 */
export default class RedocsController extends ContractController {
    public swaggerDocument = (req: Request, res: Response) => {
        this.fileRender(res, '/swagger.json');
    };

    public convertToRedocs = (req: Request, res: Response) => {
        this.fileRender(res, '/public/index.html');
    }
}
