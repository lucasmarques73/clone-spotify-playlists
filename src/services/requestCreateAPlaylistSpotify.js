import manageLocalStorage from './manageLocalStorage'

export default async function requestCreateAPlaylistSpotify(
  userId,
  name,
  description
) {
  const { access_token } = manageLocalStorage.getItem('tokens')

  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: 'POST',
      headers: {
        Authorization: `'Bearer ${access_token}'`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        public: false
      })
    }
  )
  return await response.json()
}
