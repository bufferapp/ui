import React from 'react';

import PropTypes from 'prop-types';
import { CrossSellContentStyled } from './style';

const CrossSellContent = ({ header, body, footer }) => (
  <CrossSellContentStyled>
    {header}
    {body}
    {footer}
  </CrossSellContentStyled>
);

CrossSellContent.propTypes = {
  header: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default CrossSellContent;
