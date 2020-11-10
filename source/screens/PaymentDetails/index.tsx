import React, {
  ChangeEvent,
  useState,
  ReactElement,
  SyntheticEvent,
  KeyboardEvent
} from 'react'

import { Box } from '../../containers'
import { Input, CardInput } from '../../components/Inputs'
import { Button } from '../../components'
import { cardType, valitator } from '../../utils/helpers'
import { FormWrapper } from './styles'

const PaymentDetails = (): ReactElement => {
  const initalErrorState = {
    holder: '',
    card: '',
    expiry: '',
    code: ''
  }
  const [state, setState] = useState({
    cardHolder: '',
    card: { type: '', id: '' },
    expiration: '',
    cvv: '',
    error: initalErrorState
  })

  const onCardChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    setState(prev => ({ ...prev, error: initalErrorState }))
    const converted = value.split(' ').join('')
    const type = converted.length > 14 ? cardType(converted) : ''
    console.log(type)
    setState(prev => ({ ...prev, card: { id: converted, type } }))
  }

  const onChange = ({
    target: { value, name }
  }: ChangeEvent<HTMLInputElement>): void => {
    setState(prev => ({ ...prev, error: initalErrorState }))
    if (name === 'expiration') {
      const expiryValue =
        value.length === 3 ? `${value.slice(0, 2)}/${value.slice(-1)}` : value
      setState(prev => ({ ...prev, expiration: expiryValue }))
    } else {
      setState(prev => ({ ...prev, [name]: value }))
    }
  }

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    const { error, ...rest } = state
    const errors = valitator(rest)
    setState(prev => ({ ...prev, error: errors }))
    console.log(rest)
  }

  const onDelete = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      setState(prev => ({ ...prev, expiration: '' }))
    }
  }

  const { cardHolder, card, expiration, cvv, error } = state

  return (
    <Box>
      <FormWrapper onSubmit={onSubmit}>
        <Input
          label='Cardholder name'
          id='name'
          name='cardHolder'
          error={error.holder}
          value={cardHolder}
          onChange={onChange}
          alt='Cardholder name'
        />
        <CardInput
          label='Credit card number'
          id='card'
          name='cardId'
          value={card.id}
          cardType={card.type}
          onChange={onCardChange}
          maxLength={23}
          error={error.card}
          alt='Credit card number'
        />
        <div className='grouped'>
          <Input
            label='Expiration date'
            id='expiration'
            name='expiration'
            value={expiration}
            onChange={onChange}
            maxLength={5}
            error={error.expiry}
            onKeyDown={onDelete}
            alt='Expiration date'
          />
          <Input
            label='CVV'
            id='cvv'
            name='cvv'
            value={cvv}
            onChange={onChange}
            maxLength={4}
            error={error.code}
            alt='cvv'
          />
        </div>
        <Button type='submit' title='Pay' />
      </FormWrapper>
    </Box>
  )
}

export default PaymentDetails
