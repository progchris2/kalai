import {Request, Response} from 'express'
import ContractController from '../../contract.controller'

/**
 * RedocsController
 * gestion de la docs
 */
export default class RedocsController extends ContractController {
    public static swaggerDocument(req: Request, res: Response) {
        RedocsController.fileRender(res, '/swagger.json');
    };

    public static convertToRedocs(req: Request, res: Response) {
        RedocsController.fileRender(res, '/public/index.html');
    }
}
