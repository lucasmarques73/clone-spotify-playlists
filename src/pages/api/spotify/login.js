const scopes =
  'user-read-private user-read-email playlist-modify-public playlist-modify-private'

export default (_, res) => {
  res.redirect(
    'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      process.env.SPOTIFY_CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI)
  )
}
