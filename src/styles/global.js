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

ol, ul {
    list-style: none;
  }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
}

body {
  --white: #ffffff;
  --green: #1db954;
  --dark-green: #1aa34a;
  --black: #191414;
  --ligth-black: #0f1015;
  --gray: rgba(255, 255, 255, .25);
  --red: #ec3e36;
}

.overlay-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray)
}

.modal {
  background-image: linear-gradient(rgb(70, 76, 82), rgb(7, 7, 8) 85%);
  background-color: var(--black);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -165px;
  border: 1px solid var(--white);
  overflow: hidden;
  border-radius: 4px;
  outline: none;
  padding: 20px;
}
`

export default GlobalStyles
