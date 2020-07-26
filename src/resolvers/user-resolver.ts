import { Resolver, Query, Authorized, Ctx, Mutation, FieldResolver, Root } from 'type-graphql';
import { Context } from './../common/context.interface';

import { User } from '../entities/user';
import { Book } from '../entities/book';

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
}

