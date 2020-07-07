import { Entity, PrimaryColumn, Column, OneToMany, BeforeInsert, BaseEntity, ManyToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { v4 } from 'uuid';

import { Author } from './author';
import { Lazy } from '../common/lazy';
import { Collection } from './collection';
import { Nullable } from '../common/nullable';
import { BookIdentifiers } from './book-identifiers';

@ObjectType()
@Entity()
export class Book extends BaseEntity {

    public static async createFromIsbn(isbn: string) {
        // TODO: Move logic here
    }

    @Field()
    @PrimaryColumn()
    public id: string;

    @Field()
    @Column()
    public title: string;

    @Field(type => BookIdentifiers)
    @OneToOne(type => BookIdentifiers, { eager: true, cascade: true })
    @JoinColumn()
    public identifiers: BookIdentifiers;

    @Field(Nullable)
    @Column(Nullable)
    public synopsis?: string;

    @Field(type => [Author])
    @ManyToMany(type => Author, author => author.books)
    @JoinTable()
    public authors: Promise<Author[]>;

    @Field(type => [Collection], Nullable)
    @ManyToMany(type => Collection, collection => collection.books)
    public collections?: Promise<Collection[]>;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
