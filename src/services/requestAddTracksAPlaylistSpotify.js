import manageLocalStorage from './manageLocalStorage'

export default async function requestAddTracksAPlaylistSpotify(
  playlistId,
  tracks
) {
  const { access_token } = manageLocalStorage.getItem('tokens')

  await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${encodeURIComponent(
      tracks
    )}`,
    {
      method: 'POST',
      headers: { Authorization: `'Bearer ${access_token}'` }
    }
  )
}
