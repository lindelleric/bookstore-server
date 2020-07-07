import { createError } from 'apollo-errors';

export const AuthError = createError('AuthError', {
    message: 'User could not be authenticated'
});
