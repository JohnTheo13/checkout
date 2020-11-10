/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IconName } from '../components'

export const cardFormater = (val: string): string => {
  const value = val.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = value.match(/\d{4,19}/g)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const match = !matches ? '' : matches[0]
  const parts = []
  let i = 0
  const { length } = match
  for (length; i < length; i += 4) {
    parts.push(match.substring(i, i + 4))
  }
  if (parts.length > 0) {
    return parts.join(' ')
  } else {
    return value
  }
}

const regex = {
  [IconName.amex]: /^3[47]\d{13}$/,
  [IconName.masterCard]: /^5[1-5]\d{14}$/,
  [IconName.visa]: /^4\d{18}$/
}

export const cardType = (val: string): IconName | '' => {
  switch (val.length) {
    case 15:
      return regex[IconName.amex].test(val) ? IconName.amex : ''
    case 16:
      return regex[IconName.masterCard].test(val) ? IconName.masterCard : ''
    case 19:
      return regex[IconName.visa].test(val) ? IconName.visa : ''
    default:
      return ''
  }
}

const isCVVValid = (cvv: string, type: string): boolean => {
  if (
    cvv.length === 3 &&
    (type === IconName.visa || type === IconName.masterCard)
  ) {
    return true
  } else if (type === IconName.amex && cvv.length === 4) {
    return true
  }
  return false
}

const isExpiryValid = (date: string): boolean => {
  if (!date) return false
  if (date.length !== 5) return false
  const [month, year] = date.split('/')
  if (!month || !year) return false
  const now = new Date()
  if (
    parseInt(year) <
    parseInt(
      now
        .getFullYear()
        .toString()
        .slice(2, 4)
    )
  ) {
    return false
  }
  if (
    parseInt(month) > 12 ||
    parseInt(month) <
      parseInt(
        now
          .getMonth()
          .toString()
          .slice(2, 4)
      )
  ) {
    return false
  }
  return true
}

interface State {
  cardHolder: string
  card: {
    type: string
    id: string
  }
  expiration: string
  cvv: string
}

interface ErrorType {
  holder: string
  card: string
  expiry: string
  code: string
}

export const cardError = {
  holder: 'Name is empty',
  card: 'Wrong card number',
  expiry: 'Invalid',
  code: 'Invalid date'
}

export const valitator = ({
  cardHolder,
  card: { type, id },
  cvv,
  expiration
}: State): ErrorType => {
  const holder = cardHolder.length > 0 ? '' : cardError.holder
  const card = !!type && id.length > 14 ? '' : cardError.card
  const code = isCVVValid(cvv, type) ? '' : cardError.code
  const expiry = isExpiryValid(expiration) ? '' : cardError.expiry
  return { holder, card, code, expiry }
}
