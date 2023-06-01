import React from 'react';
import PropTypes from 'prop-types';
import { Input, Span, Wrapper, Container } from './style';
import Text from '../Text/Text';
const Switch = ({ label, id, disabled, handleSwitch, isOn }) => (React.createElement(Container, null,
    React.createElement(Text, { htmlFor: id, type: "label" }, label),
    React.createElement(Wrapper, null,
        React.createElement(Input, { checked: isOn, onChange: handleSwitch, id: id, type: "checkbox", role: "switch", "aria-checked": isOn, "aria-readonly": disabled, disabled: disabled }),
        React.createElement(Span, { "aria-hidden": "true" }))));
Switch.propTypes = {
    label: PropTypes.string.isRequired,
    isOn: PropTypes.bool,
    id: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleSwitch: PropTypes.func.isRequired,
};
Switch.defaultProps = {
    disabled: false,
    isOn: false,
};
export default Switch;
//# sourceMappingURL=Switch.js.map