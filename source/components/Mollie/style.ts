import styled from 'styled-components'

import { spacer, color } from '../../theme'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > svg, div {
    margin-right: ${spacer(2)}px;
  }
  > div {
    color: ${color.greyLight};
    max-width: calc(100% -  18px); /** svg width + margin */
    > span {
      color: #000;
      font-weight: bold;
    }
  }
`
