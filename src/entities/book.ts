import { Entity, PrimaryColumn, Column, OneToMany, BeforeInsert, BaseEntity, ManyToMany, OneToOne, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { v4 } from 'uuid';

import { Author } from './author';
import { Wishlist } from './wishlist';
import { Nullable } from '../common/nullable';
import { BookIdentifiers } from './book-identifiers';
import { OpenLibrary } from '../helpers/openlibrary';
import { AuthorIdentifiers } from './author-identifiers';
import { User } from './user';

@ObjectType()
@Entity()
export class Book extends BaseEntity {

    public static async createFromIsbn(isbn: string) {
        const book = new Book();

        const { details } = await OpenLibrary.getBook(isbn);
        const { title, authors, identifiers, number_of_pages, languages, isbn_13, isbn_10, key, publish_date } = details;

        book.title = title;
        book.numberOfPages = number_of_pages;
        book.publishDate = publish_date;

        book.identifiers = BookIdentifiers.createFromOpenLibrary({key: [key], ...identifiers});

        if (isbn_13?.length) {
            book.isbn13 = isbn_13[0] ?? isbn;
        }
        
        if (isbn_10?.length) {
            book.isbn10 = isbn_10[0] ?? null;
        }

        const authorsToAdd = [];

        for (const { name, key } of authors) {
            const author = new Author();

            const authorIdentifiers = new AuthorIdentifiers();
            authorIdentifiers.openlibrary = key;

            author.name = name;
            author.identifiers = authorIdentifiers;

            authorsToAdd.push(author);
        }

        book.authors = Promise.resolve(authorsToAdd);

        console.log(book);
        return await book.save();
    }

    @Field()
    @PrimaryColumn()
    public id: string;

    @Field()
    @Column()
    public title: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn10?: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn13?: string;

    @Field(type => BookIdentifiers)
    @OneToOne(type => BookIdentifiers, { eager: true, cascade: true })
    @JoinColumn()
    public identifiers: BookIdentifiers;

    @Field(Nullable)
    @Column(Nullable)
    public synopsis?: string;

    @Field(Nullable)
    @Column(Nullable)
    public numberOfPages?: number;

    @Field(Nullable)
    @Column(Nullable)
    public publishDate?: string;

    @Field(type => [Author])
    @ManyToMany(type => Author, author => author.books, { cascade: ['insert'] })
    @JoinTable()
    public authors: Promise<Author[]>;

    // @Field(type => [Collection], Nullable)
    // @ManyToMany(type => Collection, collection => collection.books)
    // public collections?: Promise<Collection[]>;

    @Field(type => [Wishlist], Nullable)
    @ManyToMany(type => Wishlist, wishlist => wishlist.books)
    public wishlists?: Promise<Wishlist[]>;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
