import styled from 'styled-components'
import textColors, { redDark, grayDarker } from '../style/colors'
import {
  fontFamily,
  fontSize,
  fontWeight,
  fontWeightBold,
  fontWeightMedium,
  lineHeight,
} from '../style/fonts'

export const Span = styled.span`
  color: inherit;
  font-family: ${fontFamily};
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
`

export const Paragraph = styled.p`
  color: ${(props) => textColors[props.color]};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: 20px;
`

export const H1 = styled.h1`
  color: ${(props) => textColors[props.color]};
  font-family: ${fontFamily};
  font-size: 32px;
  font-weight: ${fontWeightBold};
  line-height: 44px;
`

export const H2 = styled.h2`
  color: ${(props) => textColors[props.color]};
  font-family: ${fontFamily};
  font-size: 24px;
  font-weight: ${fontWeightBold};
  line-height: 34px;
`

export const H3 = styled.h3`
  color: ${(props) => textColors[props.color]};
  font-family: ${fontFamily};
  font-size: 18px;
  font-weight: ${fontWeightBold};
  line-height: 28px;
`

export const Label = styled.label`
  color: ${(props) => textColors[props.color]};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  line-height: ${lineHeight};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: inherit;
`

export const Help = styled.label`
  color: ${({ hasError }) => (hasError ? redDark : grayDarker)};
  font-family: ${fontFamily};
  font-size: 14px;
  font-weight: ${fontWeightMedium};
  line-height: ${lineHeight};
`
