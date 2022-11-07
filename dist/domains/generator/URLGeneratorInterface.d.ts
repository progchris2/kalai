export interface URLGeneratorType {
    originalUri: string;
    shortUrl: string;
}
export interface URLGeneratorInterface {
    generate(url: string, id: string): URLGeneratorType;
}
