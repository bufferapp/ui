import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const TextAreaStyled = styled.div`
  ${Styles.base}
`;

const TextArea = ({ children }) => (
  <TextAreaStyled>
    {children}
  </TextAreaStyled>
);

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextArea;
