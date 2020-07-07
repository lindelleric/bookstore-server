// https://openlibrary.org/api/books?bibkeys=ISBN:9781784978518&format=json&jscmd=data

export type OpenLibraryResponseAPI = {
    [ISBNIdentifier: string]: OpenLibraryBookAPI;
}

export type OpenLibraryBookAPI = {
    publishers: OpenLibraryPublisherAPI[];
    pagination: string;
    title: string;
    url: string;
    identifiers: OpenLibraryBookIdentifiersAPI;
    cover: OpenLibraryBookCoverAPI;
    subjects: OpenLibraryBookSubjectAPI[];
    publish_date: string;
    key: string;
    authors: OpenLibraryAuthorAPI[];
    publish_places: OpenLibraryPublishPlaceAPI[];
}

export type OpenLibraryPublisherAPI = {
    name: string;
}

export type OpenLibraryBookIdentifiersAPI = {
    isbn_13?: string[];
    openlibrary?: string[];
    [identifier: string]: string[];
}

export type OpenLibraryBookCoverAPI = {
    small: string;
    medium: string;
    large: string;
}

export type OpenLibraryBookSubjectAPI = {
    name: string;
    url: string;
}

export type OpenLibraryAuthorAPI = {
    name: string;
    url: string;
}

export type OpenLibraryPublishPlaceAPI = {
    name: 'UK' | string;
}

/**
 * 
 * {
	"ISBN:9781784978518": {
		"publishers": [{
			"name": "Head of Zeus Ltd"
		}],
		"pagination": "447p",
		"title": "The Wandering Earth",
		"url": "https://openlibrary.org/books/OL26445868M/The_Wandering_Earth",
		"identifiers": {
			"isbn_13": [
				"9781784978518"
			],
			"openlibrary": [
				"OL26445868M"
			]
		},
		"cover": {
			"small": "https://covers.openlibrary.org/b/id/8166561-S.jpg",
			"large": "https://covers.openlibrary.org/b/id/8166561-L.jpg",
			"medium": "https://covers.openlibrary.org/b/id/8166561-M.jpg"
		},
		"subjects": [{
				"url": "https://openlibrary.org/subjects/fiction",
				"name": "Fiction"
			},
			{
				"url": "https://openlibrary.org/subjects/science_fiction",
				"name": "Science Fiction"
			}
		],
		"publish_date": "2017",
		"key": "/books/OL26445868M",
		"authors": [{
			"url": "https://openlibrary.org/authors/OL7044246A/Cixin_Liu",
			"name": "Cixin Liu"
		}],
		"publish_places": [{
			"name": "UK"
		}]
	}
}
 */
