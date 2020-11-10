import styled from 'styled-components'

import themeParser, { color, spacer, font, query } from '../../theme'

const BoxContainer = styled.div`
  background-color: ${themeParser('color.option', color.optionContainer)};
  margin: auto;
  border-radius: ${spacer(3)}px;
  padding: ${spacer(16)}px ${spacer(18)}px;
  max-width: ${spacer(270)}px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ${font.family};
  > div {
    &.order {
      margin-bottom: ${spacer(8)}px;
      color: ${themeParser('color.greyLight', color.greyLight)}
    }
    &:last-child {
      margin-top: ${spacer(14)}px;
    }
  }
  > h1 {
    margin: 0;
    margin-bottom: ${spacer(2)}px;
    &.amount {
      margin-bottom: ${spacer(18)}px;
    }
  }
  ${query.MOBILE_MEDIA_QUERY} {
    padding: ${spacer(16)}px ${spacer(14)}px;
  }
`
export default BoxContainer
