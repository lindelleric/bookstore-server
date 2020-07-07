import { Resolver, Query, Authorized, Arg, Mutation, FieldResolver, Root } from 'type-graphql';

import { Collection } from '../entities/collection';
import { Book } from '../entities/book';
import { User } from '../entities/user';
import { OpenLibrary } from '../helpers/openlibrary';
import { BookIdentifiers } from '../entities/book-identifiers';
import { Author } from '../entities/author';
import { AuthorIdentifiers } from '../entities/author-identifiers';

@Resolver(of => Collection)
export class CollectionResolver {
    public constructor() { }

    public collection(id: string) {
        return Collection.findOne(id);
    }

    @Authorized()
    @Query(returns => [Collection])
    public collections(): Promise<Collection[]> {
        return Collection.find();
        // return Collection.find({
        //     join: {
        //         alias: "collection",
        //         leftJoinAndSelect: {
        //             owner: "collection.owner",
        //             books: 'collection.books'
        //         }
        //     }
        // });
    }

    @Authorized()
    @Mutation(returns => Collection)
    public async createCollection(
        @Arg('title') title: string
    ) {
        const collection = new Collection();
        collection.title = title;
        collection.description = 'My Books';
        
        // TODO: get user from token
        const user = await User.findOne({ where: { email: 'test@testsson.test' }});
        collection.owner = Promise.resolve(user);

        return await collection.save();
    }

    public updateCollection() {

    }

    @Authorized()
    @Mutation(returns => Collection)
    public async deleteCollection(
        @Arg('id') id: string
    ) {
        const collection = await Collection.findOne(id)
        return collection.remove();
    }

    @Authorized()
    @Mutation(returns => Collection)
    public async addBookToCollection(
        @Arg('bookId') bookId: string
    ) {
        const book = await Book.findOne(bookId);
        console.log(book);
        
        const collection = await Collection.findOne({
            where: { title: 'list' }
        });
        
        collection.books = Promise.resolve([...await collection.books, book]);
        // // collection.books.push(book);
        
        return await collection.save();
    }

    public removeBookFromCollection() {

    }

    @FieldResolver(returns => [Book])
    async books(@Root() collection: Collection) {
        const c = await Collection.findOne(collection);
        return await c.books;
    }

    @FieldResolver(returns => User)
    async owner(@Root() collection: Collection) {
        const c = await Collection.findOne(collection);
        return await c.owner;
    }
}

