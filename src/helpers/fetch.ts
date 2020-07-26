import nodeFetch, { RequestInit } from 'node-fetch';

export default function fetch(url: string, options: RequestInit = {}) {
    return nodeFetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'
        },
        ...options
    });
}