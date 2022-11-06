import URLGenerator from './url.generator'
import {isObject} from '../../utils'
import { v4 as uuidv4 } from 'uuid';

describe('url generator', () => {
    let url: URLGenerator;

    beforeEach(() => {
        url = new URLGenerator();
    })

    it('function generates an existing url', () => {
        expect(url.generate).toBeDefined();
    })

    it('can generate a short url', () => {
        const newURL = url.generate('https://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context', uuidv4())
        expect(isObject(newURL)).toBeTruthy()
        expect(newURL).not.toBe(null)
    })
});