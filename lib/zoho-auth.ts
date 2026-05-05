// lib/zoho-auth.js
let accessToken = null;
let tokenExpiry = null;

export async function getZohoToken() {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }
  
  return await refreshZohoToken();
}

async function refreshZohoToken() {
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  
  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();
  
  if (data.access_token) {
    accessToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
  } else {
    throw new Error('Failed to refresh Zoho token: ' + JSON.stringify(data));
  }
}