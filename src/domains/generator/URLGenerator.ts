import { injectable } from "inversify";
import { URLGeneratorType, URLGeneratorInterface } from "./URLGeneratorInterface";

@injectable()
class URLGenerator implements URLGeneratorInterface {
    private test = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    public generate(url: string, id: string): URLGeneratorType {
        if (!this.isValidUrl(url))
            throw new Error('invalid url');

        return  {
            originalUri: url,
            shortUrl: id.substring(0, 12)
        }
    }

    private isValidUrl(url: string): boolean {
        const regex = new RegExp(this.test)
        return regex.test(url)
    }
};

export default URLGenerator;