import GlobalStyles from '../styles/global'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  )
}

export default MyApp
