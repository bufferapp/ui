/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import { DropdownItems, Item, PopupMenu, ButtomItem } from './style';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    /*
    const items = props.items.map(item => {
      item.tabIndex = "-1";
      return item;
    });
    */

    this.state = {
      isOpen: false,
    };
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
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
  }

  componentDidMount() {
    this.itemsNode.addEventListener('keydown', this.handleKeydown);
    this.itemsNode.addEventListener('click', this.handleClick);
    this.itemsNode.addEventListener('focus', this.handleFocus);
    this.itemsNode.addEventListener('blur', this.handleBlur);
    this.itemsNode.addEventListener('mouseover', this.handleMouseover);
    this.itemsNode.addEventListener('mouseout', this.handleMouseout);
  }

  componentWillUnmount() {
    this.itemsNode.removeEventListener('keydown', this.handleKeydown);
    this.itemsNode.removeEventListener('click', this.handleClick);
    this.itemsNode.removeEventListener('focus', this.handleFocus);
    this.itemsNode.removeEventListener('blur', this.handleBlur);
    this.itemsNode.removeEventListener('mouseover', this.handleMouseover);
    this.itemsNode.removeEventListener('mouseout', this.handleMouseout);
  }

  openPopup = () => {
    this.setState({ isOpen: true });
  }

  closePopup = () => {
    this.setState({ isOpen: false });
  }

  setFocusToItem = index => {
    this.props.items.forEach((item, i) => {
      const elem = this[`item_${i}_ref`];
      if (index === i) {
        elem.focus();
        elem.tabIndex = "0";
        elem['aria-expanded'] = "true";
      } else {
        elem.tabIndex = "-1";
      }
      console.log('tabIndex --->', elem, elem.tabIndex, elem['aria-expanded']);
    });
  }

  setFocusToFirstItem = () => {
    this.setFocusToItem(0);
  }

  handleKeydown = event => {
    let flag = false;
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
      case this.keyCode.DOWN:
        this.openPopup();
        this.setFocusToFirstItem();
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

  handleClick = () => {};

  handleFocus = () => {};

  handleBlur = () => {};

  handleMouseover = () => {};

  handleMouseout = () => {};

  renderItems = items => (
    items.map((item, index) => {
      const { title, onItemClick } = item;
      return (
        <Item key={`item-${index}`} role="none">
          <ButtomItem
            ref={button => (this[`item_${index}_ref`] = button)}
            role="menuitem"
            onClick={onItemClick}
            tabIndex={item.tabIndex}
            type="button"
            fullWidth
          >
            {title}
          </ButtomItem>
        </Item>
      )
    })
  );

  render() {
    const { menubarItem, name, items } = this.props;
    return (
      <nav
        role="navigation"
        aria-label="Main Menu" 
        ref={itemsNode => (this.itemsNode = itemsNode)}
      >
        <DropdownItems role="menubar" aria-label="Main Menu">
          <Item role="none">
            {menubarItem}
            <PopupMenu role="menu" aria-label={name} isOpen={this.state.isOpen} yPosition="bottom">
              {this.renderItems(items)}
            </PopupMenu>
          </Item>
        </DropdownItems>
      </nav>
    );
  }
}

DropdownMenu.propTypes = {
  /** Link in the NavBar that triggers the popup */
  menubarItem: PropTypes.node.isRequired,

  /** Menu name */
  name: PropTypes.string.isRequired,

  /** Items to display in the popup */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
