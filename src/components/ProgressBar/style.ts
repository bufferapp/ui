import styled from 'styled-components'
import { gray, grayLight } from '../style/colors'
import { borderRadius } from '../style/borders'

export const ContainerStyled = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${grayLight};
  border-radius: ${borderRadius};
  margin: 16px 0px;
  overflow: hidden;
`

export const ProgressStyled = styled.div`
  background-color: ${gray};
  height: 100%;
  width: ${(props): string => props.  
// @ts-expect-error TS(2551) FIXME: Property 'progress' does not exist on type 'Themed... Remove this comment to see the full error message
progress || '100%'};
  border-radius: ${borderRadius};
`
