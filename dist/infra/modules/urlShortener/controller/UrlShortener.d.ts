import { Request, Response } from 'express';
import ContractController from '../../contract.controller';
import { URLGeneratorInterface } from '../../../../domains/generator/URLGeneratorInterface';
import ShortRepositoryInterface from '../repository/ShortRepositoryInterface';
export default class UrlShortenerController extends ContractController {
    private readonly repository;
    private readonly urlGenerator;
    constructor(repository: ShortRepositoryInterface, urlGenerator: URLGeneratorInterface);
    redirectUrl: (req: Request, res: Response) => void;
    generateUrl: (req: Request, res: Response) => void;
}
