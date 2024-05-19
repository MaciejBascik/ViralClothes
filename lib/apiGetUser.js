export async function getUserInfo(authBearer) {
    const url = '/api/fetchVideos';
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = JSON.stringify({ authBearer });
  
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  }