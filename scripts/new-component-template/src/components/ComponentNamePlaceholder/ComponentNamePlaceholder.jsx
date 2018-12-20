import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const ComponentNamePlaceholderStyled = styled.div`
  ${Styles.base}
`;

const ComponentNamePlaceholder = ({ children }) => (
  <ComponentNamePlaceholderStyled>
    {children}
  </ComponentNamePlaceholderStyled>
);

ComponentNamePlaceholder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentNamePlaceholder;
