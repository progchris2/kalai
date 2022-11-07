import URLGenerator from './URLGenerator'
import { v4 as uuidv4 } from 'uuid';
import { isObject } from 'util';

describe('url generator', () => {
    let url: URLGenerator;

    beforeEach(() => {
        url = new URLGenerator();
    })

    it('function generates an existing url', () => {
        expect(url.generate).toBeDefined();
    })

    it('can generate a short url', () => {
        const newURL = url.generate('https://stackoverflow.com/questions', uuidv4())
        expect(newURL).not.toBe(null)
        expect(isObject(newURL)).toBeTruthy()
    })

    it('can\'t generate a short url, invalid url', () => {
        try {
            url.generate('https://stackoverflow', uuidv4())
        } catch(e) {
            expect(e.message).toBe('invalid url')
        }
    })
});