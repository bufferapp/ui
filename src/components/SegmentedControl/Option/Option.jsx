import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@bufferapp/ui';

import { OptionStyled, ContentWrapper, Label, IconWrapper } from './style';

/**
 * Option component for Segmented Control component.
 */
const Option = (props) => {
  const {
    selected,
    disabled,
    icon,
    label,
    value,
    optionType,
    iconPosition,
    size,
    tooltip,
    onClick,
  } = props;

  // Whether or not to attempt to render an icon
  const showIcon = optionType === 'icon' || optionType === 'textAndIcon';
  // Whether or not to render a label
  const showLabel = optionType === 'text' || optionType === 'textAndIcon';

  const tooltipMessage = useMemo(() => {
    // If tooltip message is provided, show it
    if (tooltip) return tooltip;
    // If no tooltip message is provided, but optionType is 'icon'
    // derive a tooltip message from the provided label
    if (optionType === 'icon') return `View ${label} only`;
  }, [optionType, tooltip, label]);

  const handleClick = () => {
    // Only run onClick callback if option is not disabled
    if (!disabled) onClick(value);
  };

  const renderContent = () => (
    <ContentWrapper iconPosition={iconPosition}>
      {icon && showIcon && (<IconWrapper>{icon}</IconWrapper>)}

      {label && showLabel && (
        <Label optionType={optionType} iconPosition={iconPosition}>
          {label}
        </Label>
      )}
    </ContentWrapper>
  );

  return (
    <OptionStyled
      selected={selected}
      disabled={disabled}
      size={size}
      onClick={handleClick}
      tabIndex='0'
    >
      {tooltipMessage ? (
        <Tooltip label={tooltipMessage}>
          {renderContent()}
        </Tooltip>
      ) : (
        renderContent()
      )}
    </OptionStyled>
  );
};

Option.propTypes = {
  /** Type of options. Options: text, icon, textAndIcon. */
  optionType: PropTypes.oneOf(['text', 'icon', 'textAndIcon']).isRequired,

  /** Size of control. Options: small, normal, large. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),

  /** It disables the option. </i> */
  disabled: PropTypes.bool,

  /** The title of the icon to pass to the Icon component */
  icon: PropTypes.node,

  /** The position of the icon relative to the label. Can be `top`, `right`, `bottom`, `left`. */
  iconPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /** The option label */
  label: PropTypes.string.isRequired,

  /** The option value */
  value: PropTypes.string.isRequired,

  /** Optional custom tooltip message to display on hover */
  tooltip: PropTypes.string,

  /** Whether the option is the selected one */
  selected: PropTypes.bool.isRequired,

  /** onClick callback function */
  onClick: PropTypes.func,
};

Option.defaultProps = {
  size: 'normal',
  disabled: false,
  icon: null,
  iconPosition: 'left',
  tooltip: '',
  onClick: () => null,
};

export default Option;
