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
import styled from 'styled-components';
import * as styles from './style';
const StyledIcon = styled.svg `
  ${styles.base};
  ${(props) => styles[props.size]};
  vertical-align: ${(props) => props.verticalAlign ? props.verticalAlign : null};
`;
const Icon = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(StyledIcon, Object.assign({}, props),
        React.createElement("title", null, props.title),
        children));
};
Icon.propTypes = {
    size: PropTypes.oneOf(['small', 'smedium', 'medium', 'large', 'extraLarge']),
    verticalAlign: PropTypes.string,
    title: PropTypes.string,
};
Icon.defaultProps = {
    size: 'medium',
    verticalAlign: '',
    title: '',
};
export default Icon;
//# sourceMappingURL=Icon.js.map