import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity, ManyToMany, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { v4 } from 'uuid';
import { Collection } from './collection';
import { Lazy } from '../common/lazy';
import { Nullable } from '../common/nullable';

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field()
    @PrimaryColumn()
    public id: string;

    @Field()
    @Column()
    public email: string;

    @Field()
    @Column()
    public passwordHash: string;

    @Field()
    @Column()
    public firstName: string;

    @Field()
    @Column()
    public lastName: string;

    @Field(type => [Collection], Nullable)
    @OneToMany(type => Collection, collection => collection.owner)
    public collections?: Promise<Collection[]>;

    @BeforeInsert()
    public init() {
        this.id = v4();
    }
}
