import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { v4 } from 'uuid';

import { Lazy } from '../common/lazy';
import { Book } from './book';
import { Nullable } from '../common/nullable';
import { User } from './user';

@ObjectType()
@Entity()
export class Collection extends BaseEntity {

    @Field()
    @PrimaryColumn()
    public id: string;

    @Field()
    @Column()
    public title: string;

    @Field(Nullable)
    @Column(Nullable)
    public description?: string;

    @Field(type => User)
    @ManyToOne(type => User, user => user.collections)
    public owner: Promise<User>;

    @Field(type => [Book], Nullable)
    @ManyToMany(type => Book, book => book.collections)
    @JoinTable()
    public books?: Promise<Book[]>;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
