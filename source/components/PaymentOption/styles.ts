import styled from 'styled-components'
import themeParser, { color, spacer } from '../../theme'

export const ButtonWrapper = styled.button`
  background-color: ${themeParser('color.white', color.white)};
  padding: ${spacer(6)}px;
  width: 100%;
  border: ${spacer(0.5)}px solid ${themeParser('color.inputBorder', color.inputBorder)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    > span {
      margin-left: ${spacer(4)}px;
    }
  }
  &:focus,
  :hover {
    background-color: ${themeParser('color.optionFocus', color.optionFocus)};
  }
`
