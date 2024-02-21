import '@testing-library/jest-dom';
import {describe, expect, test, jest} from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button component', () => {
  test('should call onClick when the button is clicked', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Example</Button>)

    expect(onClick).toBeCalled()
  })
})
