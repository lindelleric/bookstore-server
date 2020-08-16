import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Nullable } from '../common/nullable';

@ObjectType()
@Entity()
export class AuthorIdentifiers extends BaseEntity {

    // @Field()
    @PrimaryGeneratedColumn('uuid')
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
}
