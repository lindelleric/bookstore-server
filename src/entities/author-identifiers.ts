import { Entity, PrimaryColumn, Column, OneToMany, BeforeInsert, BaseEntity, OneToOne, JoinTable,  } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { v4 } from 'uuid';

import { Lazy } from '../common/lazy';
import { Nullable } from '../common/nullable';
import { Book } from './book';
import { Author } from './author';

@ObjectType()
@Entity()
export class AuthorIdentifiers extends BaseEntity {

    // @Field()
    @PrimaryColumn()
    public id: string;
    
    @Field(Nullable)
    @Column(Nullable)
    public openlibrary?: string;

    @Field(Nullable)
    @Column(Nullable)
    public goodreads?: string;

    // @Field(type => Author)
    // @OneToOne(type => Author, author => author.identifiers)
    // public author: Author;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
