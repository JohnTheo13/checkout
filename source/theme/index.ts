import get from 'lodash.get'

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */

const themeParser = (path: string, defaultValue?: string): any => (
  props: any
) => get(props.theme, path, defaultValue)

const color = {
  primary: '#0077ff',
  primaryFocus: '#0068df',
  error: '#ff5252',
  errorLight: '#ff525236',
  grey: '#888888',
  greyLight: '#ababab',
  inputBorder: '#dddddd',
  optionContainer: '#fafafa',
  optionFocus: '#e8f3ff',
  white: '#ffffff',
  boxBackground: '#d8d8d8'
}

const font = {
  family:
    'Circular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
  size: {
    input: '18px',
    button: '18px'
  }
}

const MOBILE_MAX_WIDTH = 768
const MOBILE_MEDIA_QUERY = `@media (max-width: ${MOBILE_MAX_WIDTH}px)`
const DESKTOP_MEDIA_QUERY = `@media (min-width: ${MOBILE_MAX_WIDTH}px)`

const query = {
  MOBILE_MEDIA_QUERY,
  DESKTOP_MEDIA_QUERY
}

const boxShadow = '0px 1.2px #88888861'

const BASE = 2

const spacer = (num: number): number => BASE * num

export default themeParser

export { color, spacer, boxShadow, font, query }
