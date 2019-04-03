import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const SidebarItemStyled = styled.div`
  ${Styles.base}
`;

const SidebarItem = ({ item }) => <SidebarItemStyled>{item}</SidebarItemStyled>;

SidebarItem.propTypes = {
  item: PropTypes.string,
};

SidebarItem.defaultProps = {
  item: '',
};

export default SidebarItem;
