import fs from 'fs';
import fetch from './fetch';
import path from 'path';
import { promisifiedPipe } from './promisefied-pipe';

export function getCover(isbn13: string) {
    const coverUrl = `https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/${isbn13.substr(0, 4)}/${isbn13.substr(4, 4)}/${isbn13}.jpg`;
    const coverPath = path.join(__dirname, '..', '..', `cache/covers/${isbn13}.jpg`);

    return fetch(coverUrl)
        .then((response) => promisifiedPipe(response.body, fs.createWriteStream(coverPath)));
}
