import { URLGeneratorType, URLGeneratorInterface } from "./URLGeneratorInterface";
declare class URLGenerator implements URLGeneratorInterface {
    private test;
    generate(url: string, id: string): URLGeneratorType;
    private isValidUrl;
}
export default URLGenerator;
