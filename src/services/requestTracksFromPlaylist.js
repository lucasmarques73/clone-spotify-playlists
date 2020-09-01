import manageLocalStorage from './manageLocalStorage'

export default async function requestTracksFromPlaylist(playlistId) {
  const { access_token } = manageLocalStorage.getItem('tokens')

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(id,name,artists(name),album(name,images)))`,
    {
      headers: { Authorization: `'Bearer ${access_token}'` }
    }
  )
  return response.json()
}
