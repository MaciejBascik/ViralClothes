// pages/api/token.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { code } = req.body;

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

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body.toString()
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
