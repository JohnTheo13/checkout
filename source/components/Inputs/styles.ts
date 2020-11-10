import styled from 'styled-components'

import themeParser, { color, spacer, font } from '../../theme'

export const ErrorWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themeParser('color.error', color.error)};
  > svg {
    margin-right: ${spacer(2)}px;
  }
`
export const InputWrapper = styled.div`
  > div {
    position: relative;
    display: flex;
    > input {
      width: 100%;
      height: ${spacer(29)}px;
      border: ${spacer(0.5)}px solid
        ${themeParser('color.greyLight', color.greyLight)};
      font-size: ${font.size.input};
      padding: ${spacer(14)}px ${spacer(6)}px ${spacer(6)}px;
      letter-spacing: 1;
      border-radius: ${spacer(3)}px;
      &.error {
        border: ${spacer(0.5)}px solid
          ${themeParser('color.error', color.error)};
        background-color: ${themeParser('color.errorLight', color.errorLight)};
      }
      &:focus {
        border: ${spacer(0.5)}px solid
          ${themeParser('color.primaryFocus', color.primaryFocus)};
        outline: 0;
        & + label {
          transform: translateY(-16px) scale(0.6);
        }
      }
      &:not(:placeholder-shown) {
        & + label {
          transform: translateY(-16px) scale(0.6);
        }
      }
    }
    > label {
      position: absolute;
      font-size: ${themeParser('font.size.input', font.size.input)};
      top: ${spacer(10)}px;
      left: ${spacer(6)}px;
      color: ${themeParser('color.greyLight', color.greyLight)};
      transform-origin: left bottom;
      transition: all 0.4s ease-out 0.1s;
    }
  }
  > ${ErrorWrapper} {
    float: left;
    position: absolute;
    font-size: 12px;
  }
`

export const CardInputWrapper = styled(InputWrapper)`
  > div {
    > svg {
      position: absolute;
      right: ${spacer(6)}px;
      top: ${spacer(6)}px;
    }
  }
`
