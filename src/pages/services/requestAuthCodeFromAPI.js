export default async function requestAuthCodeFromAPI() {
  const response = await fetch("/api/spotify/auth-code");
  return await response.json();
}
