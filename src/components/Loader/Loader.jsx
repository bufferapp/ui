import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const LoaderStyled = styled.div`
  ${Styles.base}
`;

const Loader = ({ children }) => (
  <LoaderStyled>
    {children}
  </LoaderStyled>
);

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loader;
