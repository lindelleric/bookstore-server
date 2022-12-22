import { Volume } from "./../common/types/google-books";
import { Book } from "../entity/book";

export default class BookHelper {
    public static parseBookFromGoogleVolume(volume: Volume): Book {
        const book = new Book();
        const { id, volumeInfo } = volume;
        const { title, industryIdentifiers = [], authors, description, publishedDate, publisher, pageCount } = volumeInfo;

        book.title = title;
        book.googleId = id;
        book.isbn13 = industryIdentifiers.find(({ type }) => type === 'ISBN_13')?.identifier;
        book.isbn10 = industryIdentifiers.find(({ type }) => type === 'ISBN_10')?.identifier;
        book.pageCount = pageCount;
        book.publishDate = publishedDate;
        book.publisher = publisher;
        book.synopsis = description;
        book.authors = authors;

        return book;
    }
}