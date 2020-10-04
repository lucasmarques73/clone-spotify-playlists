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
        <meta charset="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Clone Playlists to your account in Spotify"
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Clone Playlists to your account in Spotify"
        />
        <meta
          property="og:image"
          content="https://clone-spotify-playlists.vercel.app/img/favicon.ico"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="https://clone-spotify-playlists.vercel.app/img/favicon.ico"
        />
        <meta name="twitter:creator" content="@lucas_marques" />
        <meta
          name="twitter:title"
          content="Clone Playlists to your account in Spotify"
        />
        <meta
          name="twitter:description"
          content="Clone Playlists to your account in Spotify"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Clone Playlists to your account in Spotify"
        />
        {/* We only want to add the scripts if in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
              }}
            />
          </>
        )}
      </Head>
      <GlobalStyles />
      {hasError && <Error setHasError={setHasError} />}
      <Component {...pageProps} setHasError={setHasError} />
    </>
  )
}

export default App
