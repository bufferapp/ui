import styled from 'styled-components'
import { blue, gray, white, grayShadow, grayLighter } from '../../style/colors'

export const PopupMenuStyled = styled.ul`
  position: absolute;
  z-index: 1000;
  border: 1px solid ${gray};
  box-sizing: border-box;
  box-shadow: ${grayShadow};
  border-radius: 4px;
  max-height: calc(
    100vh - 64px
  ); /* 56px navbar + 8px margin-top. If someone needs to adjust this again, we might consider creating a prop and set this as the default value */
  scroll: auto;
  display: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'ThemedSt... Remove this comment to see the full error message
isOpen ? 'initial' : 'none')};
  min-width: 200px;
  max-width: 200px;
  width: 200px;
  background-color: ${white};
  top: 100%;
  bottom: initial;
  margin-bottom: 0;
  margin-top: 8px;
  padding: 8px 0;
  transform: translateX(
    ${(props): string =>
      // @ts-expect-error TS(2339) FIXME: Property 'horizontalOffset' does not exist on type... Remove this comment to see the full error message
      props.horizontalOffset ? props.horizontalOffset : '0'}
  );
  right: ${(props): string => {
    // @ts-expect-error TS(2339) FIXME: Property 'xPosition' does not exist on type 'Omit<... Remove this comment to see the full error message
    const { xPosition } = props
    // @ts-expect-error TS(2322) FIXME: Type 'number' is not assignable to type 'string'.
    if (xPosition === 'right') return 0
    return ''
  }};
  left: ${(props): string => {
    // @ts-expect-error TS(2339) FIXME: Property 'xPosition' does not exist on type 'Omit<... Remove this comment to see the full error message
    const { xPosition } = props
    // @ts-expect-error TS(2322) FIXME: Type 'number' is not assignable to type 'string'.
    if (xPosition === 'left') return 0
    return ''
  }};

  &[role='menu'] > li {
    & button:focus {
      outline: 1px solid ${blue};
    }
  }
  &:focus {
    outline: none;
  }
`

export const ItemDivider = styled.li`
  background-color: ${grayLighter};
  height: 1px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 0;
  pointer-events: none;
  width: 100%;
  list-style: none;
  margin-top: ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'type' does not exist on type 'ThemedStyl... Remove this comment to see the full error message
    props.type && props.type === 'header' ? '15px' : ''};
`
