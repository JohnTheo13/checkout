import React from 'react'
import renderer from 'react-test-renderer'
import Svg, { IconName } from '../../components/Svg'

test('All svgs are rendered properly', () => {
  const icons = Object.keys(IconName)
  const svgs = renderer.create(
    <div>
      {icons.map(name => (
        <Svg name={name as IconName} key={name} />
      ))}
    </div>
  )
  expect(svgs.root.children).toHaveLength(icons.length)
})
