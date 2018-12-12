import style from 'styled-components';
import {
  white, grayDark,
} from '../../style/colors';

export const StyledIcon = style.path`
  fill: ${props => (props.type === 'primary' ? white : grayDark)}
`;

export const StyledRectangle = style.rect`
  stroke: ${props => (props.type === 'primary' ? white : grayDark)}
  fill: ${props => (props.type === 'primary' ? white : grayDark)}
`;


export const StyledMask = style.mask`
  fill: ${props => (props.type === 'primary' ? white : grayDark)}
`;


export const StyledCircle = style.circle`
  fill: ${props => (props.type === 'primary' ? white : grayDark)}
`;
