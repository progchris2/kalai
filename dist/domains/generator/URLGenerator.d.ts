export interface URLGeneratorType {
    long: string;
    short: string;
}
declare class URLGenerator {
    static generate(url: string, id: string): URLGeneratorType;
}
export default URLGenerator;
