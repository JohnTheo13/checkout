import styled from 'styled-components'

import themeParser, { color, font, spacer } from '../../theme'

const ButtonWrapper = styled.button`
  background-color: ${themeParser('color.primary', color.primary)};
  font-size: ${themeParser('font.size.button', font.size.button)};
  &:hover {
    background-color: ${themeParser('color.primaryFocus', color.primaryFocus)};
  }
  padding: ${spacer(10)}px;
  color: ${themeParser('color.white', color.white)};
  border-radius: ${spacer(3)}px;
  border: none;
`

export default ButtonWrapper
