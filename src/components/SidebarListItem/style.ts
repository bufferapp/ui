import styled from 'styled-components'
import {
  blueLightest50,
  grayDarker,
  grayLight50,
  gray,
  grayDark,
  blue,
} from '../style/colors'
import Text from '../Text/Text'

export const Badge = styled.span`
  margin-left: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  margin-right: 8px;
  color: ${(props): string => (props.selected ? blue : grayDarker)};
`

export const NameHandleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Handle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.2px;
  color: ${grayDark};
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
`

export const LabelStyled = styled(Text)`
  font-size: ${(props): string => (props.hasUser ? '13px' : '15px')};
  font-weight: ${(props): string => (props.hasUser ? '500' : '700')};
  line-height: ${(props): string => (props.hasUser ? '20px' : '24px')};
  color: ${(props): string => (props.selected ? blue : grayDarker)};
`

export const IconContainer = styled.span`
  margin-right: 8px;
  display: inline-block;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  svg {
    fill: ${(props): string => (props.selected ? blue : gray)};
  }
`

export const ItemStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 0 8px 8px;
  background-color: ${(props) =>
    props.selected ? blueLightest50 : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.selected ? blueLightest50 : grayLight50};

    ${Badge}, ${LabelStyled} {
      color: ${(props): string => (props.selected ? blue : grayDarker)};
    }

    ${IconContainer} svg {
      fill: ${(props): string => (props.selected ? blue : gray)};
    }
  }
`

export const BadgeIconContainer = styled(IconContainer)`
  margin-left: auto;
  svg {
    fill: ${(props): string => (props.selected ? gray : 'currentColor')};
  }
`
