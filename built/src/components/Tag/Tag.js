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
const Tag = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(Styles.Tag, Object.assign({}, props), children));
};
Tag.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    textColor: PropTypes.string,
};
Tag.defaultProps = {
    color: 'green',
    textColor: 'white',
};
export default Tag;
//# sourceMappingURL=Tag.js.map