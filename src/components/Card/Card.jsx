import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const CardStyled = styled.div`
  ${Styles.CardBase};
`;

const Card = ({ children }) => (
  <CardStyled>
    {children}
  </CardStyled>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
}

Card.defaultProps = {
  children: null
}

export default Card;
