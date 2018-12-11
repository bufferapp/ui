import style from 'styled-components';
import {
  white, grayDark,
} from '../../style/colors';

export const StyledIcon = style.path`
  fill: ${props => (props.type === 'primary' ? white : grayDark)}
`;
