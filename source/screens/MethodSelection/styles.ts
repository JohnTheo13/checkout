import styled from 'styled-components'

import themeParser, { color, spacer, boxShadow } from '../../theme'

export const MethodsContainer = styled.div`
  position: relative;
  background-color: ${themeParser('color.grey', color.grey)};
  border-radius: ${spacer(3)}px;
  box-shadow: ${boxShadow};
  > button {
    &:first-child {
      border-top-left-radius: ${spacer(3)}px;
      border-top-right-radius: ${spacer(3)}px;
      border-bottom: none;
    }
    &:last-child {
      border-bottom-left-radius: ${spacer(3)}px;
      border-bottom-right-radius: ${spacer(3)}px;
      border-top: none;
    }
  }
`
