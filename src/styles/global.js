import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
html,
body,
#__next {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  --white: #ffffff;
  --green: #1db954;
  --dark-green: #1aa34a;
  --black: #191414;
  --ligth-black: #0f1015;
  --red: #ec3e36;
}

`

export default GlobalStyles