import { render, screen } from '@testing-library/react'
import Logged from '.'

describe.skip('<Logged />', () => {
  beforeEach(() => {
    render(<Logged />)
  })

  it('Should render the Search Input', () => {
    expect(
      screen.getByPlaceholderText(/Digite uma playlist/)
    ).toBeInTheDocument()
  })
})
