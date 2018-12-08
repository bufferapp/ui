import style, { css } from 'styled-components';
import {
  blueLighter, gray,
} from '../../style/colors';

export const buttonSplitBase = css`
  overflow: visible;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const selectButton = style.div`
  :before {
    background-color: ${props => (props.primary ? blueLighter : gray)};
    content: "";
    height: 24px;
    position: absolute;
    right: 38px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }
`;
