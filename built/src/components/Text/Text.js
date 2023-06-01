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
import * as Styles from './style';
const Text = (_a) => {
    var { children, type } = _a, props = __rest(_a, ["children", "type"]);
    switch (type) {
        case 'h1':
            return React.createElement(Styles.H1, Object.assign({}, props), children);
        case 'h2':
            return React.createElement(Styles.H2, Object.assign({}, props), children);
        case 'h3':
            return React.createElement(Styles.H3, Object.assign({}, props), children);
        case 'p':
            return React.createElement(Styles.Paragraph, Object.assign({}, props), children);
        case 'label':
            return React.createElement(Styles.Label, Object.assign({}, props), children);
        case 'help':
            return React.createElement(Styles.Help, Object.assign({}, props), children);
        default:
            return React.createElement(Styles.Span, null, children);
    }
};
Text.propTypes = {
    children: PropTypes.node,
    hasError: PropTypes.bool,
    htmlFor: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    as: PropTypes.string,
};
Text.defaultProps = {
    children: undefined,
    hasError: false,
    htmlFor: undefined,
    color: 'grayDarker',
    type: 'span',
};
export default Text;
//# sourceMappingURL=Text.js.map