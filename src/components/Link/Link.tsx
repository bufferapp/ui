import React from 'react'
import PropTypes from 'prop-types'

import { LinkStyled } from './style'
import { fontWeightMedium } from '../style/fonts'

const Link = ({
  // @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
  children,
  // @ts-expect-error TS(7031) FIXME: Binding element 'href' implicitly has an 'any' typ... Remove this comment to see the full error message
  href,
  // @ts-expect-error TS(7031) FIXME: Binding element 'newTab' implicitly has an 'any' t... Remove this comment to see the full error message
  newTab,
  // @ts-expect-error TS(7031) FIXME: Binding element 'download' implicitly has an 'any'... Remove this comment to see the full error message
  download,
  // @ts-expect-error TS(7031) FIXME: Binding element 'className' implicitly has an 'any... Remove this comment to see the full error message
  className,
  // @ts-expect-error TS(7031) FIXME: Binding element 'title' implicitly has an 'any' ty... Remove this comment to see the full error message
  title,
  // @ts-expect-error TS(7031) FIXME: Binding element 'fontWeight' implicitly has an 'an... Remove this comment to see the full error message
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
