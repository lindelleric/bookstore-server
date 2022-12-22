import { Resolver, Query, Authorized, Arg, Root, Mutation, Ctx, Int, FieldResolver } from 'type-graphql';

import discord from './../middlewares/discord';

import { Book } from '../entity/book';
import { relative } from 'path';
import { BookDepositorySuggestion, BookDepository } from '../helpers/bookdepository';
import { Author } from '../entity/author';
import { BookIdentifiers } from '../entity/book-identifiers';
import { OpenLibrary } from '../helpers/openlibrary';
import { AuthorIdentifiers } from '../entity/author-identifiers';
import { User } from '../entity/user';
import BookSuggestionHelper, { BookSuggestion } from '../helpers/book-suggestion-helper';
import GoogleBooks from '../helpers/google-books';
import BookHelper from '../helpers/book-helper';
import CoverHelper from '../helpers/cover-helper';
import { List } from '../entity/list';
import { Wishlist } from '../entity/wishlist';

@Resolver(of => Book)
export class BookResolver {

    public constructor() { }

    @Authorized()
    @Query(returns => Book)
    public async book(
        @Arg('bookId', { nullable: true }) bookId?: string,
        @Arg('isbn', { nullable: true }) isbn?: string
    ) {
        let book: Book;

        if (bookId) {
            book = await Book.findOne(bookId);
        } else if (isbn) {
            book = await Book.findOne({
                where: {
                    isbn13: isbn
                }
            });
        }

        if (!book) {
            const googleVolume = await GoogleBooks.getBookViaIsbn(isbn);
            book = BookHelper.parseBookFromGoogleVolume(googleVolume);
        }
        
        if (!book) {
            throw new Error(`Book with id:${ bookId } or ISBN: ${ isbn }, cannot be found`);
        }

        // await CoverHelper.cacheCoverFromGoogle(book.isbn13, book.googleId);

        return book;
    }

    @Authorized()
    @Query(returns => [Book])
    public books(): Promise<Book[]> {
        // TODO: Only get books that are owned by the current user
        return Book.find();
    }

    @Authorized()
    @Query(returns => [BookSuggestion])
    public searchBook(
        @Arg('searchString') searchString: string
    ): Promise<BookSuggestion[]> {

        Book.find({
            where: {
                title: searchString
            }
        })


        // TODO: Check first if the book exists in database ad owned, wishlist or lowned/bowwowed
        return BookSuggestionHelper.getSuggestions(searchString);
    }

    @Authorized()
    @Mutation(returns => Book)
    public async markAsOwned(
        @Arg('isbn') isbn: string
    ) {
        // TODO: Get the logged in user
        const user = await User.findOne('b605271d-e8fa-4d4c-95ea-f06d90b43fbc');

        // TODO: Check first if the book exists in the database
        const googleVolume = await GoogleBooks.getBookViaIsbn(isbn);
        const book = BookHelper.parseBookFromGoogleVolume(googleVolume);

        book.owner = Promise.resolve(user);
        
        return book.save();

        // user.books = Promise.resolve([...await user.books, book]);

        // await user.save();
        
        // return book;
    }

    // @FieldResolver(returns => [Author])
    // async authors(@Root() book: Book) {
    //     const b = await Book.findOne(book);
    //     return await b.authors;
    // }

    @FieldResolver(returns => [Wishlist])
    async wishlists(@Root() book: Book) {
        const b = await Book.findOne(book.id);
        return await b.wishlists;
    }

    @FieldResolver(returns => [List])
    async lists(@Root() book: Book) {
        const b = await Book.findOne(book.id);
        return await b.lists;
    }

    @FieldResolver(returns => User)
    async owner(@Root() book: Book) {
        const b = await Book.findOne(book.id);
        return await b.owner;
    }

    // @FieldResolver(returns => BookIdentifiers)
    // async identifiers(@Root() book: Book) {
    //     const b = await Book.findOne(book);
    //     return b.identifiers;
    // }
}
