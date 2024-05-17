"use client"
import axios from 'axios';
export default async function getUser(code) {
    const options = {
    method: 'POST',
    url: 'https://open.tiktokapis.com/v2/oauth/token/',
    body: {
        'client_key': 'aw56hlbjs9cydo18',
        'client_secret': '8ITb87gRwCOFSURt5FgECyhYqT0OCfXw',
        'code': 'DXCLNE0j0KQ9mSwdDv7BsUr12T4UnasJ60GWAx3FXXG9wEARkidCyx7jZyN3n_2LXlUSCFLykIzT-t_IPzRBMe0m2w7hwoEMHVrTy05xFafoVwvqkcty9vScswzl76_jufCurfDg65ZEaCrXWCZYKJ23PBqJVy-lYdZs2oFErWfVabV8zRfAg5L1VUCGVyfj4-_s2x6Zt-C9fPIu2N0IHw*2!5934.e1',
        'grant_type': 'authorization_code',
        'redirect_uri': 'https://viralclothes.vercel.app/user/feed/'
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
