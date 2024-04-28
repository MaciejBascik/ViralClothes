"use client"
import axios from 'axios';
async function getVideos() {
    const options = {
    method: 'GET',
    url: 'https://tiktok-scraper7.p.rapidapi.com/feed/search',
    params: {
        keywords: '#StreetWear #t-shirt #aesthetic #t-shirt #tee #tshirt #t-shirtfashion #t-shirttrend #t-shirtDIY #t-shirtdesign',
        region: 'us',
        count: '20',
        cursor: '0',
        publish_time: '30',
        sort_type: '1'
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