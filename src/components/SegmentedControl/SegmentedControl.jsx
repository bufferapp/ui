import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Option from './Option';
import { Container } from './style';

/**
 * Segmented control used for quickly selecting between a small set of mutually exclusive options.
 * They work like a group of radio inputs in that no more than one may be selected at a time.
 * Segmented controls are useful for scenarios where there are only a few options.
 * If you need to present many options, consider using another component such as a Select.
 */
const SegmentedControl = (props) => {
  const {
    optionType,
    options,
    size,
  } = props;
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    // If one of the options has a default key,
    // select that option by default.
    const defaultOption = options.find(opt => opt.default)
    if (defaultOption) {
      setSelected(defaultOption.value)
      return
    }

    // Filter out all disabled options to find selected option
    const enabled = options.filter((opt) => !opt.disabled);
    if (enabled && enabled.length) {
      setSelected(enabled[0].value)
    }
  }, []);

  const handleClick = (val) => {
    // Only set selected again if a new value is selected
    // to avoid unnecessary re-renders
    if (selected !== val) setSelected(val)
  }

  return (
    <Container>
      {options.map(({ disabled, icon, label, value }, index) => (
        <Option
          key={`${value}-${index}`}
          disabled={disabled}
          icon={icon}
          label={label}
          value={value}
          optionType={optionType}
          size={size}
          selected={value === selected}
          onClick={handleClick}
        />
      ))}
    </Container>
  )
};

SegmentedControl.propTypes = {
  /** Size of control. Options: small, normal, large. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Type of options. Options: text, icon, textAndIcon. */
  optionType: PropTypes.oneOf(['text', 'icon', 'textAndIcon']).isRequired,
  /** Options to render and their properties. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Mark option as default option */
      default: PropTypes.bool,
      /** Mark option as disabled */
      disabled: PropTypes.bool,
      /** Icon node to render if optionType is icon or textAndIcon */
      icon: PropTypes.node,
      /** Text label to render on option */
      label: PropTypes.string,
      /** Value to be returned by selecting option */
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SegmentedControl.defaultProps = {
  size: 'normal',
};

export default SegmentedControl;
