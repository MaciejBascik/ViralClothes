"use client"
import axios from 'axios';
async function getVideos(token) {
    const options = {
    method: 'POST',
    url: 'https://open.tiktokapis.com/v2/video/query/fields=create_time,video_description,title,embed_html,embed_link,like_count,comment_count,share_count',
    headers: {
        'Authorization':`Bearer ${token}`,
        'Content-Type': 'application/json',
    }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default getVideos;