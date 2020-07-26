import fetch from './fetch';
import { ObjectType, Field } from 'type-graphql';
import fs from 'fs';

import { BookDepositorySuggestionAPI } from './../common/types/book-depository';

@ObjectType()
export class BookDepositorySuggestion {
    @Field()
    public title: string;

    @Field()
    public isbn13: string;

    @Field()
    public format: string;

    @Field(type => [String])
    public contributors: string[];

    @Field(type => String)
    public coverUrl: string;

    public constructor(title: string, contributors: string, isbn13: string, format: string) {
        this.title = title;
        this.isbn13 = isbn13;
        this.format = format;
        this.contributors = contributors.split(', ').filter((c) => !!c);       
        
        this.coverUrl = ''; // TODO: Set correct coverUrl "/book/cover?isbn=isbn" or bookId if the book is owned. This is to get cutom cover.
    }
}

export class BookDepository {
    private static readonly suggestionUrl = 'https://suggestions.bookdepository.com';

    private static parseSuggestions(suggestions: BookDepositorySuggestionAPI[]) {
        const toReturn: BookDepositorySuggestion[] = [];

        for (const { title, contributors, books } of suggestions) {
            if (books.length === 1) {
                toReturn.push(new BookDepositorySuggestion(title, contributors, books[0].isbn13, books[0].format));
            } else {
                for (const book of books) {
                    toReturn.push(new BookDepositorySuggestion(title, contributors, book.isbn13, book.format));
                }
            }
        }

        return toReturn;
    }

    public static async getSuggestion(searchString: string): Promise<BookDepositorySuggestion[]> {
        const r = await fetch(`${ this.suggestionUrl }/suggestions?searchTerm=${ searchString }`)
        const json = await r.json();
        const suggestions: BookDepositorySuggestionAPI[] = json.content.suggestBooks;

        return this.parseSuggestions(suggestions) || [];
    }
}