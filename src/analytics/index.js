import ReactGA from 'react-ga'

export const homeClickTrack = () => {
  ReactGA.event({
    category: 'home',
    action: 'click',
    label: 'Home'
  })
}

export const searchClickTrack = (query) => {
  ReactGA.event({
    category: 'search',
    action: 'click',
    label: `Search Playlist ${query}`
  })
}

export const cloneClickTrack = () => {
  ReactGA.event({
    category: 'clone',
    action: 'click',
    label: 'Clone Playlist'
  })
}

export const confirmCloneClickTrack = () => {
  ReactGA.event({
    category: 'clone',
    action: 'click',
    label: 'Confirm Clone Playlist'
  })
}
