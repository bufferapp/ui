import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyled } from './style';
import { fontWeightMedium } from '../style/fonts';
const Link = ({ children, href, newTab, download, className, title, fontWeight, }) => (React.createElement(LinkStyled, { href: href, target: newTab ? '_blank' : '_self', rel: newTab ? 'noopener noreferrer' : undefined, download: download, className: className, title: title, fontWeight: fontWeight }, children));
Link.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    className: PropTypes.string,
    title: PropTypes.string,
    fontWeight: PropTypes.oneOf([500, 700]),
};
Link.defaultProps = {
    newTab: false,
    download: false,
    className: undefined,
    title: '',
    fontWeight: fontWeightMedium,
};
export default Link;
//# sourceMappingURL=Link.js.map