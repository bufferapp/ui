import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const SidebarHeaderStyled = styled.div`
  ${Styles.base}
`;

const SidebarHeader = ({ heading }) => (
  <SidebarHeaderStyled>{heading}</SidebarHeaderStyled>
);

SidebarHeader.propTypes = {
  heading: PropTypes.string,
};

SidebarHeader.defaultProps = {
  heading: '',
};

export default SidebarHeader;
