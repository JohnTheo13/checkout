import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { IconName, PaymentOption, Option } from '../../components'
import { MethodsContainer } from './styles'
import { Box } from '../../containers'

// const methods = [IconName.creditCard, IconName.ideal, IconName.bankTransfer]

enum Method {
  ideal = IconName.ideal,
  creditCard = IconName.creditCard,
  bankTransfer = IconName.bankTransfer
}

const MethodSelector = (): ReactElement => {
  const history = useHistory()
  return (
    <Box>
      <MethodsContainer>
        {Object.keys(Method).map(method => (
          <PaymentOption
            name={method as Option}
            key={method}
            onClick={method === IconName.creditCard ? () => history.push('/payment/tr_87kDx7NbuH') : () => {}}
          />
        ))}
      </MethodsContainer>
    </Box>
  )
}

export default MethodSelector
