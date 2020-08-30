import { render, screen } from '@testing-library/react'
import Sidebar from '.'

describe('<Sidebar />', () => {
  beforeEach(() => {
    render(<Sidebar />)
  })

  it('Should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /Clone Spotify Playlists/
      })
    ).toBeInTheDocument()
  })

  it('Should render the link', () => {
    expect(
      screen.getByRole('link', {
        href: /\//
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
