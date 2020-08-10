import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, JoinColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { v4 } from 'uuid';

import { Book } from './book';
import { Lazy } from '../common/lazy';
import { Nullable } from '../common/nullable';
import { AuthorIdentifiers } from './author-identifiers';

@ObjectType()
@Entity()
export class Author extends BaseEntity {

    @Field()
    @PrimaryColumn()
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

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
