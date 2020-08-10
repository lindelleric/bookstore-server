import fetch from './fetch';
import { OpenLibraryResponseAPI } from '../common/types/open-library';

export class OpenLibrary {
    private static baseUrl: string = 'https://openlibrary.org/api';
    private static extraBits: string = '&format=json&jscmd=details';

    public static async getBook(isbn: string) {
        // https://openlibrary.org/api/books?bibkeys=ISBN:9781784978518&format=json&jscmd=data
        console.log(`${this.baseUrl}/books?bibkeys=ISBN:${isbn}${this.extraBits}`);
        
        const r = await fetch(`${this.baseUrl}/books?bibkeys=ISBN:${isbn}${this.extraBits}`);
        const json = await r.json();
        const bookResponse: OpenLibraryResponseAPI = json;
        console.log(JSON.stringify(bookResponse, null, 2));

        return bookResponse[Object.keys(bookResponse)[0]];
    }
}
