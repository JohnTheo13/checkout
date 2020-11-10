import React, { ReactElement, ReactChild } from 'react'

import BoxContainer from './style'
import { Mollie } from '../../components'
import { useAppContext } from '../../ContextPrvider'

interface BoxProps {
  children: ReactChild
}

const Box = ({ children }: BoxProps): ReactElement => {
  const { state: { orderId, amount, provider } } = useAppContext()
  return (
    <BoxContainer>
      <div className='order'>{`Order # ${orderId}`}</div>
      <h1>{`Pay ${provider}`}</h1>
      <h1 className='amount'>{amount}</h1>
      <div className='content'>{children}</div>
      <Mollie />
    </BoxContainer>
  )
}

export default Box
