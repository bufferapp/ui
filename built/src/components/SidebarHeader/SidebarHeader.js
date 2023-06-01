import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer } from './style';
import Text from '../Text/Text';
const SidebarHeader = ({ title }) => (React.createElement(TitleContainer, null,
    React.createElement(Text, { type: "label" }, title)));
SidebarHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SidebarHeader;
//# sourceMappingURL=SidebarHeader.js.map