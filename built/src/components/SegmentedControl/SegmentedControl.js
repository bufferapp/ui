import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { Container } from './style';
const SegmentedControl = ({ children }) => (React.createElement(Container, { role: "group" }, children));
SegmentedControl.propTypes = {
    children: PropTypes.node.isRequired,
};
SegmentedControl.defaultProps = {};
SegmentedControl.Option = Option;
export default SegmentedControl;
//# sourceMappingURL=SegmentedControl.js.map