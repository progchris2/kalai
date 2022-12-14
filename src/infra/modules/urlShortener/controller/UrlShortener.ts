import { v4 as uuidv4 } from 'uuid';
import {Request, Response} from 'express'
import { injectable, inject } from "inversify";

import ContractController from '../../contract.controller'
import {URLGeneratorInterface} from '../../../../domains/generator/URLGeneratorInterface';
import ShortRepositoryInterface from '../repository/ShortRepositoryInterface';
import { TYPES } from '../../../../core/container/types';

@injectable()
export default class UrlShortenerController extends ContractController {

    constructor(
        @inject(TYPES.ShortRepositoryInterface) private readonly repository: ShortRepositoryInterface,
        @inject(TYPES.URLGeneratorInterface) private readonly urlGenerator: URLGeneratorInterface
    ) {
        super()
    }


    public redirectUrl = (req: Request, res: Response): void  => {
        const urls = this.repository.findUniqByShort(`http://localhost:8090${req.url}`)

        if (!urls) throw new Error('short url not found')
        this.redirectRender(res, urls.originalUri)
    };

    public generateUrl = (req: Request, res: Response): void => {
        try {
            let urls = {
                originalUri: '',
                shortUrl: ''
            };

            do {
                urls = this.urlGenerator.generate(req.body.url, uuidv4());
            } while (this.repository.shortIsExisting(urls.shortUrl) === true)

            this.repository.insertUrl(urls)

            this.jsonRender(res, {
                ...urls
            })
        } catch (e) {
            this.jsonRender(res, {
                message: (e as unknown as Record<string, string>).message,
            }, 501)
        }
    }
}

