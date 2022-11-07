import UrlShortenerController from "src/infra/modules/urlShortener/controller/UrlShortener";

export abstract class CreatorFactory  {
    abstract factoryMethod(): UrlShortenerController


    get getController() {
        return this.factoryMethod()
    }
}




