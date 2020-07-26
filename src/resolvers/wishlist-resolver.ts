import { Resolver, Query, Authorized, Arg, Mutation, FieldResolver, Root } from 'type-graphql';

import { Wishlist } from '../entities/wishlist';
import { Book } from '../entities/book';
import { User } from '../entities/user';

@Resolver(of => Wishlist)
export class WishlistResolver {
    public constructor() { }

    @Authorized()
    @Query(returns => Wishlist)
    public wishlist(id: string) {
        return Wishlist.findOne(id);
    }

    @Authorized()
    @Query(returns => [Wishlist])
    public wishlists() {
        return Wishlist.find();
    }

    // @Authorized()
    // @Mutation(returns => Collection)
    // public async createCollection(
    //     @Arg('title') title: string
    // ) {
    //     const collection = new Collection();
    //     collection.title = title;
    //     collection.description = 'My Books';

    //     // TODO: get user from token
    //     const user = await User.findOne({ where: { email: 'test@testsson.test' } });
    //     collection.owner = Promise.resolve(user);

    //     return await collection.save();
    // }

    // public updateCollection() {

    // }

    // @Authorized()
    // @Mutation(returns => Collection)
    // public async deleteCollection(
    //     @Arg('id') id: string
    // ) {
    //     const collection = await Collection.findOne(id)
    //     return collection.remove();
    // }

    // @Authorized()
    // @Mutation(returns => Collection)
    // public async addBookToCollection(
    //     @Arg('bookId') bookId: string
    // ) {
    //     const book = await Book.findOne(bookId);
    //     console.log(book);

    //     const collection = await Collection.findOne({
    //         where: { title: 'list' }
    //     });

    //     collection.books = Promise.resolve([...await collection.books, book]);
    //     // // collection.books.push(book);

    //     return await collection.save();
    // }

    // @Authorized()
    // @Mutation(returns => Collection)
    // public async addBookToCollectionViaIsbn(
    //     @Arg('isbn') isbn: string
    // ) {
    //     const book = await Book.createFromIsbn(isbn);
    //     console.log(book);

    //     const collection = await Collection.findOne({
    //         where: { title: 'list' }
    //     });

    //     collection.books = Promise.resolve([...await collection.books, book]);
    //     // // collection.books.push(book);

    //     return await collection.save();
    // }

    // public removeBookFromCollection() {

    // }

    @FieldResolver(returns => [Book])
    async books(@Root() wishlist: Wishlist) {
        const w = await Wishlist.findOne(wishlist);
        return await w.books;
    }

    @FieldResolver(returns => User)
    async owner(@Root() wishlist: Wishlist) {
        const w = await Wishlist.findOne(wishlist);
        return await w.owner;
    }
}

