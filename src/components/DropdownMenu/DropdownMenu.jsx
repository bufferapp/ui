/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItems, Item } from './style';
import PopupMenu from './PopupMenu/PopupMenu';
import { keyCode } from './keyCode';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.keyCode = keyCode;

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
    }
  };

  isPopupOpen = () => this.state.isOpen;

  openPopup = () => {
    this.setState({ isOpen: true });
  };

  closePopup = () => {
    this.setState({ isOpen: false });
  };

  handleKeydown = event => {
    let flag = false;
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
      case this.keyCode.DOWN:
        if (!this.isPopupOpen()) {
          this.openPopup();
          flag = true;
        }
        break;
      case this.keyCode.ESC:
      case this.keyCode.TAB:
        this.closePopup();
        break;
      default:
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
      <DropdownItems
        ref={itemsNode => (this.itemsNode = itemsNode)}
        role="menubar"
        aria-label={ariaLabel}
      >
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
            role="menu"
            xPosition="right"
            items={items}
            aria-label={ariaLabelPopup}
            horizontalOffset={horizontalOffset}
            isOpen={this.state.isOpen}
            closePopup={this.closePopup}
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
