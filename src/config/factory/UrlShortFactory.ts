import DatabaseSQLite from '../../applications/bases/database';
import URLGenerator from '../../domains/generator/URLGenerator';
import UrlShortenerController from '../../infra/modules/urlShortener/controller/UrlShortener';
import ShortRepository from '../../infra/modules/urlShortener/repository/ShortRepository';
import { CreatorFactory } from './CreatorFactory';

class UrlShortFactory extends CreatorFactory {
    public factoryMethod() {
        const urlGenerator = new URLGenerator()
        const repository = new ShortRepository(DatabaseSQLite.instance)
        return new UrlShortenerController(repository, urlGenerator)
    }
}

export default UrlShortFactory;