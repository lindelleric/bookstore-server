import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, ManyToOne, OneToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Nullable } from '../common/nullable';
import { List } from './list';
import { Book } from './book';
import { Wishlist } from './wishlist';

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

    @Field(type => Wishlist, Nullable)
    @OneToOne(type => Wishlist, wishlist => wishlist.owner)
    @JoinColumn()
    public wishlist?: Promise<Wishlist>;

    @Field(type => [List], Nullable)
    @OneToMany(type => List, list => list.owner)
    public lists?: Promise<List[]>;

    @Field(type => [Book], Nullable)
    @OneToMany(type => Book, book => book.owner)
    public books?: Promise<Book[]>;
}
