// Type definitions for Google Books API v1
// Project: https://developers.google.com/books/docs/v1/getting_started
// Definitions by: Bolisov Alexey: https://github.com/Bolisov/typings-gapi/tree/master/gapi.client.books-v1
// Some modifications by Eric Lindell

// /// <reference path="../gapi.client/gapi.client.d.ts" />

// export module gapi.client.books {

    export interface Annotation {
        // Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
        afterSelectedText?: string,
        // Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
        beforeSelectedText?: string,
        // Selection ranges sent from the client.
        clientVersionRanges?: {
            // Range in CFI format for this annotation sent by client.
            cfiRange?: BooksAnnotationsRange,
            // Content version the client sent in.
            contentVersion?: string,
            // Range in GB image format for this annotation sent by client.
            gbImageRange?: BooksAnnotationsRange,
            // Range in GB text format for this annotation sent by client.
            gbTextRange?: BooksAnnotationsRange,
            // Range in image CFI format for this annotation sent by client.
            imageCfiRange?: BooksAnnotationsRange,
        },
        // Timestamp for the created time of this annotation.
        created?: string,
        // Selection ranges for the most recent content version.
        currentVersionRanges?: {
            // Range in CFI format for this annotation for version above.
            cfiRange?: BooksAnnotationsRange,
            // Content version applicable to ranges below.
            contentVersion?: string,
            // Range in GB image format for this annotation for version above.
            gbImageRange?: BooksAnnotationsRange,
            // Range in GB text format for this annotation for version above.
            gbTextRange?: BooksAnnotationsRange,
            // Range in image CFI format for this annotation for version above.
            imageCfiRange?: BooksAnnotationsRange,
        },
        // User-created data for this annotation.
        data?: string,
        // Indicates that this annotation is deleted.
        deleted?: boolean,
        // The highlight style for this annotation.
        highlightStyle?: string,
        // Id of this annotation, in the form of a GUID.
        id?: string,
        // Resource type.
        kind?: string,
        // The layer this annotation is for.
        layerId?: string,
        // 
        layerSummary?: {
            // Maximum allowed characters on this layer, especially for the "copy" layer.
            allowedCharacterCount?: number,
            // Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.
            limitType?: string,
            // Remaining allowed characters on this layer, especially for the "copy" layer.
            remainingCharacterCount?: number,
        },
        // Pages that this annotation spans.
        pageIds?: string[],
        // Excerpt from the volume.
        selectedText?: string,
        // URL to this resource.
        selfLink?: string,
        // Timestamp for the last time this annotation was modified.
        updated?: string,
        // The volume that this annotation belongs to.
        volumeId?: string,
    }

    export interface Annotationdata {
        // The type of annotation this data is for.
        annotationType?: string,
        // 
        data?: any,
        // Base64 encoded data for this annotation data.
        encoded_data?: string,
        // Unique id for this annotation data.
        id?: string,
        // Resource Type
        kind?: string,
        // The Layer id for this data. *
        layerId?: string,
        // URL for this resource. *
        selfLink?: string,
        // Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
        updated?: string,
        // The volume id for this data. *
        volumeId?: string,
    }

    export interface Annotations {
        // A list of annotations.
        items?: Annotation[],
        // Resource type.
        kind?: string,
        // Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
        nextPageToken?: string,
        // Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.
        totalItems?: number,
    }

    export interface AnnotationsSummary {
        // 
        kind?: string,
        // 
        layers?: {
            // 
            allowedCharacterCount?: number,
            // 
            layerId?: string,
            // 
            limitType?: string,
            // 
            remainingCharacterCount?: number,
            // 
            updated?: string,
        }[],
    }

    export interface Annotationsdata {
        // A list of Annotation Data.
        items?: Annotationdata[],
        // Resource type
        kind?: string,
        // Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
        nextPageToken?: string,
        // The total number of volume annotations found.
        totalItems?: number,
    }

    export interface BooksAnnotationsRange {
        // The offset from the ending position.
        endOffset?: string,
        // The ending position for the range.
        endPosition?: string,
        // The offset from the starting position.
        startOffset?: string,
        // The starting position for the range.
        startPosition?: string,
    }

    export interface BooksCloudloadingResource {
        // 
        author?: string,
        // 
        processingState?: string,
        // 
        title?: string,
        // 
        volumeId?: string,
    }

    export interface BooksVolumesRecommendedRateResponse {
        // 
        consistency_token?: string,
    }

    export interface Bookshelf {
        // Whether this bookshelf is PUBLIC or PRIVATE.
        access?: string,
        // Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).
        created?: string,
        // Description of this bookshelf.
        description?: string,
        // Id of this bookshelf, only unique by user.
        id?: number,
        // Resource type for bookshelf metadata.
        kind?: string,
        // URL to this resource.
        selfLink?: string,
        // Title of this bookshelf.
        title?: string,
        // Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).
        updated?: string,
        // Number of volumes in this bookshelf.
        volumeCount?: number,
        // Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).
        volumesLastUpdated?: string,
    }

    export interface Bookshelves {
        // A list of bookshelves.
        items?: Bookshelf[],
        // Resource type.
        kind?: string,
    }

    export interface Category {
        // A list of onboarding categories.
        items?: {
            // 
            badgeUrl?: string,
            // 
            categoryId?: string,
            // 
            name?: string,
        }[],
        // Resource type.
        kind?: string,
    }

    export interface ConcurrentAccessRestriction {
        // Whether access is granted for this (user, device, volume).
        deviceAllowed?: boolean,
        // Resource type.
        kind?: string,
        // The maximum number of concurrent access licenses for this volume.
        maxConcurrentDevices?: number,
        // Error/warning message.
        message?: string,
        // Client nonce for verification. Download access and client-validation only.
        nonce?: string,
        // Error/warning reason code.
        reasonCode?: string,
        // Whether this volume has any concurrent access restrictions.
        restricted?: boolean,
        // Response signature.
        signature?: string,
        // Client app identifier for verification. Download access and client-validation only.
        source?: string,
        // Time in seconds for license auto-expiration.
        timeWindowSeconds?: number,
        // Identifies the volume for which this entry applies.
        volumeId?: string,
    }

    export interface Dictlayerdata {
        // 
        common?: {
            // The display title and localized canonical name to use when searching for this entity on Google search.
            title?: string,
        },
        // 
        dict?: {
            // The source, url and attribution for this dictionary data.
            source?: {
                // 
                attribution?: string,
                // 
                url?: string,
            },
            // 
            words?: {
                // 
                derivatives?: {
                    // 
                    source?: {
                        // 
                        attribution?: string,
                        // 
                        url?: string,
                    },
                    // 
                    text?: string,
                }[],
                // 
                examples?: {
                    // 
                    source?: {
                        // 
                        attribution?: string,
                        // 
                        url?: string,
                    },
                    // 
                    text?: string,
                }[],
                // 
                senses?: {
                    // 
                    conjugations?: {
                        // 
                        type?: string,
                        // 
                        value?: string,
                    }[],
                    // 
                    definitions?: {
                        // 
                        definition?: string,
                        // 
                        examples?: {
                            // 
                            source?: {
                                // 
                                attribution?: string,
                                // 
                                url?: string,
                            },
                            // 
                            text?: string,
                        }[],
                    }[],
                    // 
                    partOfSpeech?: string,
                    // 
                    pronunciation?: string,
                    // 
                    pronunciationUrl?: string,
                    // 
                    source?: {
                        // 
                        attribution?: string,
                        // 
                        url?: string,
                    },
                    // 
                    syllabification?: string,
                    // 
                    synonyms?: {
                        // 
                        source?: {
                            // 
                            attribution?: string,
                            // 
                            url?: string,
                        },
                        // 
                        text?: string,
                    }[],
                }[],
                // The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
                source?: {
                    // 
                    attribution?: string,
                    // 
                    url?: string,
                },
            }[],
        },
        // 
        kind?: string,
    }

    export interface Discoveryclusters {
        // 
        clusters?: {
            // 
            banner_with_content_container?: {
                // 
                fillColorArgb?: string,
                // 
                imageUrl?: string,
                // 
                maskColorArgb?: string,
                // 
                moreButtonText?: string,
                // 
                moreButtonUrl?: string,
                // 
                textColorArgb?: string,
            },
            // 
            subTitle?: string,
            // 
            title?: string,
            // 
            totalVolumes?: number,
            // 
            uid?: string,
            // 
            volumes?: Volume[],
        }[],
        // Resorce type.
        kind?: string,
        // 
        totalClusters?: number,
    }

    export interface DownloadAccessRestriction {
        // If restricted, whether access is granted for this (user, device, volume).
        deviceAllowed?: boolean,
        // If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
        downloadsAcquired?: number,
        // If deviceAllowed, whether access was just acquired with this request.
        justAcquired?: boolean,
        // Resource type.
        kind?: string,
        // If restricted, the maximum number of content download licenses for this volume.
        maxDownloadDevices?: number,
        // Error/warning message.
        message?: string,
        // Client nonce for verification. Download access and client-validation only.
        nonce?: string,
        // Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
        reasonCode?: string,
        // Whether this volume has any download access restrictions.
        restricted?: boolean,
        // Response signature.
        signature?: string,
        // Client app identifier for verification. Download access and client-validation only.
        source?: string,
        // Identifies the volume for which this entry applies.
        volumeId?: string,
    }

    export interface DownloadAccesses {
        // A list of download access responses.
        downloadAccessList?: DownloadAccessRestriction[],
        // Resource type.
        kind?: string,
    }

    export interface Geolayerdata {
        // 
        common?: {
            // The language of the information url and description.
            lang?: string,
            // The URL for the preview image information.
            previewImageUrl?: string,
            // The description for this location.
            snippet?: string,
            // The URL for information for this location. Ex: wikipedia link.
            snippetUrl?: string,
            // The display title and localized canonical name to use when searching for this entity on Google search.
            title?: string,
        },
        // 
        geo?: {
            // The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates.
            boundary?: {
                // 
                latitude?: number,
                // 
                longitude?: number,
            }[][],
            // The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER
            cachePolicy?: string,
            // The country code of the location.
            countryCode?: string,
            // The latitude of the location.
            latitude?: number,
            // The longitude of the location.
            longitude?: number,
            // The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN
            mapType?: string,
            // The viewport for showing this location. This is a latitude, longitude rectangle.
            viewport?: {
                // 
                hi?: {
                    // 
                    latitude?: number,
                    // 
                    longitude?: number,
                },
                // 
                lo?: {
                    // 
                    latitude?: number,
                    // 
                    longitude?: number,
                },
            },
            // The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https://developers.google.com/maps/documentation/staticmaps/#Zoomlevels
            zoom?: number,
        },
        // 
        kind?: string,
    }

    export interface Layersummaries {
        // A list of layer summary items.
        items?: Layersummary[],
        // Resource type.
        kind?: string,
        // The total number of layer summaries found.
        totalItems?: number,
    }

    export interface Layersummary {
        // The number of annotations for this layer.
        annotationCount?: number,
        // The list of annotation types contained for this layer.
        annotationTypes?: string[],
        // Link to get data for this annotation.
        annotationsDataLink?: string,
        // The link to get the annotations for this layer.
        annotationsLink?: string,
        // The content version this resource is for.
        contentVersion?: string,
        // The number of data items for this layer.
        dataCount?: number,
        // Unique id of this layer summary.
        id?: string,
        // Resource Type
        kind?: string,
        // The layer id for this summary.
        layerId?: string,
        // URL to this resource.
        selfLink?: string,
        // Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).
        updated?: string,
        // The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
        volumeAnnotationsVersion?: string,
        // The volume id this resource is for.
        volumeId?: string,
    }

    export interface Metadata {
        // A list of offline dictionary metadata.
        items?: {
            // 
            download_url?: string,
            // 
            encrypted_key?: string,
            // 
            language?: string,
            // 
            size?: string,
            // 
            version?: string,
        }[],
        // Resource type.
        kind?: string,
    }

    export interface Notification {
        // 
        body?: string,
        // The list of crm experiment ids.
        crmExperimentIds?: string[],
        // 
        doc_id?: string,
        // 
        doc_type?: string,
        // 
        dont_show_notification?: boolean,
        // 
        iconUrl?: string,
        // Resource type.
        kind?: string,
        // 
        notificationGroup?: string,
        // 
        notification_type?: string,
        // 
        pcampaign_id?: string,
        // 
        reason?: string,
        // 
        show_notification_settings_action?: boolean,
        // 
        targetUrl?: string,
        // 
        title?: string,
    }

    export interface Offers {
        // A list of offers.
        items?: {
            // 
            artUrl?: string,
            // 
            gservicesKey?: string,
            // 
            id?: string,
            // 
            items?: {
                // 
                author?: string,
                // 
                canonicalVolumeLink?: string,
                // 
                coverUrl?: string,
                // 
                description?: string,
                // 
                title?: string,
                // 
                volumeId?: string,
            }[],
        }[],
        // Resource type.
        kind?: string,
    }

    export interface ReadingPosition {
        // Position in an EPUB as a CFI.
        epubCfiPosition?: string,
        // Position in a volume for image-based content.
        gbImagePosition?: string,
        // Position in a volume for text-based content.
        gbTextPosition?: string,
        // Resource type for a reading position.
        kind?: string,
        // Position in a PDF file.
        pdfPosition?: string,
        // Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
        updated?: string,
        // Volume id associated with this reading position.
        volumeId?: string,
    }

    export interface RequestAccess {
        // A concurrent access response.
        concurrentAccess?: ConcurrentAccessRestriction,
        // A download access response.
        downloadAccess?: DownloadAccessRestriction,
        // Resource type.
        kind?: string,
    }

    export interface Review {
        // Author of this review.
        author?: {
            // Name of this person.
            displayName?: string,
        },
        // Review text.
        content?: string,
        // Date of this review.
        date?: string,
        // URL for the full review text, for reviews gathered from the web.
        fullTextUrl?: string,
        // Resource type for a review.
        kind?: string,
        // Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
        rating?: string,
        // Information regarding the source of this review, when the review is not from a Google Books user.
        source?: {
            // Name of the source.
            description?: string,
            // Extra text about the source of the review.
            extraDescription?: string,
            // URL of the source of the review.
            url?: string,
        },
        // Title for this review.
        title?: string,
        // Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
        type?: string,
        // Volume that this review is for.
        volumeId?: string,
    }

    export interface Series {
        // Resource type.
        kind?: string,
        // 
        series?: {
            // 
            bannerImageUrl?: string,
            // 
            imageUrl?: string,
            // 
            seriesId?: string,
            // 
            seriesType?: string,
            // 
            title?: string,
        }[],
    }

    export interface Seriesmembership {
        // Resorce type.
        kind?: string,
        // 
        member?: Volume[],
        // 
        nextPageToken?: string,
    }

    export interface Usersettings {
        // Resource type.
        kind?: string,
        // User settings in sub-objects, each for different purposes.
        notesExport?: {
            // 
            folderName?: string,
            // 
            isEnabled?: boolean,
        },
        // 
        notification?: {
            // 
            moreFromAuthors?: {
                // 
                opted_state?: string,
            },
            // 
            moreFromSeries?: {
                // 
                opted_state?: string,
            },
            // 
            rewardExpirations?: {
                // 
                opted_state?: string,
            },
        },
    }

    export interface Volume {
        // Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
        accessInfo?: {
            // Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.)
            accessViewStatus?: string,
            // The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.)
            country?: string,
            // Information about a volume's download license access restrictions.
            downloadAccess?: DownloadAccessRestriction,
            // URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive.
            driveImportedContentLink?: string,
            // Whether this volume can be embedded in a viewport using the Embedded Viewer API.
            embeddable?: boolean,
            // Information about epub content. (In LITE projection.)
            epub?: {
                // URL to retrieve ACS token for epub download. (In LITE projection.)
                acsTokenLink?: string,
                // URL to download epub. (In LITE projection.)
                downloadLink?: string,
                // Is a flowing text epub available either as public domain or for purchase. (In LITE projection.)
                isAvailable?: boolean,
            },
            // Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it.
            explicitOfflineLicenseManagement?: boolean,
            // Information about pdf content. (In LITE projection.)
            pdf?: {
                // URL to retrieve ACS token for pdf download. (In LITE projection.)
                acsTokenLink?: string,
                // URL to download pdf. (In LITE projection.)
                downloadLink?: string,
                // Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.)
                isAvailable?: boolean,
            },
            // Whether or not this book is public domain in the country listed above.
            publicDomain?: boolean,
            // Whether quote sharing is allowed for this volume.
            quoteSharingAllowed?: boolean,
            // Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED.
            textToSpeechPermission?: string,
            // For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page.
            viewOrderUrl?: string,
            // The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES.
            viewability?: string,
            // URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes.
            webReaderLink?: string,
        },
        // Opaque identifier for a specific version of a volume resource. (In LITE projection)
        etag?: string,
        // Unique identifier for a volume. (In LITE projection.)
        id?: string,
        // Resource type for a volume. (In LITE projection.)
        kind?: string,
        // What layers exist in this volume and high level information about them.
        layerInfo?: {
            // A layer should appear here if and only if the layer exists for this book.
            layers?: {
                // The layer id of this layer (e.g. "geo").
                layerId?: string,
                // The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
                volumeAnnotationsVersion?: string,
            }[],
        },
        // Recommendation related information for this volume.
        recommendedInfo?: {
            // A text explaining why this volume is recommended.
            explanation?: string,
        },
        // Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
        saleInfo?: {
            // URL to purchase this volume on the Google Books site. (In LITE projection)
            buyLink?: string,
            // The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.)
            country?: string,
            // Whether or not this volume is an eBook (can be added to the My eBooks shelf).
            isEbook?: boolean,
            // Suggested retail price. (In LITE projection.)
            listPrice?: {
                // Amount in the currency listed below. (In LITE projection.)
                amount?: number,
                // An ISO 4217, three-letter currency code. (In LITE projection.)
                currencyCode?: string,
            },
            // Offers available for this volume (sales and rentals).
            offers?: {
                // The finsky offer type (e.g., PURCHASE=0 RENTAL=3)
                finskyOfferType?: number,
                // Indicates whether the offer is giftable.
                giftable?: boolean,
                // Offer list (=undiscounted) price in Micros.
                listPrice?: {
                    // 
                    amountInMicros?: number,
                    // 
                    currencyCode?: string,
                },
                // The rental duration (for rental offers only).
                rentalDuration?: {
                    // 
                    count?: number,
                    // 
                    unit?: string,
                },
                // Offer retail (=discounted) price in Micros
                retailPrice?: {
                    // 
                    amountInMicros?: number,
                    // 
                    currencyCode?: string,
                },
            }[],
            // The date on which this book is available for sale.
            onSaleDate?: string,
            // The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
            retailPrice?: {
                // Amount in the currency listed below. (In LITE projection.)
                amount?: number,
                // An ISO 4217, three-letter currency code. (In LITE projection.)
                currencyCode?: string,
            },
            // Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER.
            saleability?: string,
        },
        // Search result information related to this volume.
        searchInfo?: {
            // A text snippet containing the search query.
            textSnippet?: string,
        },
        // URL to this resource. (In LITE projection.)
        selfLink?: string,
        // User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
        userInfo?: {
            // Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc.
            acquiredTime?: string,
            // How this volume was acquired.
            acquisitionType?: number,
            // Copy/Paste accounting information.
            copy?: {
                // 
                allowedCharacterCount?: number,
                // 
                limitType?: string,
                // 
                remainingCharacterCount?: number,
                // 
                updated?: string,
            },
            // Whether this volume is purchased, sample, pd download etc.
            entitlementType?: number,
            // Information on the ability to share with the family.
            familySharing?: {
                // The role of the user in the family.
                familyRole?: string,
                // Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action.
                isSharingAllowed?: boolean,
                // Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet.
                isSharingDisabledByFop?: boolean,
            },
            // Whether or not the user shared this volume with the family.
            isFamilySharedFromUser?: boolean,
            // Whether or not the user received this volume through family sharing.
            isFamilySharedToUser?: boolean,
            // Deprecated: Replaced by familySharing.
            isFamilySharingAllowed?: boolean,
            // Deprecated: Replaced by familySharing.
            isFamilySharingDisabledByFop?: boolean,
            // Whether or not this volume is currently in "my books."
            isInMyBooks?: boolean,
            // Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.)
            isPreordered?: boolean,
            // Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.)
            isPurchased?: boolean,
            // Whether or not this volume was user uploaded.
            isUploaded?: boolean,
            // The user's current reading position in the volume, if one is available. (In LITE projection.)
            readingPosition?: ReadingPosition,
            // Period during this book is/was a valid rental.
            rentalPeriod?: {
                // 
                endUtcSec?: string,
                // 
                startUtcSec?: string,
            },
            // Whether this book is an active or an expired rental.
            rentalState?: string,
            // This user's review of this volume, if one exists.
            review?: Review,
            // Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format).
            updated?: string,
            // 
            userUploadedVolumeInfo?: {
                // 
                processingState?: string,
            },
        },
        // General volume information.
        volumeInfo?: {
            // Whether anonymous logging should be allowed.
            allowAnonLogging?: boolean,
            // The names of the authors and/or editors for this volume. (In LITE projection)
            authors?: string[],
            // The mean review rating for this volume. (min = 1.0, max = 5.0)
            averageRating?: number,
            // Canonical URL for a volume. (In LITE projection.)
            canonicalVolumeLink?: string,
            // A list of subject categories, such as "Fiction", "Suspense", etc.
            categories?: string[],
            // An identifier for the version of the volume content (text & images). (In LITE projection)
            contentVersion?: string,
            // A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.)
            description?: string,
            // Physical dimensions of this volume.
            dimensions?: {
                // Height or length of this volume (in cm).
                height?: string,
                // Thickness of this volume (in cm).
                thickness?: string,
                // Width of this volume (in cm).
                width?: string,
            },
            // A list of image links for all the sizes that are available. (In LITE projection.)
            imageLinks?: {
                // Image link for extra large size (width of ~1280 pixels). (In LITE projection)
                extraLarge?: string,
                // Image link for large size (width of ~800 pixels). (In LITE projection)
                large?: string,
                // Image link for medium size (width of ~575 pixels). (In LITE projection)
                medium?: string,
                // Image link for small size (width of ~300 pixels). (In LITE projection)
                small?: string,
                // Image link for small thumbnail size (width of ~80 pixels). (In LITE projection)
                smallThumbnail?: string,
                // Image link for thumbnail size (width of ~128 pixels). (In LITE projection)
                thumbnail?: string,
            },
            // Industry standard identifiers for this volume.
            industryIdentifiers?: {
                // Industry specific volume identifier.
                identifier?: string,
                // Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER.
                type?: string,
            }[],
            // URL to view information about this volume on the Google Books site. (In LITE projection)
            infoLink?: string,
            // Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc.
            language?: string,
            // The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight.
            mainCategory?: string,
            // 
            maturityRating?: string,
            // Total number of pages as per publisher metadata.
            pageCount?: number,
            // A top-level summary of the panelization info in this volume.
            panelizationSummary?: {
                // 
                containsEpubBubbles?: boolean,
                // 
                containsImageBubbles?: boolean,
                // 
                epubBubbleVersion?: string,
                // 
                imageBubbleVersion?: string,
            },
            // URL to preview this volume on the Google Books site.
            previewLink?: string,
            // Type of publication of this volume. Possible values are BOOK or MAGAZINE.
            printType?: string,
            // Total number of printed pages in generated pdf representation.
            printedPageCount?: number,
            // Date of publication. (In LITE projection.)
            publishedDate?: string,
            // Publisher of this volume. (In LITE projection.)
            publisher?: string,
            // The number of review ratings for this volume.
            ratingsCount?: number,
            // The reading modes available for this volume.
            readingModes?: any,
            // Total number of sample pages as per publisher metadata.
            samplePageCount?: number,
            // 
            seriesInfo?: Volumeseriesinfo,
            // Volume subtitle. (In LITE projection.)
            subtitle?: string,
            // Volume title. (In LITE projection.)
            title?: string,
        },
    }

    export interface Volume2 {
        // A list of volumes.
        items?: Volume[],
        // Resource type.
        kind?: string,
        // 
        nextPageToken?: string,
    }

    export interface Volumeannotation {
        // The annotation data id for this volume annotation.
        annotationDataId?: string,
        // Link to get data for this annotation.
        annotationDataLink?: string,
        // The type of annotation this is.
        annotationType?: string,
        // The content ranges to identify the selected text.
        contentRanges?: {
            // Range in CFI format for this annotation for version above.
            cfiRange?: BooksAnnotationsRange,
            // Content version applicable to ranges below.
            contentVersion?: string,
            // Range in GB image format for this annotation for version above.
            gbImageRange?: BooksAnnotationsRange,
            // Range in GB text format for this annotation for version above.
            gbTextRange?: BooksAnnotationsRange,
        },
        // Data for this annotation.
        data?: string,
        // Indicates that this annotation is deleted.
        deleted?: boolean,
        // Unique id of this volume annotation.
        id?: string,
        // Resource Type
        kind?: string,
        // The Layer this annotation is for.
        layerId?: string,
        // Pages the annotation spans.
        pageIds?: string[],
        // Excerpt from the volume.
        selectedText?: string,
        // URL to this resource.
        selfLink?: string,
        // Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).
        updated?: string,
        // The Volume this annotation is for.
        volumeId?: string,
    }

    export interface Volumeannotations {
        // A list of volume annotations.
        items?: Volumeannotation[],
        // Resource type
        kind?: string,
        // Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
        nextPageToken?: string,
        // The total number of volume annotations found.
        totalItems?: number,
        // The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).
        version?: string,
    }

    export interface Volumes {
        // A list of volumes.
        items?: Volume[],
        // Resource type.
        kind?: string,
        // Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
        totalItems?: number,
    }

    export interface Volumeseriesinfo {
        // The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
        bookDisplayNumber?: string,
        // Resource type.
        kind?: string,
        // Short book title in the context of the series.
        shortSeriesBookTitle?: string,
        // 
        volumeSeries?: {
            // List of issues. Applicable only for Collection Edition and Omnibus.
            issue?: {
                // 
                issueDisplayNumber?: string,
                // 
                issueOrderNumber?: number,
            }[],
            // The book order number in the series.
            orderNumber?: number,
            // The book type in the context of series. Examples - Single Issue, Collection Edition, etc.
            seriesBookType?: string,
            // The series id.
            seriesId?: string,
        }[],
    }

    // export interface VolumesResource {
    //     // Retrieves volumes in a specific bookshelf for the specified user.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // ID of bookshelf to retrieve volumes.
    //         shelf: string,
    //         // Set to true to show pre-ordered books. Defaults to false.
    //         showPreorders?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // Index of the first element to return (starts at 0)
    //         startIndex?: number,
    //         // ID of user for whom to retrieve bookshelf volumes.
    //         userId: string,
    //     }): gapi.client.Request<Volumes>;

    // }


    // export interface BookshelvesResource {
    //     // Retrieves metadata for a specific bookshelf for the specified user.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ID of bookshelf to retrieve.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of user for whom to retrieve bookshelves.
    //         userId: string,
    //     }): gapi.client.Request<Bookshelf>;

    //     // Retrieves a list of public bookshelves for the specified user.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of user for whom to retrieve bookshelves.
    //         userId: string,
    //     }): gapi.client.Request<Bookshelves>;

    //     volumes: VolumesResource,
    // }


    // export interface CloudloadingResource {
    //     // 
    //     addBook(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // A drive document id. The upload_client_token must not be set.
    //         drive_document_id?: string,
    //         // The document MIME type. It can be set only if the drive_document_id is set.
    //         mime_type?: string,
    //         // The document name. It can be set only if the drive_document_id is set.
    //         name?: string,
    //         // 
    //         upload_client_token?: string,
    //     }): gapi.client.Request<BooksCloudloadingResource>;

    //     // Remove the book and its contents
    //     deleteBook(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The id of the book to be removed.
    //         volumeId: string,
    //     }): gapi.client.Request<void>;

    //     // 
    //     updateBook(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //     }): gapi.client.Request<BooksCloudloadingResource>;

    // }


    // export interface DictionaryResource {
    //     // Returns a list of offline dictionary metadata available
    //     listOfflineMetadata(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The device/version ID from which to request the data.
    //         cpksver: string,
    //     }): gapi.client.Request<Metadata>;

    // }


    // export interface AnnotationDataResource {
    //     // Gets the annotation data.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // For the dictionary layer. Whether or not to allow web definitions.
    //         allowWebDefinitions?: boolean,
    //         // The ID of the annotation data to retrieve.
    //         annotationDataId: string,
    //         // The content version for the volume you are trying to retrieve.
    //         contentVersion: string,
    //         // The requested pixel height for any images. If height is provided width must also be provided.
    //         h?: number,
    //         // The ID for the layer to get the annotations.
    //         layerId: string,
    //         // The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
    //         locale?: string,
    //         // The requested scale for the image.
    //         scale?: number,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The volume to retrieve annotations for.
    //         volumeId: string,
    //         // The requested pixel width for any images. If width is provided height must also be provided.
    //         w?: number,
    //     }): gapi.client.Request<Annotationdata>;

    //     // Gets the annotation data for a volume and layer.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
    //         annotationDataId?: string,
    //         // The content version for the requested volume.
    //         contentVersion: string,
    //         // The requested pixel height for any images. If height is provided width must also be provided.
    //         h?: number,
    //         // The ID for the layer to get the annotation data.
    //         layerId: string,
    //         // The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
    //         locale?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // The value of the nextToken from the previous page.
    //         pageToken?: string,
    //         // The requested scale for the image.
    //         scale?: number,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
    //         updatedMax?: string,
    //         // RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
    //         updatedMin?: string,
    //         // The volume to retrieve annotation data for.
    //         volumeId: string,
    //         // The requested pixel width for any images. If width is provided height must also be provided.
    //         w?: number,
    //     }): gapi.client.Request<Annotationsdata>;

    // }


    // export interface VolumeAnnotationsResource {
    //     // Gets the volume annotation.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The ID of the volume annotation to retrieve.
    //         annotationId: string,
    //         // The ID for the layer to get the annotations.
    //         layerId: string,
    //         // The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
    //         locale?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The volume to retrieve annotations for.
    //         volumeId: string,
    //     }): gapi.client.Request<Volumeannotation>;

    //     // Gets the volume annotations for a volume and layer.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The content version for the requested volume.
    //         contentVersion: string,
    //         // The end offset to end retrieving data from.
    //         endOffset?: string,
    //         // The end position to end retrieving data from.
    //         endPosition?: string,
    //         // The ID for the layer to get the annotations.
    //         layerId: string,
    //         // The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
    //         locale?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // The value of the nextToken from the previous page.
    //         pageToken?: string,
    //         // Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
    //         showDeleted?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The start offset to start retrieving data from.
    //         startOffset?: string,
    //         // The start position to start retrieving data from.
    //         startPosition?: string,
    //         // RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
    //         updatedMax?: string,
    //         // RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
    //         updatedMin?: string,
    //         // The version of the volume annotations that you are requesting.
    //         volumeAnnotationsVersion?: string,
    //         // The volume to retrieve annotations for.
    //         volumeId: string,
    //     }): gapi.client.Request<Volumeannotations>;

    // }


    // export interface LayersResource {
    //     // Gets the layer summary for a volume.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The content version for the requested volume.
    //         contentVersion?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The ID for the layer to get the summary for.
    //         summaryId: string,
    //         // The volume to retrieve layers for.
    //         volumeId: string,
    //     }): gapi.client.Request<Layersummary>;

    //     // List the layer summaries for a volume.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The content version for the requested volume.
    //         contentVersion?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // The value of the nextToken from the previous page.
    //         pageToken?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The volume to retrieve layers for.
    //         volumeId: string,
    //     }): gapi.client.Request<Layersummaries>;

    //     annotationData: AnnotationDataResource,
    //     volumeAnnotations: VolumeAnnotationsResource,
    // }


    // export interface MyconfigResource {
    //     // Gets the current settings for the user.
    //     getUserSettings(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //     }): gapi.client.Request<Usersettings>;

    //     // Release downloaded content access restriction.
    //     releaseDownloadAccess(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The device/version ID from which to release the restriction.
    //         cpksver: string,
    //         // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
    //         locale?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // The volume(s) to release restrictions for.
    //         volumeIds: string,
    //     }): gapi.client.Request<DownloadAccesses>;

    //     // Request concurrent and download access restrictions.
    //     requestAccess(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The device/version ID from which to request the restrictions.
    //         cpksver: string,
    //         // The type of access license to request. If not specified, the default is BOTH.
    //         licenseTypes?: string,
    //         // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
    //         locale?: string,
    //         // The client nonce value.
    //         nonce: string,
    //         // String to identify the originator of this request.
    //         source: string,
    //         // The volume to request concurrent/download restrictions for.
    //         volumeId: string,
    //     }): gapi.client.Request<RequestAccess>;

    //     // Request downloaded content access for specified volumes on the My eBooks shelf.
    //     syncVolumeLicenses(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The device/version ID from which to release the restriction.
    //         cpksver: string,
    //         // List of features supported by the client, i.e., 'RENTALS'
    //         features?: string,
    //         // Set to true to include non-comics series. Defaults to false.
    //         includeNonComicsSeries?: boolean,
    //         // ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
    //         locale?: string,
    //         // The client nonce value.
    //         nonce: string,
    //         // Set to true to show pre-ordered books. Defaults to false.
    //         showPreorders?: boolean,
    //         // String to identify the originator of this request.
    //         source: string,
    //         // The volume(s) to request download restrictions for.
    //         volumeIds?: string,
    //     }): gapi.client.Request<Volumes>;

    //     // Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
    //     updateUserSettings(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //     }): gapi.client.Request<Usersettings>;

    // }


    // export interface AnnotationsResource {
    //     // Deletes an annotation.
    //     delete(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The ID for the annotation to delete.
    //         annotationId: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<void>;

    //     // Inserts a new annotation.
    //     insert(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The ID for the annotation to insert.
    //         annotationId?: string,
    //         // ISO-3166-1 code to override the IP-based location.
    //         country?: string,
    //         // Requests that only the summary of the specified layer be provided in the response.
    //         showOnlySummaryInResponse?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Annotation>;

    //     // Retrieves a list of annotations, possibly filtered.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The content version for the requested volume.
    //         contentVersion?: string,
    //         // The layer ID to limit annotation by.
    //         layerId?: string,
    //         // The layer ID(s) to limit annotation by.
    //         layerIds?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // The value of the nextToken from the previous page.
    //         pageToken?: string,
    //         // Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
    //         showDeleted?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
    //         updatedMax?: string,
    //         // RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
    //         updatedMin?: string,
    //         // The volume to restrict annotations to.
    //         volumeId?: string,
    //     }): gapi.client.Request<Annotations>;

    //     // Gets the summary of specified layers.
    //     summary(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Array of layer IDs to get the summary for.
    //         layerIds: string,
    //         // Volume id to get the summary for.
    //         volumeId: string,
    //     }): gapi.client.Request<AnnotationsSummary>;

    //     // Updates an existing annotation.
    //     update(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The ID for the annotation to update.
    //         annotationId: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Annotation>;

    // }


    // export interface VolumesResource {
    //     // Gets volume information for volumes on a bookshelf.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-3166-1 code to override the IP-based location.
    //         country?: string,
    //         // Maximum number of results to return
    //         maxResults?: number,
    //         // Restrict information returned to a set of selected fields.
    //         projection?: string,
    //         // Full-text search query string in this bookshelf.
    //         q?: string,
    //         // The bookshelf ID or name retrieve volumes for.
    //         shelf: string,
    //         // Set to true to show pre-ordered books. Defaults to false.
    //         showPreorders?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // Index of the first element to return (starts at 0)
    //         startIndex?: number,
    //     }): gapi.client.Request<Volumes>;

    // }


    // export interface BookshelvesResource {
    //     // Adds a volume to a bookshelf.
    //     addVolume(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The reason for which the book is added to the library.
    //         reason?: string,
    //         // ID of bookshelf to which to add a volume.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of volume to add.
    //         volumeId: string,
    //     }): gapi.client.Request<void>;

    //     // Clears all volumes from a bookshelf.
    //     clearVolumes(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ID of bookshelf from which to remove a volume.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<void>;

    //     // Retrieves metadata for a specific bookshelf belonging to the authenticated user.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ID of bookshelf to retrieve.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Bookshelf>;

    //     // Retrieves a list of bookshelves belonging to the authenticated user.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Bookshelves>;

    //     // Moves a volume within a bookshelf.
    //     moveVolume(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ID of bookshelf with the volume.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of volume to move.
    //         volumeId: string,
    //         // Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
    //         volumePosition: number,
    //     }): gapi.client.Request<void>;

    //     // Removes a volume from a bookshelf.
    //     removeVolume(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // The reason for which the book is removed from the library.
    //         reason?: string,
    //         // ID of bookshelf from which to remove a volume.
    //         shelf: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of volume to remove.
    //         volumeId: string,
    //     }): gapi.client.Request<void>;

    //     volumes: VolumesResource,
    // }


    // export interface ReadingpositionsResource {
    //     // Retrieves my reading position information for a volume.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Volume content version for which this reading position is requested.
    //         contentVersion?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of volume for which to retrieve a reading position.
    //         volumeId: string,
    //     }): gapi.client.Request<ReadingPosition>;

    //     // Sets my reading position information for a volume.
    //     setPosition(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Action that caused this reading position to be set.
    //         action?: string,
    //         // Volume content version for which this reading position applies.
    //         contentVersion?: string,
    //         // Random persistent device cookie optional on set position.
    //         deviceCookie?: string,
    //         // Position string for the new volume reading position.
    //         position: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // RFC 3339 UTC format timestamp associated with this reading position.
    //         timestamp: string,
    //         // ID of volume for which to update the reading position.
    //         volumeId: string,
    //     }): gapi.client.Request<void>;

    // }


    // export interface MylibraryResource {
    //     annotations: AnnotationsResource,
    //     bookshelves: BookshelvesResource,
    //     readingpositions: ReadingpositionsResource,
    // }


    // export interface NotificationResource {
    //     // Returns notification details for a given notification id.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
    //         locale?: string,
    //         // String to identify the notification.
    //         notification_id: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Notification>;

    // }


    // export interface OnboardingResource {
    //     // List categories for onboarding experience.
    //     listCategories(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
    //         locale?: string,
    //     }): gapi.client.Request<Category>;

    //     // List available volumes under categories for onboarding experience.
    //     listCategoryVolumes(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // List of category ids requested.
    //         categoryId?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
    //         locale?: string,
    //         // The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
    //         maxAllowedMaturityRating?: string,
    //         // Number of maximum results per page to be included in the response.
    //         pageSize?: number,
    //         // The value of the nextToken from the previous page.
    //         pageToken?: string,
    //     }): gapi.client.Request<Volume2>;

    // }


    // export interface PersonalizedstreamResource {
    //     // Returns a stream of personalized book clusters
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    //         maxAllowedMaturityRating?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Discoveryclusters>;

    // }


    // export interface PromoofferResource {
    //     // 
    //     accept(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // device android_id
    //         androidId?: string,
    //         // device device
    //         device?: string,
    //         // device manufacturer
    //         manufacturer?: string,
    //         // device model
    //         model?: string,
    //         // 
    //         offerId?: string,
    //         // device product
    //         product?: string,
    //         // device serial
    //         serial?: string,
    //         // Volume id to exercise the offer
    //         volumeId?: string,
    //     }): gapi.client.Request<void>;

    //     // 
    //     dismiss(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // device android_id
    //         androidId?: string,
    //         // device device
    //         device?: string,
    //         // device manufacturer
    //         manufacturer?: string,
    //         // device model
    //         model?: string,
    //         // Offer to dimiss
    //         offerId?: string,
    //         // device product
    //         product?: string,
    //         // device serial
    //         serial?: string,
    //     }): gapi.client.Request<void>;

    //     // Returns a list of promo offers available to the user
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // device android_id
    //         androidId?: string,
    //         // device device
    //         device?: string,
    //         // device manufacturer
    //         manufacturer?: string,
    //         // device model
    //         model?: string,
    //         // device product
    //         product?: string,
    //         // device serial
    //         serial?: string,
    //     }): gapi.client.Request<Offers>;

    // }


    // export interface MembershipResource {
    //     // Returns Series membership data given the series id.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Number of maximum results per page to be included in the response.
    //         page_size?: number,
    //         // The value of the nextToken from the previous page.
    //         page_token?: string,
    //         // String that identifies the series
    //         series_id: string,
    //     }): gapi.client.Request<Seriesmembership>;

    // }


    // export interface SeriesResource {
    //     // Returns Series metadata for the given series ids.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // String that identifies the series
    //         series_id: string,
    //     }): gapi.client.Request<Series>;

    //     membership: MembershipResource,
    // }


    // export interface AssociatedResource {
    //     // Return a list of associated books.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Association type.
    //         association?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    //         maxAllowedMaturityRating?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of the source volume.
    //         volumeId: string,
    //     }): gapi.client.Request<Volumes>;

    // }


    // export interface MybooksResource {
    //     // Return a list of books in My Library.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // How the book was acquired
    //         acquireMethod?: string,
    //         // ISO-3166-1 code to override the IP-based location.
    //         country?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // Maximum number of results to return.
    //         maxResults?: number,
    //         // The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
    //         processingState?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // Index of the first result to return (starts at 0)
    //         startIndex?: number,
    //     }): gapi.client.Request<Volumes>;

    // }


    // export interface RecommendedResource {
    //     // Return a list of recommended books for the current user.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    //         maxAllowedMaturityRating?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //     }): gapi.client.Request<Volumes>;

    //     // Rate a recommended book for the current user.
    //     rate(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // Rating to be given to the volume.
    //         rating: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // ID of the source volume.
    //         volumeId: string,
    //     }): gapi.client.Request<BooksVolumesRecommendedRateResponse>;

    // }


    // export interface UseruploadedResource {
    //     // Return a list of books uploaded by the current user.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
    //         locale?: string,
    //         // Maximum number of results to return.
    //         maxResults?: number,
    //         // The processing state of the user uploaded volumes to be returned.
    //         processingState?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // Index of the first result to return (starts at 0)
    //         startIndex?: number,
    //         // The ids of the volumes to be returned. If not specified all that match the processingState are returned.
    //         volumeId?: string,
    //     }): gapi.client.Request<Volumes>;

    // }


    // export interface VolumesResource {
    //     // Gets volume information for a single volume.
    //     get(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // ISO-3166-1 code to override the IP-based location.
    //         country?: string,
    //         // Set to true to include non-comics series. Defaults to false.
    //         includeNonComicsSeries?: boolean,
    //         // Brand results for partner ID.
    //         partner?: string,
    //         // Restrict information returned to a set of selected fields.
    //         projection?: string,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // 
    //         user_library_consistent_read?: boolean,
    //         // ID of volume to retrieve.
    //         volumeId: string,
    //     }): gapi.client.Request<Volume>;

    //     // Performs a book search.
    //     list(request: {
    //         // Data format for the response.
    //         alt?: string,
    //         // Selector specifying which fields to include in a partial response.
    //         fields?: string,
    //         // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
    //         key?: string,
    //         // OAuth 2.0 token for the current user.
    //         oauth_token?: string,
    //         // Returns response with indentations and line breaks.
    //         prettyPrint?: boolean,
    //         // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
    //         quotaUser?: string,
    //         // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
    //         userIp?: string,
    //         // Restrict to volumes by download availability.
    //         download?: string,
    //         // Filter search results.
    //         filter?: string,
    //         // Restrict results to books with this language code.
    //         langRestrict?: string,
    //         // Restrict search to this user's library.
    //         libraryRestrict?: string,
    //         // The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    //         maxAllowedMaturityRating?: string,
    //         // Maximum number of results to return.
    //         maxResults?: number,
    //         // Sort search results.
    //         orderBy?: string,
    //         // Restrict and brand results for partner ID.
    //         partner?: string,
    //         // Restrict to books or magazines.
    //         printType?: string,
    //         // Restrict information returned to a set of selected fields.
    //         projection?: string,
    //         // Full-text search query string.
    //         q: string,
    //         // Set to true to show books available for preorder. Defaults to false.
    //         showPreorders?: boolean,
    //         // String to identify the originator of this request.
    //         source?: string,
    //         // Index of the first result to return (starts at 0)
    //         startIndex?: number,
    //     }): gapi.client.Request<Volumes>;

    //     associated: AssociatedResource,
    //     mybooks: MybooksResource,
    //     recommended: RecommendedResource,
    //     useruploaded: UseruploadedResource,
    // }

// }

// declare module gapi.client.books {
//     var bookshelves: gapi.client.books.BookshelvesResource;

//     var cloudloading: gapi.client.books.CloudloadingResource;

//     var dictionary: gapi.client.books.DictionaryResource;

//     var layers: gapi.client.books.LayersResource;

//     var myconfig: gapi.client.books.MyconfigResource;

//     var mylibrary: gapi.client.books.MylibraryResource;

//     var notification: gapi.client.books.NotificationResource;

//     var onboarding: gapi.client.books.OnboardingResource;

//     var personalizedstream: gapi.client.books.PersonalizedstreamResource;

//     var promooffer: gapi.client.books.PromoofferResource;

//     var series: gapi.client.books.SeriesResource;

//     var volumes: gapi.client.books.VolumesResource;

// }