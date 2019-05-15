import React from 'react';

import PropTypes from 'prop-types';
import * as Styles from './style';

const Text = ({ children, type, ...props }) => {
  switch (type) {
    case 'h1':
      return <Styles.H1>{children}</Styles.H1>;
    case 'h2':
      return <Styles.H2>{children}</Styles.H2>;
    case 'h3':
      return <Styles.H3>{children}</Styles.H3>;
    case 'p':
      return <Styles.Paragraph>{children}</Styles.Paragraph>;
    case 'label':
      return <Styles.Label {...props}>{children}</Styles.Label>;
    case 'help':
      return <Styles.Help {...props}>{children}</Styles.Help>;
    default:
      return <Styles.Span>{children}</Styles.Span>;
  }
};

Text.propTypes = {
  /** The actual text content. */
  children: PropTypes.node,
  /** It changes the color of the text to red. <br><i>This is only used for `help`</i>. */
  hasError: PropTypes.bool,
  /** It's the name of the input it refers to. <br><i>This is only used for `label`.</i> */
  htmlFor: PropTypes.string,
  /** It change the color of the text. <br><i>This is only used for `label`</i>. */
  color: PropTypes.string,
  /** The type can be: `h1`, `h2`, `h3`, `p`, `label`, `help`. <br><i>If omitted will return a `span`</i> */
  type: PropTypes.string,
};

Text.defaultProps = {
  children: undefined,
  hasError: false,
  htmlFor: undefined,
  color: '#3D3D3D',
  type: 'span',
};

export default Text;
