import { Entity, PrimaryColumn, Column, OneToMany, BeforeInsert, BaseEntity, OneToOne, JoinTable } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { v4 } from 'uuid';

import { Nullable } from '../common/nullable';

@ObjectType()
@Entity()
export class BookIdentifiers extends BaseEntity {

    // @Field()
    @PrimaryColumn()
    public id: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn10?: string;

    @Field(Nullable)
    @Column(Nullable)
    public isbn13?: string;

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
