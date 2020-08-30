import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('Should render the logo', () => {
    render(<Logo />)
    expect(
      screen.getByRole('img', {
        src: /spotify.png/
      })
    ).toBeInTheDocument()
  })
})
