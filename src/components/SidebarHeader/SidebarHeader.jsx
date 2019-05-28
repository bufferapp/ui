import React from 'react';

import PropTypes from 'prop-types';
import { TitleContainer } from './style';
import Text from '../Text/Text';

const SidebarHeader = ({ title }) => (
  <TitleContainer>
    <Text type="label">{title}</Text>
  </TitleContainer>
);

SidebarHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarHeader;
