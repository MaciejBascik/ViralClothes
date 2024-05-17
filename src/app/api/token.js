async function getUser(code) {
    const url = 'https://open.tiktokapis.com/v2/oauth/token/';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    };
    const body = new URLSearchParams({
      'client_key': 'aw56hlbjs9cydo18',
      'client_secret': '8ITb87gRwCOFSURt5FgECyhYqT0OCfXw',
      'code': code,
      'grant_type': 'authorization_code',
      'redirect_uri': 'https://viralclothes.vercel.app/user/feed/'
    });
  
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body.toString()
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  }