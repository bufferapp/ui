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
      usingMouse: false,
    };

    this.keyCode = keyCode;

    this.handleKeydown = this.handleKeydown.bind(this);
    this.handlePopupBlur = this.handlePopupBlur.bind(this);
    this.handleMousedown = this.handleMousedown.bind(this);
  }

  componentDidMount() {
    this.itemsNode.addEventListener('keydown', this.handleKeydown);
    this.itemsNode.addEventListener('mousedown', this.handleMousedown);
  }

  componentWillUnmount() {
    this.itemsNode.removeEventListener('keydown', this.handleKeydown);
    this.itemsNode.removeEventListener('mousedown', this.handleMousedown);
  }

  handleMousedown = () => {
    this.setState({ usingMouse: true });
  };

  togglePopup = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  isPopupOpen = () => this.state.isOpen;

  openPopup = () => {
    this.setState({ isOpen: true });
  };

  closePopup = () => {
    this.setState({ isOpen: false });
  };

  handleKeydown = (event) => {
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

    this.setState({ usingMouse: false });

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  handlePopupBlur = (event) => {
    const outsideOfPopup = !event.currentTarget.contains(event.relatedTarget);
    setTimeout(() => {
      if (this.isPopupOpen() && outsideOfPopup) {
        this.closePopup();
      }
    }, 300);
  };

  render() {
    const {
      menubarItem,
      items,
      ariaLabel,
      ariaLabelPopup,
      horizontalOffset,
      xPosition,
      onOpen,
    } = this.props;

    const MenubarItem = React.cloneElement(menubarItem);

    return (
      <DropdownItems
        ref={(itemsNode) => (this.itemsNode = itemsNode)}
        role="menubar"
        aria-label={ariaLabel}
        usingMouse={this.state.usingMouse}
      >
        <Item role="none" menuOption>
          <MenubarItem.type
            {...MenubarItem.props}
            role="menuitem"
            tabIndex="0"
            aria-haspopup="true"
            aria-expanded={this.state.isOpen}
            onKeyDown={(ev) => this.handleKeydown(ev)}
            onClick={(ev) => {
              this.togglePopup();
              ev.preventDefault();
            }}
          />
          <PopupMenu
            role="menu"
            xPosition={xPosition}
            items={items}
            aria-label={ariaLabelPopup}
            horizontalOffset={horizontalOffset}
            isOpen={this.state.isOpen}
            usingMouse={this.state.usingMouse}
            closePopup={this.closePopup}
            onBlur={(event) => this.handlePopupBlur(event)}
            onOpen={onOpen}
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

  /** xPosition for Dropdown menu */
  xPosition: PropTypes.string,

  /** Items list to display in the popup menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      colors: PropTypes.shape({
        title: PropTypes.string,
        iconHover: PropTypes.string,
      }),
    })
  ).isRequired,

  /** onOpen function to fire when the Dropdown menu is open */
  onOpen: PropTypes.func,
};

DropdownMenu.defaultProps = {
  ariaLabelPopup: null,
  xPosition: 'right',
  onOpen: null,
};
