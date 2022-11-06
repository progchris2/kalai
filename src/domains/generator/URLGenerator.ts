import URLGeneratorInterface from "./URLGeneratorInterface";

export interface URLGeneratorType {
    long: string;
    short: string;
}


class URLGenerator {

    /**
     *
     * @param url{string}
     * @param id{string}
     */
    public static generate(url: string, id: string): URLGeneratorType {
        return  {
            long: url,
            short: 'http://localhost:8090' + '/short/' + id.substring(0, 12)
        }
    }
};

export default URLGenerator;