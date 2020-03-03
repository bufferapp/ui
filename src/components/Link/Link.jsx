import React from 'react';
import PropTypes from 'prop-types';

import { LinkStyled } from './style';

const Link = ({ children, href, newTab, download, className, title }) => (
  <LinkStyled
    href={href}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
    download={download}
    className={className}
    title={title}
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
  /** Class passed by the DOM element. */
  className: PropTypes.string,
  /** Title of the link. */
  title: PropTypes.string,
};

Link.defaultProps = {
  newTab: false,
  download: false,
  className: undefined,
  title: '',
};

export default Link;
