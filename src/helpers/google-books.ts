import { Volume, Volumes } from './../common/types/google-books';
import fetch from './fetch';


export default class GoogleBooks {
    public static baseUrl: string = 'https://www.googleapis.com/books';

    public static getCover(volumeId: string) {
        // https://books.google.com/books/content?id=kd1XlWVAIWQC&printsec=frontcover&img=1&zoom=3
    }

    public static getBookViaIsbn(isbn: string): Promise<Volume> {
        // https://www.googleapis.com/books/v1/volumes?q=isbn:9781448103706
        return fetch(`${GoogleBooks.baseUrl}/v1/volumes?q=${encodeURIComponent(`isbn:${isbn}`)}`).then((data) => data.json().then((json) => json.items[0]));;
    }

    public static getBookViaVolumeId(volumeId: string): Promise<Volume> {
        // https://www.googleapis.com/books/v1/volumes/kd1XlWVAIWQC
        return fetch(`${GoogleBooks.baseUrl}/v1/volumes/${volumeId}`).then((data) => data.json());;
    }

    public static searchBook(query: string): Promise<Volumes> {
        // https://www.googleapis.com/books/v1/volumes?q=three%20body%20problem
        return fetch(`${GoogleBooks.baseUrl}/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`).then((data) => data.json());
    }
}