import React, { ReactElement } from 'react'

import Container from './style'
import Svg, { IconName } from '../Svg'

const Mollie = (): ReactElement => (
  <Container>
    <Svg name={IconName.lock} />
    <div>Payment secured and powered by <span>mollie</span></div>
  </Container>
)

export default Mollie
