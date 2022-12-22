import jwt from 'jsonwebtoken';

import { Resolver, Mutation, Query, Authorized, Arg, Ctx } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';

import { AuthError } from './errors/AuthError';
import discord from './../middlewares/discord';

import { Context } from './../common/context.interface';
import { User } from '../entity/user';

@Resolver()
export class AuthResolver {
    constructor() {}

    @Mutation(returns => String)
    public async authenticate(@Arg('email') email: string, @Arg('password') password: string) {

        const user = await User.findOne({
            where: {
                email
            }
        });
        
        if (user) {

            // validate user.passworHash with password
            

            // discord.success(user.fullName, 'Har loggat in');
            return jwt.sign(
                {
                    email: user.email
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );
        } else {
            // discord.err('Error', `Koden: ${ invitationCode }, finns inte.`);
            throw new AuthError();
        }
    }
}
