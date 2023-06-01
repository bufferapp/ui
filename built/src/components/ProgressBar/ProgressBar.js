import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled, ProgressStyled } from './style';
const ProgressBar = ({ progress, className }) => (React.createElement(ContainerStyled, { className: className },
    React.createElement(ProgressStyled, { progress: progress })));
ProgressBar.propTypes = {
    progress: PropTypes.string.isRequired,
    className: PropTypes.string,
};
ProgressBar.defaultProps = {
    className: undefined,
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map