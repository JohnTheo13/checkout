import {
  cardFormater,
  cardType,
  valitator,
  cardError
} from '../../utils/helpers'
import { IconName } from '../../components'

test('CardFormater Tests', () => {
  expect(cardFormater('5352')).toBe('5352')
  expect(cardFormater('535262')).toBe('5352 62')
  expect(cardFormater('5352626262')).toBe('5352 6262 62')
  expect(cardFormater('5352 v 62x 5')).toBe('5352 625')
  expect(cardFormater('')).toBe('')
})

test('cardType tests', () => {
  const amex = '347565656565656'
  const masterCard = '5352156235846845'
  const visa = '4585695525856963695'
  expect(cardType(amex)).toBe(IconName.amex)
  expect(cardType(masterCard)).toBe(IconName.masterCard)
  expect(cardType(visa)).toBe(IconName.visa)
  expect(cardType('12354584684565464')).toBe('')
})

test('Validator for card details', () => {
  const emptyError = { holder: '', card: '', code: '', expiry: '' }
  const validInput = {
    cardHolder: 'John Doe',
    card: { type: 'visa', id: '4585695525856963695' },
    cvv: '123',
    expiration: '12/23'
  }
  expect(valitator(validInput)).toStrictEqual(emptyError)
  expect(valitator({ ...validInput, cardHolder: '' })).toStrictEqual({
    ...emptyError,
    holder: cardError.holder
  })
  expect(valitator({ ...validInput, expiration: '34/21' })).toStrictEqual({
    ...emptyError,
    expiry: cardError.expiry
  })
  expect(valitator({ ...validInput, cvv: '1234' })).toStrictEqual({ ...emptyError, code: cardError.code })
  // more senarios here
})
