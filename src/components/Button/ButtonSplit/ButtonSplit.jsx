import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const ButtonArrow = style.div`
  ${Styles.split};
   ${props => Styles[props.type]};
`;

const ButtonSplit = ({ onClick, type }) => (
  <ButtonArrow onClick={onClick} type={type}>▾</ButtonArrow>
);

ButtonSplit.propTypes = {
  onClick: PropTypes.func.isRequired,

  /** Type of button */
  type: PropTypes.oneOf(['link', 'primarySplit', 'primary', 'secondary', 'text']).isRequired,
};

export default ButtonSplit;
