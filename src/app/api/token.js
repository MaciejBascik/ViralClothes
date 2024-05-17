"use client"

import axios from 'axios';
export default async function getUser(code) {

    const options = {
    method: 'POST',
    url: 'https://open.tiktokapis.com/v2/oauth/token/',
    body: {
        client_key: 'aw56hlbjs9cydo18',
        client_secret: '8ITb87gRwCOFSURt5FgECyhYqT0OCfXw',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: 'https://viralclothes.vercel.app/user/feed',
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache'
    }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
};
