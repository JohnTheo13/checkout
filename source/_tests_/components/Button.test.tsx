import React from 'react'
import renderer from 'react-test-renderer'

import { Button } from '../../components'

test('Buttton snapshot', () => {
  const click = jest.fn()
  const title = 'title'
  const button = renderer.create(<Button title={title} onClick={click} />)
  expect(button.root.findByType('button').props.children).toBe(title)
  const inst = button.root.findByType('button')
  inst.props.onClick()
  expect(click).toBeCalled()
  expect(button.toJSON()).toMatchSnapshot()
})
