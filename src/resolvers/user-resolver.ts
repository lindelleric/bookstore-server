import { Resolver, Query, Authorized, Ctx, Mutation, FieldResolver, Root } from 'type-graphql';
import { Context } from './../common/context.interface';

import { User } from '../entity/user';
import { Book } from '../entity/book';
import { List } from '../entity/list';
import { Wishlist } from '../entity/wishlist';

@Resolver(of => User)
export class UserResolver {
    public constructor() { }

    @Authorized()
    @Query(returns => User)
    public async me(
        @Ctx() { tokenData }: Context
    ) {
        const user = await User.findOne(tokenData.userId);

        if (!user) {
            throw new Error(`User not authenticated`);
        }

        return user;
    }

    @Authorized()
    @Mutation(returns => User)
    public async createUser() {
        const user = new User();

        user.firstName = 'test';
        user.lastName = 'testsson';
        user.email = 'test@testsson.test';
        user.passwordHash = 'thisisahash';

        return await user.save();
    }

    @Authorized()
    @Query(returns => [User])
    public users(): Promise<User[]> {
        return User.find();
    }

    @FieldResolver(returns => [Book])
    async books(@Root() user: User) {
        const u = await User.findOne(user);
        return await u.books;
    }

    @FieldResolver(returns => [List])
    async lists(@Root() user: User) {
        const u = await User.findOne(user);
        return await u.lists;
    }

    @FieldResolver(returns => Wishlist)
    async wishlist(@Root() user: User) {
        const u = await User.findOne(user);
        return await u.wishlist;
    }
}

