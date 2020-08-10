import fs from 'fs';
import fetch from './fetch';
import path from 'path';
import { promisifiedPipe } from './promisefied-pipe';

export default class CoverHelper {
    public static cacheTumbnail(isbn: string, url: string) {
        // TODO: Create thumbnail folder if it is missing
        const coverPath = path.resolve(__dirname, `../../cache/thumbnails/${isbn}.jpg`);
        
        if (!fs.existsSync(coverPath)) {
            return fetch(url)
                .then((response) => promisifiedPipe(response.body, fs.createWriteStream(coverPath)));
        } else {
            return Promise.resolve();
        }
    }

    public static cacheCoverFromGoogle(isbn: string, volumeId: string) {
        const url = `https://books.google.com/books/content?id=${volumeId}&printsec=frontcover&img=1&zoom=4`;

        return this.cacheCover(isbn, url);
    }

    public static cacheCover(isbn: string, url: string) {
        // TODO: Create cover folder if it is missing
        const coverPath = path.resolve(__dirname, `../../cache/covers/${isbn}.jpg`);

        if (!fs.existsSync(coverPath)) {
            return fetch(url)
                .then((response) => promisifiedPipe(response.body, fs.createWriteStream(coverPath)));
        } else {
            return Promise.resolve();
        }
    }
}