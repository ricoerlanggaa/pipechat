import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Home Page', () => {
  it('Button component is accessible', () => {
    render(<Page />)

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Button')
  })
})
