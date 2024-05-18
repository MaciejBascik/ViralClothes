import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { authBearer } = req.body;

    const url = 'https://open.tiktokapis.com/v2/video/query/?fields=open_id,union_id,avatar_url,display_name';
    const headers = {
      'Authorization': `Bearer ${authBearer}`,

    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
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
