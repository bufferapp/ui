import style from 'styled-components';
import {
  blue, grayDarker, white,
} from '../../style/colors';
import { fontWeightMedium, fontSize } from '../../style/fonts';

export const SelectItemStyled = style.li`
    min-height: 32px;
    align-items: center;
    color: ${props => (props.hovered ? white : grayDarker)};
    cursor: pointer;
    display: flex;
    font-size: ${fontSize};
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    background-color:${props => (props.hovered ? blue : 'transparent')};
    &:hover {
      background-color:${blue};
      color: #fff;
    }
`;


export const SelectItemLabel = style.div`
    font-size: ${fontSize};
    font-weight: ${fontWeightMedium};
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    padding: 0px 16px;
    display: flex;
    align-items: end;
`;

export const SelectItemIcon = style.div`
  padding-right: 4px;
  ${SelectItemStyled}:hover & * {
    color: ${white};
  }
`;

export const SelectItemTitle = style.div`
  margin-left: ${props => (props.moveRight ? '22px' : '5px')};
`;
