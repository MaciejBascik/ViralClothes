import 'axios';
export async function getVideos(keywords) {
  const url = `https://tiktok-scraper7.p.rapidapi.com/feed/search?keywords=${keywords}&region=pl&count=10&cursor=0&publish_time=30&sort_type=1`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66aba2d040msh178d41654e276dcp136907jsnd3e925dbffb4',
      'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = response;
    return result;
  } catch (error) {
    console.error(error);
  }
  }