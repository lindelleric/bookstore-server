// https://openlibrary.org/api/books?bibkeys=ISBN:9781784978518&format=json&jscmd=data

export type OpenLibraryResponseAPI = {
    [ISBNIdentifier: string]: OpenLibraryBookAPI;
}

export type OpenLibraryBookAPI = {
	info_url: string;
	bib_key: string;
	preview_url: string;
	thumbnail_url: string;
	preview: 'noview' | string;
	details: OpenLibraryBookDetailsAPI;
}

export type OpenLibraryBookDetailsAPI = {
	isbn_13?: string[];
	isbn_10?: string[];
	identifiers: OpenLibraryBookIdentifiersAPI;
	covers: number[];
	latest_revision: number;
	revision: number;
	source_records: string[];
	title: string;
	languages: OpenLibraryKeyAPI[];
	publish_country: string;
	publish_places: string[];
	publish_date: string;
	by_statement: string;
	type: OpenLibraryKeyAPI[];
	works: OpenLibraryKeyAPI[];
	publishers: string[];
	last_modified: OpenLibraryTypeValueAPI;
	key: string;
	authors: OpenLibraryNameKeyAPI[];
	pagination: string;
	created: OpenLibraryTypeValueAPI;
	dewey_decimal_class: string[];
	notes: OpenLibraryTypeValueAPI;
	number_of_pages: number;
}

export type OpenLibraryBookIdentifiersAPI = {
	openlibrary?: string[];
	librarything?: string[];
	[identifier: string]: string[];	
}

export type OpenLibraryKeyAPI = {
	key: string;
}

export type OpenLibraryTypeValueAPI = {
	type: string;
	value: string;
}

export type OpenLibraryNameKeyAPI = {
	name: string;
	key: string;
}

/**
 {
	"ISBN:9780099448792": {
		"info_url": "https://openlibrary.org/books/OL15515237M/The_wind-up_bird_chronicle",
		"bib_key": "ISBN:9780099448792",
		"preview_url": "https://openlibrary.org/books/OL15515237M/The_wind-up_bird_chronicle",
		"thumbnail_url": "https://covers.openlibrary.org/b/id/7998621-S.jpg",
		"details": {
			"isbn_10": [
				"0099448793"
			],
			"publish_date": "2003",
			"works": [{
				"key": "/works/OL2625494W"
			}]
		},
		"preview": "noview"
	}
}
 */

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


// export type OpenLibraryBookAPI = {
// 	publishers: OpenLibraryPublisherAPI[];
// 	pagination: string;
// 	title: string;
// 	url: string;
// 	identifiers: OpenLibraryBookIdentifiersAPI;
// 	cover: OpenLibraryBookCoverAPI;
// 	subjects: OpenLibraryBookSubjectAPI[];
// 	publish_date: string;
// 	key: string;
// 	authors: OpenLibraryAuthorAPI[];
// 	publish_places: OpenLibraryPublishPlaceAPI[];
// }

// export type OpenLibraryPublisherAPI = {
// 	name: string;
// }


// export type OpenLibraryBookCoverAPI = {
// 	small: string;
// 	medium: string;
// 	large: string;
// }

// export type OpenLibraryBookSubjectAPI = {
// 	name: string;
// 	url: string;
// }

// export type OpenLibraryAuthorAPI = {
// 	name: string;
// 	url: string;
// }

// export type OpenLibraryPublishPlaceAPI = {
// 	name: 'UK' | string;
// }