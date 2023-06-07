import styled from 'styled-components'
import Tooltip from '@reach/tooltip'
import {
  fontFamily,
  fontSizeSmall,
  fontWeight,
  lineHeightSmall,
} from '../style/fonts'
import { grayDarker, white } from '../style/colors'

export const TooltipWrapper = styled.div``

export const TooltipStyled: any = styled(Tooltip)`
  opacity: ${(props): string => props.opacity};
`

export const TooltipStyle = {
  position: 'absolute',
  background: grayDarker,
  color: white,
  border: 'none',
  borderRadius: '4px',
  padding: '8px',
  maxWidth: '200px',
  whiteSpace: 'normal',
  zIndex: 9999,
}

export const Label = styled.label<{ color: string; isHotkey?: boolean }>`
  color: ${(props): string => props.color};
  font-family: ${fontFamily};
  font-size: ${(props): string => (props.isHotkey ? '10px' : fontSizeSmall)};
  margin-left: ${(props): string => (props.isHotkey ? '8px' : '0')};
  font-weight: ${fontWeight};
  line-height: ${lineHeightSmall};
  cursor: inherit;
`

export const HotkeyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LabelWrapper = styled.div``
