import { v4 as uuidv4 } from 'uuid';
import {Request, Response} from 'express'

import URLGenerator from '../../../..//domains/generator/URLGenerator';
import DatabaseSQLite from '../../../../applications/bases/database'
import ContractController from '../../contract.controller'
import ShortRepository from '../repository/ShortRepository'

/**
 * HomeController
 */
export default class UrlShortenerController extends ContractController {


    public static redirectUrl(req: Request, res: Response): void {
        const shortUrlDB = new ShortRepository(DatabaseSQLite.instance);
        const urls = shortUrlDB.findUniqByShort(`http://localhost:8090${req.url}`)

        if (!urls) throw new Error('short url not found')
        console.log(urls.long)
        res.redirect(urls.long)
    };

    public static generateUrl(req: Request, res: Response): void {
        try {
            const shortUrlDB = new ShortRepository(DatabaseSQLite.instance)
            let urls = {
                short: '',
                long: ''
            };

            do {
                urls = URLGenerator.generate(req.body.url, uuidv4())
            } while (shortUrlDB.shortIsExisting(urls.short) === true)

            shortUrlDB.insertUrl(urls)
            UrlShortenerController.jsonRender(res, {
                ...urls
            })
        } catch (e) {
            UrlShortenerController.jsonRender(res, {
                message: (e as unknown as Record<string, string>).message,
            })
        }
    }
}

