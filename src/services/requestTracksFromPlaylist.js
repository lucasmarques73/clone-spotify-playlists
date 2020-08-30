import manageLocalStorage from './manageLocalStorage'

export default async function requestTracksFromPlaylist(playlistId) {
  const { access_token } = manageLocalStorage.getItem('tokens')

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?fields=items(track(name%2Cid%2Calbum(name)%2Cartists(name)))`,
    {
      headers: { Authorization: `'Bearer ${access_token}'` }
    }
  )
  return response.json()
}
