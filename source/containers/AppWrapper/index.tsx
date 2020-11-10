import React, { ReactElement, ReactChild, Key } from 'react'

import { Container } from './styles'
import { IconName, Svg } from '../../components'
import { useAppContext } from '../../ContextPrvider'

const providers: Record<Key, string> = {
  deliveroo: IconName.merchant
  /// .... other providers
}

const AppWrapper = ({ children }: { children: ReactChild }): ReactElement => {
  const {
    state: { provider }
  } = useAppContext()
  return (
    <Container>
      <Svg name={providers[provider] as IconName} />
      {children}
    </Container>
  )
}

export default AppWrapper
