/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItems, Item } from './style';
import PopupMenu from './PopupMenu/PopupMenuWithRef';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      focusedItem: -1,
    };

    this.firstItem = props.items.length > 0 ? 0 : -1;
    this.lastItem = props.items.length - 1 || -1;

    this.keyCode = Object.freeze({
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    });

    this.handleKeydown = this.handleKeydown.bind(this);
    this.handlePopupBlur = this.handlePopupBlur.bind(this);
  }

  componentDidMount() {
    this.itemsNode.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    this.itemsNode.removeEventListener('keydown', this.handleKeydown);
  }

  togglePopup = () => {
    if (this.isPopupOpen()) {
      this.closePopup();
    } else {
      this.openPopup();
      this.setFocusToFirstItem();
    }
  };

  isPopupOpen = () => this.state.isOpen;

  openPopup = () => {
    this.popupMenu.focus();
    this.setState({ isOpen: true });
  };

  closePopup = () => {
    this.setState({ isOpen: false, focusedItem: -1 });
  };

  setFocusToItem = index => {
    this.setState({ focusedItem: index });
  };

  setFocusToFirstItem = () => {
    this.setFocusToItem(0);
  };

  openPopupAndFocusFirstItem = () => {
    this.openPopup();
    this.setFocusToFirstItem();
  };

  isFirstItem = index => index === this.firstItem;

  isLastItem = index => index === this.lastItem;

  setFocusToNextItem = () => {
    const { focusedItem } = this.state;

    const newIndex = this.isLastItem(focusedItem)
      ? this.firstItem
      : focusedItem + 1;

    this.setFocusToItem(newIndex);
  };

  setFocusToPreviousItem = () => {
    const { focusedItem } = this.state;

    const newIndex = this.isFirstItem(focusedItem)
      ? this.lastItem
      : focusedItem - 1;

    this.setFocusToItem(newIndex);
  };

  handleKeydown = event => {
    let flag = false;
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        if (!this.isPopupOpen()) {
          this.openPopupAndFocusFirstItem();
          flag = true;
        }
        break;
      case this.keyCode.DOWN:
        if (!this.isPopupOpen()) {
          this.openPopupAndFocusFirstItem();
        } else {
          this.setFocusToNextItem();
        }
        flag = true;
        break;
      case this.keyCode.UP:
        this.setFocusToPreviousItem();
        flag = true;
        break;
      case this.keyCode.LEFT:
        // this.menu.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        // this.menu.setFocusToNextItem(this);
        flag = true;
        break;
      case this.keyCode.ESC:
      case this.keyCode.TAB:
        this.closePopup();
        break;
      default:
        console.info('DEFAULT');
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  handlePopupBlur = event => {
    const outsideOfPopup = !event.currentTarget.contains(event.relatedTarget);

    setTimeout(() => {
      if (this.isPopupOpen() && outsideOfPopup) {
        this.closePopup();
      }
    }, 300);

    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    const {
      menubarItem,
      items,
      ariaLabel,
      ariaLabelPopup,
      horizontalOffset,
    } = this.props;

    const MenubarItem = React.cloneElement(menubarItem);

    return (
      <DropdownItems ref={itemsNode => (this.itemsNode = itemsNode)} role="menu" aria-label={ariaLabel}>
        <Item role="none">
          <MenubarItem.type
            {...MenubarItem.props}
            role="menuitem"
            tabIndex="0"
            aria-haspopup="true"
            aria-expanded={this.state.isOpen}
            onClick={this.togglePopup}
          />
          <PopupMenu
            ref={popupMenu => (this.popupMenu = popupMenu)}
            role="menu"
            yPosition="bottom"
            items={items}
            aria-label={ariaLabelPopup}
            horizontalOffset={horizontalOffset}
            isOpen={this.state.isOpen}
            focusedItem={this.state.focusedItem}
            onBlur={event => this.handlePopupBlur(event)}
          />
        </Item>
      </DropdownItems>
    );
  }
}

DropdownMenu.propTypes = {
  /** Link in the NavBar that triggers the popup */
  menubarItem: PropTypes.node.isRequired,

  /** Aria label for list component */
  ariaLabel: PropTypes.string.isRequired,

  /** Aria label for popup menu, it should preferibly be the same as the menubarItem name */
  ariaLabelPopup: PropTypes.string,

  /** Items list to display in the popup menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

DropdownMenu.defaultProps = {
  ariaLabelPopup: null,
};
