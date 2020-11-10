import React, { ButtonHTMLAttributes, ReactElement } from 'react'

import ButtonWrapper from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

const Button = ({ title, ...rest }: ButtonProps): ReactElement => (
  <ButtonWrapper {...rest}>
    {title}
  </ButtonWrapper>
)

export default Button
