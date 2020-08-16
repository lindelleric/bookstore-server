import { Entity, Column, BaseEntity, ManyToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Wishlist } from './wishlist';
import { Nullable } from '../common/nullable';
import { BookIdentifiers } from './book-identifiers';
import { User } from './user';

@ObjectType()
@Entity()
export class Book extends BaseEntity {

    // public static async createFromIsbn(isbn: string) {
    //     const book = new Book();

    //     const { details } = await OpenLibrary.getBook(isbn);
    //     const { title, authors, identifiers, number_of_pages, languages, isbn_13, isbn_10, key, publish_date } = details;

    //     book.title = title;
    //     book.numberOfPages = number_of_pages;
    //     book.publishDate = publish_date;

    //     book.identifiers = BookIdentifiers.createFromOpenLibrary({key: [key], ...identifiers});

    //     if (isbn_13?.length) {
    //         book.isbn13 = isbn_13[0] ?? isbn;
    //     }
        
    //     if (isbn_10?.length) {
    //         book.isbn10 = isbn_10[0] ?? null;
    //     }

    //     const authorsToAdd = [];

    //     for (const { name, key } of authors) {
    //         const author = new Author();

    //         const authorIdentifiers = new AuthorIdentifiers();
    //         authorIdentifiers.openlibrary = key;

    //         author.name = name;
    //         author.identifiers = authorIdentifiers;

    //         authorsToAdd.push(author);
    //     }

    //     book.authors = Promise.resolve(authorsToAdd);

    //     console.log(book);
    //     return await book.save();
    // }

    @Field(Nullable) // For books that are not yet saved
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Field()
    @Column()
    public googleId: string;

    @Field()
    @Column()
    public title: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn10?: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn13?: string;

    @Field(type => BookIdentifiers, Nullable)
    @OneToOne(type => BookIdentifiers, { eager: true, cascade: true, nullable: true })
    @JoinColumn()
    public identifiers: BookIdentifiers;

    @Field(Nullable)
    @Column(Nullable)
    public synopsis?: string;

    @Field(Nullable)
    @Column(Nullable)
    public pageCount?: number;

    @Field(Nullable)
    @Column(Nullable)
    public publishDate?: string;

    @Field(Nullable)
    @Column(Nullable)
    public publisher?: string;

    @Field(type => [String])
    @Column('simple-array')
    public authors: string[];

    @Field(type => User, Nullable)
    @ManyToOne(type => User, user => user.books, Nullable)
    public owner: Promise<User>;

    // @Field(type => [Author])
    // @ManyToMany(type => Author, author => author.books, { cascade: ['insert'] })
    // @JoinTable()
    // public authors: Promise<Author[]>;

    @Field(type => [Wishlist], Nullable)
    @ManyToMany(type => Wishlist, wishlist => wishlist.books)
    public wishlists?: Promise<Wishlist[]>;
}
