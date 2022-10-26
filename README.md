# Clone Spotify Playlist

This app is used to clone some playlists in Spotify to your account.
You can clone all musics or just select some musics.

## Spotify Login

The login is made using `src/pages/api/spotify/login.js`
We need to configure the enviroment variables
```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=

NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=
```

The `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` we get from [Developers Spotify](https://developer.spotify.com/dashboard/)

It's necessary login with your Spotify account and create an app to get those tokens.


## Why Next.JS and Vercel

Next is an excellent front end framework. Next with Vercel provides me the opportunity to have a front end and back end together.
We use the [API Routes](https://nextjs.org/docs/api-routes/introduction) to create a connection with Spotify using backend.
This routes will create same functions inside Vercel.


## Running Local

First, you need to get the Spotify Enviroments Variables to Login and use the app.
Then, just run `yarn dev`
