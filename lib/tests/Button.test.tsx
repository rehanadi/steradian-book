import { describe, expect, test, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Button from '../../app/components/ui/Button'

describe('Button component', () => {
  test('should call onClick when the button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Example</Button>)

    const button = screen.getByRole('button')
    button.click()

    expect(onClick).toBeCalled()
  })
})
