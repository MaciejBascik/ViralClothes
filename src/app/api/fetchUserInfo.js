"use client"
import axios from 'axios';
export default async function getUserInfo(authBearer) {
    const options = {
    method: 'POST',
    url: 'https://open.tiktokapis.com/v2/oauth/token/?fields=open_id,union_id,avatar_url,display_name',
    headers: {
        'Authorization': `Bearer ${authBearer}`,
    }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
};
