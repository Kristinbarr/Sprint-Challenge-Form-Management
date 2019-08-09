import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import RecipesList from './RecipesList'
import { ozToMl } from './conversions';

describe('conversions', () => {
  describe('ozToMl', () => {
    it('should convert oz to ml', () => {
      expect(ozToMl(3)).toBe(88.72064825220323)
    })
  })
})

describe('<UserForm />', () => {
  it('should render without crashing', () => {
    render(<RecipesList />)
  })

  it('should click the test button', () => {
    const clicked = false
    const { getByText } = render(<RecipesList remove={() => (clicked = true)} />)
    const testButton = getByText(/submit/i)
    fireEvent(testButton)
    expect(clicked).toBe(true)
  })
})
