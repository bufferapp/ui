import React from 'react';

import PropTypes from 'prop-types';
import { TitleContainer } from './style';
import Text from '../Text/Text';

const Header = ({ title }) => (
  <TitleContainer>
    <Text type="label">{title}</Text>
  </TitleContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
