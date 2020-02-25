import React from 'react';
import PropTypes from 'prop-types';

import {
  LinkStyled,
} from './style';

const Link = ({
  children,
  url,
  newTab,
}) => (
  <LinkStyled href={url} target={newTab ? '_blank' : '_self'} rel='noopener'>
    {children}
  </LinkStyled>
);

Link.propTypes = {
  /** Linkable content */
  children: PropTypes.node.isRequired,
  /** Url to navigate to */
  url: PropTypes.string.isRequired,
  /** Opens new tab */
  newTab: PropTypes.bool,
};

Link.defaultProps = {
  newTab: false,
};

export default Link;
