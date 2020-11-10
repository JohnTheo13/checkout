import React from 'react'
import { create } from 'react-test-renderer'

import { CardInput } from '../../components/Inputs'
import { Svg } from '../../components'

test('Buttton snapshot', () => {
  const label = 'label'
  const change = jest.fn(s => s)
  const id = 'card'
  const amex = '347565656565656'
  const component = create(
    <CardInput
      label={label}
      id={id}
      value={amex}
      cardType='amex'
      onChange={change}
    />
  )
  expect(component.root.findByType('label').props.children).toBe(label)
  expect(component.root.findByType(Svg).props.name).toBe('amex')
  const input = component.root.findByType('input')
  expect(input.props.value).toBe('3475 6565 6565 656')
})
