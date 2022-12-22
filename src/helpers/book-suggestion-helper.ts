import { ObjectType, Field } from "type-graphql";
import GoogleBooks from "./google-books";
import { Volume } from "../common/types/google-books";
import { Nullable } from "../common/nullable";
import CoverHelper from "./cover-helper";

@ObjectType()
export class BookSuggestion {

    public static parseFromGoogleVolume(volume: Volume) {
        const suggestion = new BookSuggestion();

        const { id, volumeInfo, searchInfo  } = volume;
        const { title, industryIdentifiers, authors } = volumeInfo;

        suggestion.googleId = id;
        suggestion.title = title;
        suggestion.authors = authors || [];
        suggestion.summarySnippet = searchInfo?.textSnippet;
        
        // TODO: Allow isbn10 if isbn13 is not present
        suggestion.isbn = industryIdentifiers?.filter(({ type }) => type === 'ISBN_13')?.map(({ identifier }) => identifier)[0];
        suggestion.isbn = suggestion.isbn ? suggestion.isbn : industryIdentifiers[0].identifier;

        return suggestion;
    }

    @Field()
    public title: string;

    public googleId: string;

    @Field(Nullable)
    public isbn: string;

    @Field(Nullable)
    public summarySnippet: string;

    @Field(type => [String])
    public authors: string[];
}

export default class BookSuggestionHelper {
    public static async getSuggestions(searchString: string): Promise<BookSuggestion[]> {
        const searchResult = await GoogleBooks.searchBook(searchString);
        const suggestions = [];
        
        searchResult.items = searchResult?.items?.filter(({ volumeInfo: { industryIdentifiers } }) => (industryIdentifiers || []).filter(({type}) => type === 'ISBN_13' || type === 'ISBN_10').length);
        searchResult?.items?.forEach((volume) => suggestions.push(BookSuggestion.parseFromGoogleVolume(volume)));

        // suggestions.forEach(async ({googleId, isbn}) => {
        //     const url = `https://books.google.com/books/content?id=${googleId}&printsec=frontcover&img=1&zoom=5`;
        //     console.log({url})
        //     await CoverHelper.cacheTumbnail(isbn, url);
        // });

        return suggestions;
    }    
}