import Head from 'next/head'
import GlobalStyles from 'styles/global'

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Clone Spotify Playlists</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta name="description" content="asdasd" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
