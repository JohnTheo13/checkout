import styled from 'styled-components'

import { spacer, query } from '../../theme'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  > * {
    margin-bottom: ${spacer(10)}px;
  }
  > button {
    margin-bottom: 0;
    margin-top: ${spacer(10)}px;
  }
  > div.grouped {
    margin-bottom: 0;
    > * {
      width: 100%;
      margin-bottom: ${spacer(10)}px;
    }
    ${query.DESKTOP_MEDIA_QUERY} {
      display: flex;
      justify-content: space-between;
      > * {
        width: 47%;
      }
    }
  }
`
