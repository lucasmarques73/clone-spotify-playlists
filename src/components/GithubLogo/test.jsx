import { render, screen } from '@testing-library/react'
import GithubLogo from '.'

describe('<GithubLogo />', () => {
  it('Should render the logo', () => {
    render(<GithubLogo />)
    expect(
      screen.getByRole('img', {
        src: /github-logo.png/
      })
    ).toBeInTheDocument()
  })

  it('Should render the Github link', () => {
    render(<GithubLogo />)
    expect(
      screen.getByRole('link', {
        href: /github/
      })
    ).toBeInTheDocument()
  })
})
