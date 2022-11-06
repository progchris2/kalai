export interface URLGeneratorType {
    long: string;
    short: string;
}


interface URLGeneratorInterface  {
    generate(url: string, id: string): URLGeneratorType;
};

export default URLGeneratorInterface;