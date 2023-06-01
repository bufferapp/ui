import React from 'react';
import PropTypes from 'prop-types';
import { Checkmark } from '../../Icon';
import Tooltip from '../../Tooltip';
import { SelectItemStyled, SelectItemLabel, SelectItemIcon, SelectItemTitle, SelectItemCustom, IconWrapper, HotKeyPrompt, Title, } from './style';
const shouldItemMoveRight = (item, hasSelectedItems, hideSearch) => !item.selected &&
    (hasSelectedItems || !hideSearch) &&
    !(item.component && !hasSelectedItems);
const SelectItemTooltipWrapper = (props) => {
    const { item, keyMap } = props;
    const tooltip = item[keyMap ? keyMap.tooltip : 'tooltip'];
    return (React.createElement(React.Fragment, null, tooltip ? (React.createElement(Tooltip, { label: tooltip, position: "bottom" },
        React.createElement(SelectItem, Object.assign({}, props)))) : (React.createElement(SelectItem, Object.assign({}, props)))));
};
const SelectItem = ({ item, onClick, hovered, keyMap, hasSelectedItems, getItemId, hideSearch, capitalizeItemLabel, onItemClick, }) => {
    const tooltip = item[keyMap ? keyMap.tooltip : 'tooltip'];
    let title = item[keyMap ? keyMap.title : 'title'];
    if (tooltip)
        title = null;
    return (React.createElement(SelectItemStyled, { onClick: onItemClick || onClick, hovered: hovered, id: getItemId(item), disabled: item.disabled },
        React.createElement(SelectItemLabel, { capitalizeItemLabel: capitalizeItemLabel, hideSearch: hideSearch, hasSelectedItems: hasSelectedItems, hasComponent: item.component },
            item.selected && (React.createElement(IconWrapper, null,
                React.createElement(Checkmark, { color: "grayDarker" }))),
            !item.iconEnd && item.icon && (React.createElement(SelectItemIcon, { iconEnd: item.iconEnd, hovered: hovered }, item.icon)),
            React.createElement(SelectItemTitle, { moveRight: shouldItemMoveRight(item, hasSelectedItems, hideSearch), title: title },
                item.component && (React.createElement(IconWrapper, { custom: true },
                    React.createElement(SelectItemCustom, { dangerouslySetInnerHTML: { __html: item.component(item) } }))),
                React.createElement(Title, null, item[keyMap ? keyMap.title : 'title'])),
            item.iconEnd && item.icon && (React.createElement(SelectItemIcon, { iconEnd: item.iconEnd, hovered: hovered }, item.icon)),
            item.hotKeyPrompt && (React.createElement(HotKeyPrompt, { hovered: hovered }, item.hotKeyPrompt)))));
};
SelectItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        onItemClick: PropTypes.func,
        selected: PropTypes.bool,
        icon: PropTypes.node,
        iconEnd: PropTypes.bool,
        component: PropTypes.func,
        tooltip: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    getItemId: PropTypes.func.isRequired,
    hovered: PropTypes.bool,
    capitalizeItemLabel: PropTypes.bool,
    keyMap: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    }),
    hasSelectedItems: PropTypes.bool,
    hideSearch: PropTypes.bool,
    multiSelect: PropTypes.bool,
};
SelectItem.defaultProps = {
    hovered: undefined,
    keyMap: undefined,
    hasSelectedItems: undefined,
    hideSearch: undefined,
    multiSelect: undefined,
    capitalizeItemLabel: true,
};
export default SelectItemTooltipWrapper;
//# sourceMappingURL=SelectItem.js.map