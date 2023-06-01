import React from 'react';
import PropTypes from 'prop-types';
import helper from 'immutability-helper';
import SearchIcon from '../Icon/Icons/Search';
import { Wrapper, SelectStyled, SelectItems, SelectItemDivider, SearchBarWrapper, NoMatchesContainer, CustomItemContainer, SelectItemDividerTitle, } from './style';
import SelectItem from './SelectItem/SelectItem';
import Button from '../Button/Button';
import { ButtonSelect } from '../Button/style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Search from '../Search/Search';
export default class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: this.props.isOpen,
            items: this.props.items || [],
            selectedItems: this.props.items || [],
            isFiltering: false,
            searchValue: '',
            isCustomItemFocused: false,
        };
        this.filterOnMenuOpen = () => {
            if (this.searchInput)
                this.searchInput.updateSearch(this.state.searchValue);
            this.onSearchChange(this.state.searchValue);
        };
        this.clearSearchOnMenuClose = () => {
            if (this.searchInput)
                this.searchInput.updateSearch('');
            this.onSearchChange('');
        };
        this.keyDownPressed = (e) => {
            const { shortcutsEnabled, hotKeys } = this.props;
            if (!shortcutsEnabled)
                return;
            if (hotKeys) {
                hotKeys.forEach((item) => {
                    if (e.which === item.hotKey) {
                        item.onKeyPress();
                    }
                });
            }
            switch (e.which) {
                case 40:
                    return this.handleKeyPress(e, this.onMoveDown);
                case 38:
                    return this.handleKeyPress(e, this.onMoveUp);
                case 13:
                    return this.handleKeyPress(e, this.onAddItem);
                case 27:
                    return this.handleKeyPress(e, this.onClose);
                default:
                    return null;
            }
        };
        this.handleKeyPress = (event, keyHandler) => {
            event.preventDefault();
            event.stopPropagation();
            keyHandler(event);
        };
        this.closePopover = (e) => {
            if (this.selectNode && this.selectNode.contains(e.target)) {
                return;
            }
            const { isOpen } = this.state;
            if (isOpen) {
                this.setState({
                    isOpen: false,
                    hoveredItem: undefined,
                });
            }
        };
        this.updateItemsInState = (items, option, index) => index > -1
            ? helper(items, {
                [index]: {
                    selected: { $set: !option.selected },
                },
            })
            : items;
        this.handleSelectOption = (option, event) => {
            const { onSelectClick, multiSelect } = this.props;
            const { items } = this.state;
            onSelectClick && onSelectClick(option, event);
            const selectedIndex = items.findIndex((x) => x.selected === true);
            const deselectItems = !multiSelect && selectedIndex > -1
                ? helper(items, {
                    [selectedIndex]: {
                        selected: { $set: false },
                    },
                })
                : items;
            const optionIndex = deselectItems.findIndex((x) => this.getItemId(x) === this.getItemId(option));
            this.setState({
                isOpen: multiSelect,
                items: this.updateItemsInState(deselectItems, option, optionIndex),
                selectedItems: this.updateItemsInState(deselectItems, option, optionIndex),
            });
        };
        this.onClick = (e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.isSplit && !this.props.disabled) {
                this.onButtonClick(e);
            }
        };
        this.onKeyUp = (e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            if (this.props.isSplit && !this.props.disabled) {
                const altPlusUp = e.altKey && ['Up', 'ArrowUp'].indexOf(e.key) >= 0;
                const altPlusDown = e.altKey && ['Down', 'ArrowDown'].indexOf(e.key) >= 0;
                const space = ['Space', ' '].indexOf(e.key) >= 0;
                const enter = ['Enter'].indexOf(e.key) >= 0;
                if (altPlusUp || altPlusDown || space || enter) {
                    e.preventDefault();
                    this.onButtonClick(e);
                }
            }
        };
        this.onButtonClick = () => {
            const { isOpen } = this.state;
            const { isInputSearch, items } = this.props;
            this.setState({
                isOpen: !isOpen,
                items,
            }, () => {
                !isInputSearch && !isOpen && this.selectNode && this.selectNode.focus();
                this.scrollToItem(this.itemsNode, document.getElementById(this.getItemId(items[0])));
            });
        };
        this.onMoveUp = () => {
            const { items, isCustomItemFocused, hoveredItem } = this.state;
            const itemsLength = items.length;
            for (let i = hoveredItem - 1; i < itemsLength && itemsLength > 0 && i >= 0; i -= 1) {
                if (items[i]) {
                    this.setState({ hoveredItem: i % itemsLength });
                    this.scrollToItem(this.itemsNode, document.getElementById(this.getItemId(items[i])));
                    break;
                }
            }
            if (isCustomItemFocused) {
                this.setState({ isCustomItemFocused: false });
            }
        };
        this.onMoveDown = () => {
            const { items, hoveredItem } = this.state;
            const { hasCustomAction } = this.props;
            const itemsLength = items.length;
            if (itemsLength === 0 && hasCustomAction) {
                this.setState({ isCustomItemFocused: true });
            }
            if (!hoveredItem) {
                this.setState({
                    hoveredItem: 0,
                }, () => this.updateHoveredItemPosition(hoveredItem, itemsLength, items));
            }
            else {
                this.updateHoveredItemPosition(hoveredItem, itemsLength, items);
            }
        };
        this.onAddItem = (event) => {
            const { multiSelect } = this.props;
            const { items, hoveredItem, isCustomItemFocused, searchValue } = this.state;
            const selectedItem = items[hoveredItem];
            if (isCustomItemFocused) {
                this.props.onCustomItemClick(searchValue);
                this.setState({ isCustomItemFocused: false, isOpen: multiSelect });
            }
            if (selectedItem) {
                selectedItem.onItemClick
                    ? this.handleSelectOption(selectedItem, selectedItem.onItemClick)
                    : this.handleSelectOption(selectedItem, event);
            }
        };
        this.updateHoveredItemPosition = (hoveredItem, itemsLength, items) => {
            for (let i = hoveredItem + 1; i <= itemsLength && itemsLength > 0 && i > 0; i += 1) {
                if (i === itemsLength) {
                    this.setState({ hoveredItem: 0 });
                    this.scrollToItem(this.itemsNode, document.getElementById(this.getItemId(items[i])));
                    break;
                }
                if (items[i]) {
                    this.setState({ hoveredItem: i % itemsLength });
                    this.scrollToItem(this.itemsNode, document.getElementById(this.getItemId(items[i])));
                    break;
                }
            }
        };
        this.scrollToItem = (parent, child) => {
            if (!parent || !child)
                return;
            const parentRect = parent.getBoundingClientRect();
            const parentViewableArea = {
                height: parent.clientHeight,
                width: parent.clientWidth,
            };
            const childRect = child.getBoundingClientRect();
            const isViewable = childRect.top >= parentRect.top &&
                childRect.top <= parentRect.top + parentViewableArea.height;
            if (!isViewable) {
                parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
            }
        };
        this.findItemInState = (item) => {
            const { selectedItems } = this.state;
            return selectedItems.find((x) => this.getItemId(x) === this.getItemId(item));
        };
        this.onSearchChange = (searchValue) => {
            const { items, keyMap } = this.props;
            const searchField = keyMap ? keyMap.title : 'title';
            const isFiltering = !!searchValue;
            const { startingWith, including } = items.reduce((filtered, item) => {
                const hideItemWhileSearching = isFiltering && !!item.hideOnSearch;
                if (hideItemWhileSearching)
                    return filtered;
                if (item[searchField].toLowerCase().startsWith(searchValue.toLowerCase())) {
                    return Object.assign(Object.assign({}, filtered), { startingWith: [
                            ...filtered.startingWith,
                            Object.assign(Object.assign({}, item), { selected: this.findItemInState(item) &&
                                    this.findItemInState(item).selected }),
                        ] });
                }
                if (item[searchField].toLowerCase().includes(searchValue.toLowerCase())) {
                    return Object.assign(Object.assign({}, filtered), { including: [
                            ...filtered.including,
                            Object.assign(Object.assign({}, item), { selected: this.findItemInState(item) &&
                                    this.findItemInState(item).selected }),
                        ] });
                }
                return Object.assign({}, filtered);
            }, { startingWith: [], including: [] });
            const arrayFinal = [...startingWith, ...including];
            this.setState({
                items: arrayFinal,
                isFiltering,
                searchValue,
            });
        };
        this.onClose = () => {
            const { onClose } = this.props;
            this.setState({
                isOpen: false,
                isFiltering: false,
                hoveredItem: 0,
            }, onClose && onClose());
        };
        this.getItemId = (item) => {
            if (!item)
                return;
            const { keyMap } = this.props;
            return item[keyMap && keyMap.id ? keyMap.id : 'id'];
        };
        this.renderSelectButton = () => {
            const { isSplit, customButton, type, size, disabled, icon, label, hasIconOnly, fullWidth, isInputSearch, textToLeft, } = this.props;
            const { items } = this.state;
            if (isSplit) {
                return (React.createElement(ButtonSelect, { type: type, size: size, disabled: disabled, onClick: !disabled ? this.onButtonClick : undefined },
                    React.createElement(ChevronDown, { color: type === 'primary' && !disabled ? 'white' : 'grayDark' })));
            }
            if (customButton && isInputSearch) {
                return customButton(this.onButtonClick, this.onSearchChange);
            }
            if (customButton) {
                return customButton(this.onButtonClick, null, this.state.isOpen);
            }
            if (hasIconOnly) {
                return (React.createElement(Button, { type: "text", icon: icon, hasIconOnly: true, onClick: this.onButtonClick, label: "Click Me" }));
            }
            return (React.createElement(Button, { size: size, items: items, disabled: disabled, type: type, label: label, icon: icon, onClick: this.onButtonClick, isSelect: true, fullWidth: fullWidth, textToLeft: textToLeft }));
        };
        this.renderCustomActionItem = (length, onCustomItemClick, customItemLabel) => {
            if (length === 0) {
                return (React.createElement(CustomItemContainer, { isCustomItemFocused: this.state.isCustomItemFocused, onClick: () => onCustomItemClick(this.state.searchValue) }, `${customItemLabel} ${this.state.searchValue}`));
            }
        };
        this.renderNoItems = (hideSearch, length, isInputSearch, noResultsCustomMessage) => {
            if (length === 0 && (!hideSearch || isInputSearch)) {
                return React.createElement(NoMatchesContainer, null, noResultsCustomMessage);
            }
        };
        this.renderSelectPopup = () => {
            const { xPosition, yPosition, horizontalOffset, hideSearch, keyMap, searchPlaceholder, hasIconOnly, marginTop, multiSelect, hasCustomAction, onCustomItemClick, customItemLabel, fullWidth, capitalizeItemLabel, isInputSearch, selectPopupVisible, noResultsCustomMessage, searchInputProps, } = this.props;
            const { isOpen, hoveredItem, items, isFiltering } = this.state;
            return (React.createElement(SelectStyled, { isOpen: isOpen || selectPopupVisible, xPosition: xPosition, yPosition: yPosition, hasIconOnly: hasIconOnly, marginTop: marginTop, fullWidth: fullWidth, horizontalOffset: horizontalOffset },
                !hideSearch && (items.length > 5 || isFiltering) && (React.createElement(SearchBarWrapper, { id: "searchInput", ref: (node) => (this.searchInputNode = node) },
                    React.createElement(SearchIcon, null),
                    React.createElement(Search, Object.assign({ ref: (node) => (this.searchInput = node), onChange: this.onSearchChange, placeholder: searchPlaceholder, isOpen: isOpen }, searchInputProps)))),
                React.createElement(SelectItems, { ref: (itemsNode) => (this.itemsNode = itemsNode) },
                    hasCustomAction
                        ? this.renderCustomActionItem(items.length, onCustomItemClick, customItemLabel)
                        : this.renderNoItems(hideSearch, items.length, isInputSearch, noResultsCustomMessage),
                    items.map((item, idx) => [
                        item.hasDivider && (React.createElement(SelectItemDivider, { key: `${this.getItemId(item)}--divider` }, item.dividerTitle && (React.createElement(SelectItemDividerTitle, null, item.dividerTitle)))),
                        React.createElement(SelectItem, { hovered: hoveredItem === idx, key: this.getItemId(item) + idx, getItemId: this.getItemId, item: item, capitalizeItemLabel: capitalizeItemLabel, keyMap: keyMap, hasSelectedItems: items.some((i) => i.selected), onClick: (event) => this.handleSelectOption(item, event), onItemClick: () => this.handleSelectOption(item, item.onItemClick), hideSearch: hideSearch, multiSelect: multiSelect }),
                    ]))));
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.items &&
            !Select.sameItems(props.items, state.items) &&
            !state.isFiltering) {
            return { items: props.items, selectedItems: props.items };
        }
        return null;
    }
    componentDidMount() {
        document.addEventListener('click', this.closePopover, true);
        this.selectNode &&
            this.selectNode.addEventListener('keydown', this.keyDownPressed);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.props.isOpen && this.onButtonClick();
        }
        if (prevState.isOpen !== this.state.isOpen &&
            this.state.isOpen &&
            this.props.onOpen) {
            this.props.onOpen();
        }
        const menuIsOpening = !prevState.isOpen && !!this.state.isOpen;
        const shouldFilterOnMenuOpen = !this.props.clearSearchOnBlur && !!this.state.searchValue;
        if (menuIsOpening && shouldFilterOnMenuOpen)
            this.filterOnMenuOpen();
        const menuIsClosing = !!prevState.isOpen && !this.state.isOpen;
        if (menuIsClosing && this.props.clearSearchOnBlur)
            this.clearSearchOnMenuClose();
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.closePopover, true);
        this.selectNode &&
            this.selectNode.removeEventListener('keydown', this.keyDownPressed);
    }
    render() {
        const { isSplit, tooltip, disabled, fullWidth } = this.props;
        return (React.createElement(Wrapper, { role: "button", onClick: (e) => this.onClick(e), onKeyUp: (e) => this.onKeyUp(e), tabIndex: 0, isSplit: isSplit, ref: (selectNode) => (this.selectNode = selectNode), "data-tip": disabled ? '' : tooltip, fullWidth: fullWidth, "aria-haspopup": "true", "aria-expanded": this.state.isOpen },
            this.renderSelectButton(),
            this.renderSelectPopup()));
    }
}
Select.sameItems = (itemsA, itemsB) => itemsA.length === itemsB.length &&
    itemsA.every((el, ix) => el &&
        itemsB[ix] &&
        el.id === itemsB[ix].id &&
        el.title === itemsB[ix].title &&
        el.selected === itemsB[ix].selected &&
        el.disabled === itemsB[ix].disabled);
