import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';
import { Warning } from '../Icon';
import Text from '../Text';
export default class Input extends React.Component {
    render() {
        const { disabled, hasError, help, label, maxLength, id, name, onChange, onBlur, onKeyUp, prefix, placeholder, size, type, value, forwardedRef, required, icon, } = this.props;
        return (React.createElement(Styles.InputWrapper, null,
            label.length > 0 && (React.createElement(Text, { htmlFor: id, type: "label" }, label)),
            React.createElement(Styles.InputFieldWrapper, { prefix: prefix, size: size },
                icon && !prefix && React.createElement(Styles.StyledIcon, null, icon),
                React.createElement(Styles.InputStyled, { disabled: disabled, hasError: hasError, maxLength: maxLength, id: id, name: name, onChange: onChange, onBlur: onBlur, onKeyUp: onKeyUp, prefix: prefix, placeholder: placeholder, type: type, size: size, value: value, ref: forwardedRef, required: required, "aria-required": required ? true : undefined, icon: icon })),
            help.length > 0 && (React.createElement(Styles.HelpTextWrapper, null,
                hasError && React.createElement(Warning, { size: "medium" }),
                React.createElement(Styles.HelpText, { type: "help", htmlFor: name, hasError: hasError }, help)))));
    }
}
Input.propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    required: PropTypes.bool,
    help: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    prefix: PropTypes.shape({
        text: PropTypes.string.isRequired,
        paddingLeft: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.node,
    forwardedRef: PropTypes.shape({ current: PropTypes.any }),
};
Input.defaultProps = {
    disabled: false,
    hasError: false,
    required: false,
    help: '',
    id: '',
    label: '',
    placeholder: '',
    size: 'regular',
    type: 'text',
    value: undefined,
    onBlur: () => { },
    onKeyUp: () => { },
    forwardedRef: undefined,
    prefix: null,
    maxLength: undefined,
    icon: undefined,
};
//# sourceMappingURL=Input.js.map