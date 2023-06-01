var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { HelpTextWrapper, HelpText } from '../Input/style';
import { Warning } from '../Icon';
import { Container, StyledTextArea } from './style';
export default class TextArea extends React.Component {
    render() {
        const _a = this.props, { value, label, hasError, help, disabled, rows, onChange, id, fullHeight, forwardRef } = _a, props = __rest(_a, ["value", "label", "hasError", "help", "disabled", "rows", "onChange", "id", "fullHeight", "forwardRef"]);
        return (React.createElement(Container, null,
            React.createElement(Text, { htmlFor: id, type: "label" }, label),
            React.createElement(StyledTextArea, Object.assign({ id: id }, props, { hasError: hasError, disabled: disabled, rows: rows > 20 ? 20 : rows, value: value, onChange: onChange, fullHeight: fullHeight, ref: forwardRef })),
            hasError && (React.createElement(HelpTextWrapper, null,
                React.createElement(Warning, { size: "medium" }),
                React.createElement(HelpText, { type: "help", htmlFor: id, hasError: hasError }, help)))));
    }
}
TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
    id: PropTypes.string.isRequired,
    fullHeight: PropTypes.bool,
    forwardRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
};
TextArea.defaultProps = {
    placeholder: undefined,
    hasError: false,
    disabled: false,
    rows: 4,
    fullHeight: false,
    forwardRef: undefined,
};
//# sourceMappingURL=TextArea.js.map