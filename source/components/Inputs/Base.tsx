import React, { ReactElement, InputHTMLAttributes } from 'react'

import { InputWrapper } from './styles'
import InputError from './InputError'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  error?: string
}

const BaseInput = ({
  label,
  id,
  error = '',
  ...rest
}: InputProps): ReactElement => (
  <InputWrapper>
    <div>
      <input
        id={id}
        {...rest}
        placeholder=' '
        className={error.length > 0 ? 'error' : ''}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    {error.length > 0 && <InputError message={error} />}
  </InputWrapper>
)

export default BaseInput
