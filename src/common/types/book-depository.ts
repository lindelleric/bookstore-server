
export type BookDepositorySuggestionAPI = {
    title: string;
    contributors: string;
    books: BookDepositorySuggestionBookAPI[];
}

export type BookDepositorySuggestionBookAPI = {
    format: 'paperback' | 'hardcover' | string;
    isbn13: string;
}