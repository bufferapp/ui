import styled from 'styled-components'
import { fontSizeSmall, fontWeightMedium, lineHeight } from '../style/fonts'
import textColors, * as Colors from '../style/colors'

export const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  font-weight: ${fontWeightMedium};
  font-size: ${fontSizeSmall};
  line-height: ${lineHeight};
  border-radius: 100px;
  color: ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    textColors[props.textColor]};
  background-color: ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    Colors[props.color]};

  &:hover {
    color: ${(props) =>
      // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      textColors[props.textColor]};
  }
`
