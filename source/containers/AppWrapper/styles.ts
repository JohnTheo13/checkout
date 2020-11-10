import styled from 'styled-components'

import { spacer } from '../../theme'

export const Container = styled.div`
  background-image: url('/images/background.png');
  background-position: center;
  background-size: cover;
  padding: ${spacer(16)}px ${spacer(10)}px;
  height: 100%;
  > svg {
    display: block;
    margin: auto;
    margin-bottom: ${spacer(16)}px;
  }
`
