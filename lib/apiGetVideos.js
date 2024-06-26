import 'axios';
export async function getVideos(keywords) {
  const url = `https://tiktok-scraper7.p.rapidapi.com/feed/search?keywords=${keywords}&region=pl&count=10&cursor=0&publish_time=30&sort_type=1`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RapidAPIKey,
      'X-RapidAPI-Host': process.env.RapidAPIHost
    }
  };
  
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  }