Select.propTypes = {
    disabled: PropTypes.bool,
    onSelectClick: PropTypes.func,
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        hideOnSearch: PropTypes.bool,
    })).isRequired,
    isSplit: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'large', 'medium']),
    xPosition: PropTypes.oneOf(['right', 'left']),
    yPosition: PropTypes.oneOf(['top', 'bottom']),
    horizontalOffset: PropTypes.string,
    icon: PropTypes.node,
    hideSearch: PropTypes.bool,
    customButton: PropTypes.func,
    keyMap: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    }),
    multiSelect: PropTypes.bool,
    shortcutsEnabled: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    tooltip: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    hasIconOnly: PropTypes.bool,
    marginTop: PropTypes.string,
    hasCustomAction: PropTypes.bool,
    onCustomItemClick: PropTypes.func,
    customItemLabel: PropTypes.string,
    hotKeys: PropTypes.arrayOf(PropTypes.shape({
        hotKey: PropTypes.number,
        onKeyPress: PropTypes.func,
    })),
    fullWidth: PropTypes.bool,
    capitalizeItemLabel: PropTypes.bool,
    isInputSearch: PropTypes.bool,
    selectPopupVisible: PropTypes.bool,
    noResultsCustomMessage: PropTypes.string,
    clearSearchOnBlur: PropTypes.bool,
    searchInputProps: PropTypes.shape({}),
    textToLeft: PropTypes.bool,
    onOpen: PropTypes.func,
};
Select.defaultProps = {
    label: '',
    isSplit: false,
    type: 'secondary',
    size: 'medium',
    xPosition: 'left',
    yPosition: 'bottom',
    horizontalOffset: undefined,
    disabled: undefined,
    icon: undefined,
    hideSearch: false,
    customButton: undefined,
    onSelectClick: undefined,
    keyMap: undefined,
    multiSelect: false,
    shortcutsEnabled: true,
    searchPlaceholder: 'Search',
    tooltip: undefined,
    isOpen: false,
    onClose: undefined,
    hasIconOnly: false,
    marginTop: undefined,
    hasCustomAction: false,
    onCustomItemClick: undefined,
    customItemLabel: undefined,
    hotKeys: undefined,
    fullWidth: undefined,
    capitalizeItemLabel: true,
    isInputSearch: false,
    selectPopupVisible: false,
    noResultsCustomMessage: 'No matches found',
    clearSearchOnBlur: false,
    searchInputProps: {
        clearSearchOnBlur: true,
    },
    textToLeft: false,
    onOpen: null,
};
//# sourceMappingURL=Select.js.map