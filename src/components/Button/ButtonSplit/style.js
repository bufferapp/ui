import { css } from 'styled-components';
import {
  blueLighter, gray,
} from '../../style/colors';

export const split = css`
  padding-left: 32px;
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
