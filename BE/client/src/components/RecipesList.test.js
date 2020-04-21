import React from 'react'
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import RecipesList from './RecipesList'
import { ozToMl } from './conversions';

describe('conversions', () => {
  describe('ozToMl', () => {
    it('should convert oz to ml', () => {
      expect(ozToMl(3)).toBe(88.7206)
    })
  })
})

describe('<UserForm />', () => {
  it('should render without crashing', () => {
    render(<RecipesList />)
  })

  it('should click the remove button', () => {
    const clicked = false
    const { getByTestId } = render(<RecipesList remove={() => (clicked=true)} />)
    const testButton = getByText(/remove/i)
    // console.log('testButton', testButton)
    fireEvent.click(testButton)
    expect(clicked).toBe(true)
  })
})
