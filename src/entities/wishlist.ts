import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, JoinTable, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

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

    @Field()
    @Column()
    public isDefault: boolean;

    @Field(Nullable)
    @Column(Nullable)
    public description?: string;

    @Field(type => User)
    @ManyToOne(type => User, user => user.wishlists)
    public owner: Promise<User>;

    @Field(type => [Book], Nullable)
    @ManyToMany(type => Book, book => book.wishlists)
    @JoinTable()
    public books?: Promise<Book[]>;

    @BeforeInsert()
    public init() {
        this.isDefault = this.isDefault ?? false;
    }
}
