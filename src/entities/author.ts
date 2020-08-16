import { Entity, Column, BaseEntity, ManyToMany, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Book } from './book';
import { Nullable } from '../common/nullable';
import { AuthorIdentifiers } from './author-identifiers';

@ObjectType()
@Entity()
export class Author extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Field()
    @Column()
    public name: string;

    @Field(Nullable)
    @Column(Nullable)
    public description: string;

    @Field(type => AuthorIdentifiers, Nullable)
    @OneToOne(type => AuthorIdentifiers, { eager: true, cascade: true, nullable: true })
    @JoinColumn()
    public identifiers: AuthorIdentifiers;

    @Field(type => [Book])
    @ManyToMany(type => Book, book => book.authors)
    public books: Promise<Book[]>;
}
