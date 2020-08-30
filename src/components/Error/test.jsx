import { screen, render } from '@testing-library/react'
import Error from '.'

describe('<Error />', () => {
  it('Should be show a message', () => {
    render(<Error />)
    expect(screen.getByText(/Ocorreu um erro!/)).toBeInTheDocument()
  })
})
