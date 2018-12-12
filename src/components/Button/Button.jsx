import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Select from '../Select/Select';

export const ButtonStyled = style.div`  
  ${Styles.buttonbase};
  ${props => Styles[props.size]};
  ${props => Styles[props.disabled ? 'disabled' : props.type]};
`;

const Loading = style.img`
  width: 24px;
  padding-left: 10px;
`;


/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */
const Button = ({
  disabled,
  onClick,
  type,
  size,
  label,
  isSplit,
  loading,
  icon,
  hasIconOnly,
  isSelect,
  items,
}) => (
  <ButtonStyled
    onClick={!disabled ? onClick : undefined}
    disabled={disabled}
    size={size}
    type={type}
    isSplit={isSplit}
    icon={icon}
    hasIconOnly={hasIconOnly}
    aria-label={label || null}
  >
    {label}
    {isSelect && (type === 'primary' || type === 'secondary') && <Styles.ArrowButton><ChevronDown type={type} size={size} /></Styles.ArrowButton>}
    {loading && <Loading src="./images/loading-gray.svg" alt="loading" />}
    {isSplit && (type === 'primary' || type === 'secondary') && <Select onSelectClick={() => {}} items={items} type={type} isSplit /> }
  </ButtonStyled>
);


Button.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** OnClick handler */
  onClick: PropTypes.func.isRequired,

  /** Button label */
  label: PropTypes.string,

  /** Type of button */
  type: PropTypes.oneOf(['link', 'primary', 'secondary', 'text']),

  /** Is the Button Split  */
  isSplit: PropTypes.bool,

  /** Is this the Select button with chevron */
  isSelect: PropTypes.bool,

  /** Is the Button Loading  */
  loading: PropTypes.bool,

  /** Does the button have only an icon and no label */
  hasIconOnly: PropTypes.bool,

  /** Icon to show with the label */
  icon: PropTypes.node,

  /** Items to display in the Split Button popup */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};


Button.defaultProps = {
  disabled: false,
  isSplit: undefined,
  loading: false,
  size: 'medium',
  type: 'secondary',
  label: undefined,
  hasIconOnly: false,
  icon: undefined,
  isSelect: undefined,
  items: undefined,
};


export default Button;
