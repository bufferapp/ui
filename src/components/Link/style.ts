import styled from 'styled-components'
import { blue, blueDark } from '../style/colors'
import { fontFamily, fontSize, lineHeight } from '../style/fonts'

export const LinkStyled = styled.a`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${lineHeight};
  cursor: pointer;
  text-decoration: none;
  color: ${blue};
  :hover {
    color: ${blueDark};
  }
`
