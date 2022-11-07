import UrlShortenerController from '../../infra/modules/urlShortener/controller/UrlShortener';
import { CreatorFactory } from './CreatorFactory';
declare class UrlShortFactory extends CreatorFactory {
    factoryMethod(): UrlShortenerController;
    get getController(): UrlShortenerController;
}
export default UrlShortFactory;
