import Head from 'next/head'
import { useState } from 'react'
import GlobalStyles from 'styles/global'
import Error from '../components/Error'

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const [hasError, setHasError] = useState(false)
  return (
    <>
      <Head>
        <title>Clone Spotify Playlists</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Clone Playlists to your account in Spotify"
        />
      </Head>
      <GlobalStyles />
      {hasError && <Error setHasError={setHasError} />}
      <Component {...pageProps} setHasError={setHasError} />
    </>
  )
}

export default App
