import { URLGeneratorType } from "../../../../domains/generator/URLGeneratorInterface";
interface ShortRepositoryInterface {
    shortIsExisting(short: string): boolean;
    insertUrl(urls: URLGeneratorType): void;
}
export default ShortRepositoryInterface;
