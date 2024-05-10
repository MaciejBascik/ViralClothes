"use client"
import axios from 'axios';
async function getVideos() {
    const options = {
    method: 'GET',
    url: 'https://open.tiktokapis.com/v2/video/query/',
    fields: {
        video_description: '#StreetWear #t-shirt #aesthetic #t-shirt #tee #tshirt #t-shirtfashion #t-shirttrend #t-shirtDIY #t-shirtdesign',
        count: '20',
        cursor: '0',
        create_time: '2629743',
        view_count: '1'
    },
    headers: {
        'X-RapidAPI-Key': '9259390fb3mshc228a5afa3d4716p12d740jsn53c3049ef096',
        'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com'
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