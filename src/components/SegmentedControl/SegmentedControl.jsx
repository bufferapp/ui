import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import { Container } from './style';

/**
 * Segmented control used for quickly selecting between a small set of mutually exclusive options.
 * They work like a group of radio inputs in that no more than one may be selected at a time.
 * Segmented controls are useful for scenarios where there are only a few options.
 * If you need to present many options, consider using another component such as a Select.
 */
const SegmentedControl = ({ children }) => (
  <Container role='group'>
    {children}
  </Container>
);

SegmentedControl.propTypes = {
  children: PropTypes.node.isRequired,
};

SegmentedControl.defaultProps = {};

SegmentedControl.Option = Option;

export default SegmentedControl;
