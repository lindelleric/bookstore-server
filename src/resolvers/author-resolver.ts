import { Resolver, Query, Authorized, FieldResolver, Root, Mutation, Arg } from 'type-graphql';

import { Author } from '../entities/author';
import { Book } from '../entities/book';
import { AuthorIdentifiers } from '../entities/author-identifiers';

@Resolver(of => Author)
export class AuthorResolver {
    public constructor() { }

    @Authorized()
    @Query(returns => [Author])
    public authors(): Promise<Author[]> {
        return Author.find();
    }

    @Authorized()
    @Mutation(returns => Author)
    public async assignBook(
        @Arg('bookId') bookId: string,
        @Arg('authorId') authorId: string,
    ) {
        const author = await Author.findOne(authorId);
        const book = await Book.findOne(bookId);
        (await author.books).push(book);
        return author.save();
    }

    @FieldResolver(returns => [Book])
    async books(@Root() author: Author) {
        const b = await Author.findOne(author);
        return await b.books;
    }

    @FieldResolver(returns => AuthorIdentifiers)
    async identifiers(@Root() author: Author) {
        const b = await Author.findOne(author);
        return b.identifiers;
    }

    // @Authorized(Roles.ADMIN)
    // @Mutation(returns => Book)
    // public async createInvitation(
    //     @Ctx() context,
    //     @Arg('title') title: string,
    //     @Arg('role', { nullable: true }) role?: string
    // ) {
    //     const invitation = await this.invitationRepository.create();
    //     invitation.title = title;

    //     if (role === Roles.ADMIN) {
    //         invitation.role = role;
    //     }

    //     return await this.invitationRepository.save(invitation);
    // }
}

