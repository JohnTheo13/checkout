import React, { ReactElement } from 'react'

import { ButtonWrapper } from './styles'
import Svg, { IconName } from '../Svg'

const { creditCard, ideal, bankTransfer, ...RestNames } = IconName
type excludedOptions = keyof typeof RestNames
export type Option = Exclude<IconName, excludedOptions>

const title = {
  [creditCard]: 'Credit card',
  [ideal]: 'iDEAL',
  [bankTransfer]: 'Bank Transfer'
}
const ButtonLink = ({ name, ...rest }: { name: Option, onClick: () => void }): ReactElement => (
  <ButtonWrapper {...rest} >
    <div>
      <Svg name={name} />
      <span>{title[name]}</span>
    </div>
    <span>{'>'}</span>
  </ButtonWrapper>
)

export default ButtonLink
