import React from 'react';
import PropTypes from 'prop-types';

import { LinkStyled } from './style';

const Link = ({ children, href, newTab, download, className }) => (
  <LinkStyled
    href={href}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
    download={download}
    className={className}
  >
    {children}
  </LinkStyled>
);

Link.propTypes = {
  /** Linkable content. */
  children: PropTypes.node.isRequired,
  /** Url to navigate to. */
  href: PropTypes.string.isRequired,
  /** Opens new tab. */
  newTab: PropTypes.bool,
  /** Saves the linked URL instead of navigating to it. */
  download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** class passed by the dom element */
  className: PropTypes.string,
};

Link.defaultProps = {
  newTab: false,
  download: false,
  className: undefined,
};

export default Link;
