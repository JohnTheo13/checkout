import React, { ReactElement } from 'react'

import Svg, { IconName } from '../Svg'
import { ErrorWrapper } from './styles'

const InputError = ({ message }: { message: string }): ReactElement => (
  <ErrorWrapper className='inline-error'>
    <Svg name={IconName.inputError} />
    {message}
  </ErrorWrapper>
)

export default InputError
