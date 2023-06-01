import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../Tooltip';
import { OptionStyled, ContentWrapper, Label, IconWrapper } from './style';
const Option = (props) => {
    const { selected, disabled, icon, label, value, optionType, iconPosition, size, tooltip, onClick, } = props;
    const showIcon = optionType === 'icon' || optionType === 'textAndIcon';
    const showLabel = optionType === 'text' || optionType === 'textAndIcon';
    const tooltipMessage = useMemo(() => {
        if (tooltip)
            return tooltip;
        if (optionType === 'icon')
            return `View ${label} only`;
    }, [optionType, tooltip, label]);
    const handleClick = () => {
        if (!disabled)
            onClick(value);
    };
    const renderContent = () => (React.createElement(ContentWrapper, { iconPosition: iconPosition },
        icon && showIcon && React.createElement(IconWrapper, null, icon),
        label && showLabel && (React.createElement(Label, { optionType: optionType, iconPosition: iconPosition }, label))));
    return (React.createElement(OptionStyled, { selected: !disabled && selected, "aria-pressed": !disabled && selected, disabled: disabled, size: size, onClick: handleClick, tabIndex: "0", role: "button" }, tooltipMessage ? (React.createElement(Tooltip, { label: tooltipMessage }, renderContent())) : (renderContent())));
};
Option.propTypes = {
    optionType: PropTypes.oneOf(['text', 'icon', 'textAndIcon']).isRequired,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]).isRequired,
    tooltip: PropTypes.string,
    selected: PropTypes.bool.isRequired,
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
//# sourceMappingURL=Option.js.map