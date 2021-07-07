import styled, { css } from 'styled-components';
import { blue, blueLightest, boxShadow, gray, grayDark, grayLight } from '../../style/colors';
import { borderRadius } from '../../style/borders';

const getGridTemplateAreas = (iconPosition) => {
  switch (iconPosition) {
    case 'top':
      return `
        "icon"
        "label"
      `;

    case 'bottom':
      return `
        "label"
        "icon"
      `;

    case 'right':
      return `"label icon"`;

    case 'left':
    default:
      return `"icon label"`;
  }
};

export const OptionStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  border-radius: ${borderRadius};
  margin-right: 4px;
  border: 1px solid transparent;

  color: ${p => {
    if (p.selected) return blue;
    if (p.disabled) return gray;
    return grayDark;
  }};

  background-color: ${p => {
    if (p.selected) return blueLightest;
    if (p.disabled) return grayLight;
  }};

  padding: ${props => {
    if (props.size === 'large') return '12px';
    if (props.size === 'small') return '4px 8px';
    return '8px';
  }};

  &:last-child {
    margin-right: 0;
  }

  ${p => !p.disabled && css`
    :hover {
      color: ${blue};
    }

    :active {
      background-color: ${blueLightest};
    }

    :focus {
      border: 1px solid ${blue};
      box-shadow: 0 0 0 1px ${boxShadow};
    }
  `}
`;

export const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
  // Calculate grid-template-rows value based on provided iconPosition
  grid-template-areas: ${p => getGridTemplateAreas(p.iconPosition)};
  // if horizontal icon position, two columns one row
  grid-template-columns: ${p => ['left', 'right'].includes(p.iconPosition) ? 'auto auto' : 'auto'};
  // if vertical icon position, one column two rows
  grid-template-rows: ${p => ['top', 'bottom'].includes(p.iconPosition) ? 'auto' : 'auto auto'};
`;

export const IconWrapper = styled.div`
  display: flex;
  grid-area: icon;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 14px;
  grid-area: label;
  ${p => p.optionType === 'textAndIcon' && `margin-${p.iconPosition}: 10px`};
`;
