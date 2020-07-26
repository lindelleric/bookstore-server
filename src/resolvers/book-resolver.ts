import { Resolver, Query, Authorized, Arg, Root, Mutation, Ctx, Int, FieldResolver } from 'type-graphql';

import discord from './../middlewares/discord';

import { Book } from '../entities/book';
import { relative } from 'path';
import { BookDepositorySuggestion, BookDepository } from '../helpers/bookdepository';
import { Author } from '../entities/author';
import { BookIdentifiers } from '../entities/book-identifiers';
import { OpenLibrary } from '../helpers/openlibrary';
import { AuthorIdentifiers } from '../entities/author-identifiers';
import { User } from '../entities/user';

@Resolver(of => Book)
export class BookResolver {

    public constructor() { }

    @Authorized()
    @Query(returns => Book)
    public async book(
        @Arg('bookId', { nullable: true }) bookId?: string,
        @Arg('ISBN13', { nullable: true }) isbn13?: string
    ) {
        let book: Book;

        if (bookId) {
            book = await Book.findOne(bookId);

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

        return book;
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
        const book = await Book.createFromIsbn(isbn);
        const user = await User.findOne('925179bd-97d4-49e3-8fd1-d91c39f26461');
        
        user.books = Promise.resolve([...await user.books, book]);

        await user.save();
        
        return book;
    }

    // @FieldResolver(returns => [Collection])
    // async collections(@Root() book: Book) {
    //     const b = await Book.findOne(book);
    //     return await b.collections;
    // }

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

