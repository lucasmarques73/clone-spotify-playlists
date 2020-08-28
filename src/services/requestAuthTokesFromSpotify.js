import encondeClientIdAndSecretToBase64 from "./encondeClientIdAndSecretToBase64";

export default async function requestAuthTokesFromSpotify(code, authCode) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    credentials: "include",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${authCode}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
    }),
  });
  return response.json();
}
