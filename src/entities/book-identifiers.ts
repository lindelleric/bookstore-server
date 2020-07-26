import { Entity, PrimaryColumn, Column, OneToMany, BeforeInsert, BaseEntity, OneToOne, JoinTable } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { v4 } from 'uuid';

import { Nullable } from '../common/nullable';
import { OpenLibraryBookIdentifiersAPI } from '../common/types/open-library';

@ObjectType()
@Entity()
export class BookIdentifiers extends BaseEntity {

    public static createFromOpenLibrary(olIdentifiers: OpenLibraryBookIdentifiersAPI) {
        const identifiers = new BookIdentifiers();

        // identifiers.isbn13 = olIdentifiers.isbn_13 ? olIdentifiers.isbn_13[0] : null;
        // identifiers.isbn10 = olIdentifiers.isbn_10 ? olIdentifiers.isbn_10[0] : null;
        identifiers.openlibrary = olIdentifiers.key ? olIdentifiers.key[0] : null;
        identifiers.goodreads = olIdentifiers.goodreads ? olIdentifiers.goodreads[0] : null;

        return identifiers;
    }

    // @Field()
    @PrimaryColumn()
    public id: string;

    @Field(Nullable)
    @Column(Nullable)
    public openlibrary?: string;

    @Field(Nullable)
    @Column(Nullable)
    public goodreads?: string;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
