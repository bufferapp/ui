import React from 'react'
import PropTypes from 'prop-types'

import { LinkStyled } from './style'
import { fontWeightMedium } from '../style/fonts'

const Link = ({
  children,
  href,
  newTab,
  download,
  className,
  title,
  fontWeight,
}) => (
  <LinkStyled
    href={href}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
    download={download}
    className={className}
    title={title}
    fontWeight={fontWeight}
  >
    {children}
  </LinkStyled>
)

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
  /** Font weight of the link. */
  fontWeight: PropTypes.oneOf([500, 700]),
}

Link.defaultProps = {
  newTab: false,
  download: false,
  className: undefined,
  title: '',
  fontWeight: fontWeightMedium,
}

export default Link
