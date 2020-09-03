import manageLocalStorage from './manageLocalStorage'

export default async function requestUserPlaylistsFromSpotify() {
  const { access_token } = manageLocalStorage.getItem('tokens')

  const response = await fetch(
    'https://api.spotify.com/v1/me/playlists?limit=50',
    {
      headers: { Authorization: `'Bearer ${access_token}'` }
    }
  )
  return await response.json()
}
