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
    value,
    disabled,
    onChange,
  } = props;
  const controlled = typeof value !== 'undefined' && value !== null;

  const getDefaultValue = () => {
    // If component is disabled, don't select any value
    if (disabled) return;

    // If component is controlled, return the provided value
    if (controlled) return value;

    // If any of the options have a default key,
    // select the first one as the default.
    const defaultOption = options.find(opt => opt.default);
    if (defaultOption) return defaultOption.value;

    // If no options have a default key,
    // select first non-disabled option by default
    const enabled = options.find((opt) => !opt.disabled);
    if (enabled) return enabled.value;
  };

  const [selected, setSelected] = useState(getDefaultValue());

  // If component is controlled, update selected option
  // every time a new value prop is received
  useEffect(() => {
    if (controlled && value !== selected) {
      setSelected(value);
    }
  }, [value]);

  const handleChange = (val) => {
    // If controlled, run provided onChange
    if (controlled) onChange(val);
    // Only update if value changes
    else if (selected !== val) setSelected(val);
  };

  return (
    <Container disabled={disabled}>
      {options.map(({ disabled: optionDisabled, icon, label, value: optionValue, tooltip }, index) => (
        <Option
          key={`${optionValue}-${index}`}
          disabled={disabled || optionDisabled} // If entire component is disabled, set all options to disabled
          icon={icon}
          label={label}
          value={optionValue}
          optionType={optionType}
          size={size}
          selected={optionValue === selected}
          tooltip={tooltip}
          onClick={handleChange}
        />
      ))}
    </Container>
  );
};

SegmentedControl.propTypes = {
  /** Size of control. Can be `small`, `normal`, `large`. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),

  /** Type of options. Can be `text`, `icon`, `textAndIcon`. */
  optionType: PropTypes.oneOf(['text', 'icon', 'textAndIcon']).isRequired,

  /** The current option selected when controlled */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),

  /** Function called when the value changes. */
  onChange: PropTypes.func,

  /** If `true`, the entire component is disabled. Defaults to `false`. */
  disabled: PropTypes.bool,

  /**
   * Array of options with the following properties:
   * <pre>
   * {
   *   // Set as selected option by default.
   *   // Default is `false`.
   *   **default: _(bool, optional)_**,
   *   // Option is disabled.
   *   // Default is `false`.
   *   **disabled: _(bool, optional)_**,
   *   // Icon to display
   *   **icon: _(node, optional)_**,
   *   // Programmatic value
   *   **value: _(string | number | bool, required)_**,
   *   // Display version of value
   *   **label: _(string, required)_**,
   *   // If options are only 'icon', optionally
   *   // pass a custom tooltip message.
   *   // Defaults to  "View {label} only".
   *   **tooltip: _(string, optional)_**,
   * }
   * </pre>
   * */
  options: PropTypes.arrayOf(
    PropTypes.exact({
      /** Mark option as default option */
      default: PropTypes.bool,

      /** Mark option as disabled */
      disabled: PropTypes.bool,

      /** Icon node to render if optionType is 'icon' or 'textAndIcon' */
      icon: PropTypes.node,

      /** Value to be returned by selecting option */
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired,

      /** Text label to render on option */
      label: PropTypes.string.isRequired,

      /** Tooltip message to display if `optionType` is set to `icon` only */
      tooltip: PropTypes.string,
    }),
  ).isRequired,
};

SegmentedControl.defaultProps = {
  size: 'normal',
  value: null,
  disabled: false,
  onChange: () => null,
};

export default SegmentedControl;
