import { Entity, Column, BaseEntity, ManyToMany, JoinTable, ManyToOne, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Book } from './book';
import { Nullable } from '../common/nullable';
import { User } from './user';

@ObjectType()
@Entity()
export class Wishlist extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Field()
    @Column()
    public title: string;

    @Field(Nullable)
    @Column(Nullable)
    public description?: string;

    @Field(type => User)
    @OneToOne(type => User, user => user.wishlist)
    public owner: Promise<User>;

    @Field(type => [Book], Nullable)
    @ManyToMany(type => Book, book => book.wishlists)
    @JoinTable()
    public books?: Promise<Book[]>;
}
