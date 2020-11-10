import React, { ReactElement } from 'react'
import InputError from './icons/input-error.svg'
import Lock from './icons/lock.svg'
import Amex from './logos/amex.svg'
import BankTransfer from './logos/banktransfer.svg'
import CreditCard from './logos/creditcard.svg'
import Ideal from './logos/ideal.svg'
import MasterCard from './logos/mastercard.svg'
import Mollie from './logos/mollie-logo.svg'
import Merchant from './logos/merchant-logo.svg'
import Visa from './logos/visa.svg'

export enum IconName {
  lock = 'lock',
  inputError = 'inputError',
  amex = 'amex',
  bankTransfer = 'bankTransfer',
  creditCard = 'creditCard',
  ideal = 'ideal',
  masterCard = 'masterCard',
  mollie = 'mollie',
  merchant = 'merchant',
  visa = 'visa'
}

const Svg = ({ name }: { name: IconName }): ReactElement => {
  switch (name) {
    case IconName.lock:
      return <Lock />
    case IconName.inputError:
      return <InputError />
    case IconName.amex:
      return <Amex />
    case IconName.bankTransfer:
      return <BankTransfer />
    case IconName.creditCard:
      return <CreditCard />
    case IconName.ideal:
      return <Ideal />
    case IconName.visa:
      return <Visa />
    case IconName.mollie:
      return <Mollie />
    case IconName.merchant:
      return <Merchant />
    case IconName.masterCard:
      return <MasterCard />
  }
}

export default Svg
