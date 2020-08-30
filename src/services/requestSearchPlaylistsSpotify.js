import manageLocalStorage from './manageLocalStorage'

export default async function requestSearchPlaylistsSpotify(query) {
  const { access_token } = manageLocalStorage.getItem('tokens')

  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=playlist`,
    {
      headers: { Authorization: `'Bearer ${access_token}'` }
    }
  )
  return response.json()
}
