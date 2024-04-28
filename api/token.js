import {Buffer} from 'buffer';

var client_id = "aw56hlbjs9cydo18";
var client_secret = "8ITb87gRwCOFSURt5FgECyhYqT0OCfXw";

export async function getToken() {
  const response = await fetch('https://api.tiktok.com/oauth/access_token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}