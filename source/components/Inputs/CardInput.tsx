/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { ReactElement, InputHTMLAttributes } from 'react'

import { CardInputWrapper } from './styles'
import InputError from './InputError'
import Svg, { IconName } from '../Svg'
import { cardFormater } from '../../utils/helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  error?: string
  value: string
  cardType: Partial<IconName> | string
}

const CardInput = ({
  label,
  id,
  error = '',
  value,
  cardType,
  ...rest
}: InputProps): ReactElement => {
  const formated = cardFormater(value)
  return (
    <CardInputWrapper>
      <div>
        <input
          id={id}
          {...rest}
          placeholder=' '
          value={formated}
          className={error.length > 0 ? 'error' : ''}
        />
        <label htmlFor={id}>{label}</label>
        {!!cardType && <Svg name={cardType as IconName} />}
      </div>
      {error.length > 0 && <InputError message={error} />}
    </CardInputWrapper>
  )
}

export default CardInput
