import { css } from 'styled-components';
import {
  white, gray
} from '../style/colors';
import { borderRadius } from '../style/borders';

export const CardBase = css`
  width: 100%;
  background-color: ${white};
  border: 1px solid ${gray};
  border-radius: ${borderRadius};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
`;