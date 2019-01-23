/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { includes, some } from 'lodash';
import helper from 'immutability-helper';
import {
  Wrapper,
  SelectStyled,
  SelectItems,
  Arrow,
  SelectItemDivider,
} from './style';
import SelectItem from './SelectItem/SelectItem';
import Button from '../Button/Button';
import { ButtonSelect } from '../Button/style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Search from '../Search/Search';

/** Select component that opens a popup menu on click and displays items that can be selected */
export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: props.items,
    };
  }

  componentDidMount() {
    // When the selector is open and users click anywhere on the page,
    // the selector should close
    // Set capture to true so an open select will close when another select gets opened
    document.addEventListener('click', this.closePopover, true);

    // catch the keypress to move the selected items up or down
    this.selectNode &&
      this.selectNode.addEventListener('keydown', this.keyDownPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover, true);
    this.selectNode &&
      this.selectNode.removeEventListener('keydown', this.keyDownPressed);
  }

  keyDownPressed = e => {
    const { shortcutsEnabled } = this.props;
    if (!shortcutsEnabled) return;

    switch (e.which) {
      case 40: // Arrow down
        return this.handleKeyPress(e, this.onMoveDown);
      case 38: // Arrow up
        return this.handleKeyPress(e, this.onMoveUp);
      case 13: // Enter
        return this.handleKeyPress(e, this.onAddItem);
      case 27: // Esc
        return this.handleKeyPress(e, this.onClose);
      default:
        return null;
    }
  };

  handleKeyPress = (event, keyHandler) => {
    event.preventDefault();
    event.stopPropagation();
    keyHandler();
  };

  // Close the popover
  closePopover = e => {
    if (this.searchInputNode && this.searchInputNode.contains(e.target)) return;
    const { isOpen } = this.state;

    if (isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  handleSelectOption = (option, event) => {
    const { onSelectClick, multiSelect } = this.props;
    const { items } = this.state;
    onSelectClick(option, event);

    const selectedIndex = items.findIndex(x => x.selected === true);

    const deselectItems =
      !multiSelect && selectedIndex > -1
        ? helper(items, {
            [selectedIndex]: {
              selected: { $set: false },
            },
          })
        : items;

    const optionIndex = deselectItems.findIndex(x => x.id === option.id);

    this.setState({
      isOpen: multiSelect,
      items:
        optionIndex > -1
          ? helper(deselectItems, {
              [optionIndex]: {
                selected: { $set: !option.selected },
              },
            })
          : items,
    });
  };

  onClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  onButtonClick = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  onMoveUp = () => {
    const { items } = this.state;
    const { hoveredItem } = this.state;
    const itemsLength = items.length;

    for (
      let i = hoveredItem - 1;
      i < itemsLength && itemsLength > 0 && i >= 0;
      i -= 1
    ) {
      if (items[i]) {
        this.setState({ hoveredItem: i % itemsLength });
        break;
      }
    }
  };

  onMoveDown = () => {
    const { items } = this.state;
    const { hoveredItem } = this.state;
    const itemsLength = items.length;

    if (!hoveredItem) {
      this.setState(
        {
          hoveredItem: 0,
        },
        () => this.updateHoveredItemPosition(hoveredItem, itemsLength, items)
      );
    } else {
      this.updateHoveredItemPosition(hoveredItem, itemsLength, items);
    }
  };

  onAddItem = () => {
    const { onSelectClick } = this.props;
    const { items, hoveredItem } = this.state;
    onSelectClick(items[hoveredItem]);
  };

  updateHoveredItemPosition = (hoveredItem, itemsLength, items) => {
    for (
      let i = hoveredItem + 1;
      i < itemsLength && itemsLength > 0 && i > 0;
      i += 1
    ) {
      if (items[i] === itemsLength) {
        this.setState({ hoveredItem: 0 });
        break;
      }
      if (items[i]) {
        this.setState({ hoveredItem: i % itemsLength });
        break;
      }
    }
  };

  onSearchChange = searchValue => {
    const { items, keyMap } = this.props;
    const searchFiled = keyMap ? keyMap.title : 'title';

    const filteredItems = items.filter(item =>
      includes(item[searchFiled].toLowerCase(), searchValue.toLowerCase())
    );
    this.setState({
      items: filteredItems,
    });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  renderSelectButton = () => {
    const {
      isSplit,
      customButton,
      type,
      size,
      disabled,
      icon,
      label,
    } = this.props;
    const { items } = this.state;

    if (isSplit) {
      return (
        <ButtonSelect
          type={type}
          disabled={disabled}
          onClick={!disabled ? this.onButtonClick : undefined}
        >
          <ChevronDown
            color={type === 'primary' && !disabled ? 'white' : 'grayDark'}
          />
        </ButtonSelect>
      );
    }
    if (customButton) {
      return customButton(this.onButtonClick);
    }

    return (
      <Button
        size={size}
        items={items}
        disabled={disabled}
        type={type}
        label={label}
        icon={icon}
        onClick={this.onButtonClick}
        isSelect
      />
    );
  };

  renderSelectPopup = () => {
    const {
      position,
      hasSearch,
      customButton,
      keyMap,
      searchPlaceholder,
    } = this.props;
    const { isOpen, hoveredItem, items } = this.state;

    return (
      <SelectStyled isOpen={isOpen} position={position} isMenu={!!customButton}>
        {hasSearch && (
          <div ref={node => (this.searchInputNode = node)}>
            <Search
              onChange={this.onSearchChange}
              placeholder={searchPlaceholder}
            />
          </div>
        )}
        <SelectItems>
          {items.map((item, idx) => [
            item.hasDivider && <SelectItemDivider />,
            <SelectItem
              hovered={hoveredItem === idx}
              key={item[keyMap ? keyMap.id : 'id']}
              item={item}
              keyMap={keyMap}
              hasSelectedItems={some(items, { selected: true })}
              onClick={event => this.handleSelectOption(item, event)}
            />,
          ])}
        </SelectItems>
      </SelectStyled>
    );
  };

  render() {
    const { isSplit, position, customButton } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrapper
        role="button"
        onClick={this.onClick}
        onKeyUp={this.onClick}
        tabIndex={0}
        isSplit={isSplit}
        ref={selectNode => (this.selectNode = selectNode)}
      >
        {this.renderSelectButton()}
        {this.renderSelectPopup()}
        {!customButton && (
          <Arrow isOpen={isOpen} isSplit={isSplit} position={position} />
        )}
      </Wrapper>
    );
  }
}

Select.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Function to call on selected item click */
  onSelectClick: PropTypes.func,

  /** Label to display on the Select button */
  label: PropTypes.string,

  /** Items to display in the popup */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,

  /** Is the Select component part of the Split Button */
  isSplit: PropTypes.bool,

  /** Type of the select component  */
  type: PropTypes.oneOf(['primary', 'secondary']),

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** Position of the popup */
  position: PropTypes.oneOf(['top', 'bottom']),

  /** Icon to show in the Button */
  icon: PropTypes.node,

  /** Does the Select have a search bar */
  hasSearch: PropTypes.bool,

  /** Custom Button component */
  customButton: PropTypes.func,

  /** Custom keys to used in the Items array */
  keyMap: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),

  /** Can the select have multiple items selected */
  multiSelect: PropTypes.bool,

  /** If false don't enable keyboard navigation */
  shortcutsEnabled: PropTypes.bool,

  /** Search placeholder */
  searchPlaceholder: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  isSplit: false,
  type: 'secondary',
  size: 'medium',
  position: 'bottom',
  disabled: undefined,
  icon: undefined,
  hasSearch: false,
  customButton: undefined,
  onSelectClick: undefined,
  keyMap: undefined,
  multiSelect: undefined,
  shortcutsEnabled: true,
  searchPlaceholder: 'Search',
};
