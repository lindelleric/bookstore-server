import { Resolver, Query, Authorized, Arg, Root, Mutation, Ctx, Int, FieldResolver } from 'type-graphql';

import discord from './../middlewares/discord';

import { Book } from '../entities/book';
import { relative } from 'path';
import { BookDepositorySuggestion, BookDepository } from '../helpers/bookdepository';
import { Author } from '../entities/author';
import { BookIdentifiers } from '../entities/book-identifiers';
import { Collection } from '../entities/collection';
import { OpenLibrary } from '../helpers/openlibrary';
import { AuthorIdentifiers } from '../entities/author-identifiers';

@Resolver(of => Book)
export class BookResolver {
    private readonly baseOptions = { relations: ['authors', 'identifiers'] };

    public constructor() { }

    @Authorized()
    @Query(returns => Book)
    public async book(
        @Arg('bookId', { nullable: true }) bookId?: string,
        @Arg('ISBN13', { nullable: true }) isbn13?: string
    ) {
        let book: Book;

        if (bookId) {
            book = await Book.findOne(bookId, this.baseOptions);

        } else if (isbn13) {
            // TODO: Query via relation to identifiers
            // book = await Book.findOne({
            //     where: { isbn13 },
            //     ...this.baseOptions
            // });
        }

        if (!book) {
            throw new Error(`Book with id:${ bookId } or ISBN: ${ isbn13 }, cannot be found`);
        }
    }

    @Authorized()
    @Query(returns => [Book])
    public books(): Promise<Book[]> {
        // return Book.find({ loadEagerRelations: true, relations: ['authors'] });
        return Book.find();
        // return Book.find({
        //     join: {
        //         alias: "book",
        //         leftJoinAndSelect: {
        //             authors: "book.authors",
        //             identifiers: "book.identifiers"
        //         }
        //     }
        // });
    }

    @Authorized()
    @Query(returns => [BookDepositorySuggestion])
    public searchBook(
        @Arg('searchString') searchString: string
    ): Promise<BookDepositorySuggestion[]> {
        return BookDepository.getSuggestion(searchString);
        // search with https://suggestions.bookdepository.com/suggestions?searchTerm=${ searchString }
        // return null;
    }

    @Authorized()
    @Mutation(returns => Book)
    public async addBook(
        @Arg('isbn') isbn: string
    ) {
        const book = new Book();

        const { title, identifiers: olIdentifiers, authors } = await OpenLibrary.getBook(isbn);

        book.title = title;

        const identifiers = new BookIdentifiers;
        identifiers.isbn13 = olIdentifiers.isbn_13 ? olIdentifiers.isbn_13[0] : null;
        identifiers.isbn10 = olIdentifiers.isbn_10 ? olIdentifiers.isbn_10[0] : null;
        identifiers.openlibrary = olIdentifiers.openlibrary ? olIdentifiers.openlibrary[0] : null;

        book.identifiers = identifiers;

        const authorsToAdd = [];

        console.log({authors});

        for (const { name, url } of authors) {
            const author = new Author();

            const authorIdentifiers = new AuthorIdentifiers();
            authorIdentifiers.openlibrary = url;

            author.name = name;
            author.identifiers = authorIdentifiers;

            // await authorIdentifiers.save();

            authorsToAdd.push(await author.save());

            // (await book.authors).push(author);
        }

        console.log(authorsToAdd);
        // book.authors = authorsToAdd;
        book.authors = Promise.resolve(authorsToAdd);

        console.log(book);
        return await book.save();
    }

    @FieldResolver(returns => [Collection])
    async collections(@Root() book: Book) {
        const b = await Book.findOne(book);
        return await b.collections;
    }

    @FieldResolver(returns => [Author])
    async authors(@Root() book: Book) {
        const b = await Book.findOne(book);
        return await b.authors;
    }

    @FieldResolver(returns => BookIdentifiers)
    async identifiers(@Root() book: Book) {
        const b = await Book.findOne(book);
        // const b = await Book.createQueryBuilder("book")
        //     .leftJoinAndSelect("book.identifiers", "identifiers")
        //     .where("book.id = :ID", { ID: book.id })
        //     .getOne();
        // console.log(b);
        
        return b.identifiers;
    }
}

