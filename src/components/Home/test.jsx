import { render, screen } from '@testing-library/react'
import Home from '.'

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('Should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /Clone playlists públicas para você!!/
      })
    ).toBeInTheDocument()
  })

  it('Should render the link', () => {
    expect(
      screen.getByRole('link', {
        name: /Login com Spotify/
      })
    ).toBeInTheDocument()
  })

  it('Should render the logo', () => {
    expect(
      screen.getByRole('img', {
        src: /spotify.png/
      })
    ).toBeInTheDocument()
  })
})
