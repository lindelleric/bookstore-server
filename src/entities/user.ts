import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, ManyToOne, OneToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Nullable } from '../common/nullable';
import { Wishlist } from './wishlist';
import { Book } from './book';

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Field()
    @Column()
    public email: string;

    @Column()
    public passwordHash: string;

    @Field()
    @Column()
    public firstName: string;

    @Field()
    @Column()
    public lastName: string;

    @Field(type => [Wishlist], Nullable)
    @OneToMany(type => Wishlist, wishlist => wishlist.owner)
    public wishlists?: Promise<Wishlist[]>;

    @Field(type => [Book], Nullable)
    @OneToMany(type => Book, book => book.owner)
    public books?: Promise<Book[]>;

    // @Field(type => [Collection], Nullable)
    // @OneToMany(type => Collection, collection => collection.owner)
    // public collections?: Promise<Collection[]>;
}
