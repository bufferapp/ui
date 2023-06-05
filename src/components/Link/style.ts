import styled from 'styled-components'
import { blue, blueDark } from '../style/colors'
import { fontFamily, fontSize, lineHeight } from '../style/fonts'

export const LinkStyled = styled.a`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${(props): string => props.  
// @ts-expect-error TS(2339) FIXME: Property 'fontWeight' does not exist on type 'Them... Remove this comment to see the full error message
fontWeight};
  line-height: ${lineHeight};
  cursor: pointer;
  text-decoration: none;
  color: ${blue};
  :hover {
    color: ${blueDark};
  }
`
