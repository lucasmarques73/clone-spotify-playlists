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

  it('Should render two images', () => {
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('Should render Spotify logo', () => {
    expect(screen.getByAltText('Spotify Logo')).toBeInTheDocument()
  })

  it('Should render Github logo', () => {
    expect(screen.getByAltText('Github Logo')).toBeInTheDocument()
  })
})
