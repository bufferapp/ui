import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import { Container } from './style';

const SegmentedControl = ({ options }) => (
  <Container>
    {options.map(({ icon, label }) => (
      <Option
        label={label}
        icon={icon}
      />
    ))}
  </Container>
);

const iconOnlyType = PropTypes.shape({
  icon: PropTypes.node.isRequired,
});

const labelOnlyType = PropTypes.shape({
  label: PropTypes.string.isRequired,
});

const iconAndLabelType = PropTypes.shape({
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
});

SegmentedControl.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      iconOnlyType,
      labelOnlyType,
      iconAndLabelType,
    ])
  ).isRequired,
};

SegmentedControl.defaultProps = {};

export default SegmentedControl;
