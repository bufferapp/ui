import style, { css } from 'styled-components';
import {
  blue, grayDark,
} from '../../style/colors';

export const selectItem = css`
    align-items: center;
    color: ${grayDark};
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    overflow: hidden;
    padding: 6px 0px;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    &:hover {
      background-color:${blue};
      color: #fff;
    }
`;


export const selectItemLabel = style.div`
    font-size: 14px;
    font-weight: 400;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    padding: 0px 15px;
`;
