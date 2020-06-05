import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemDividerTitle } from '../style';
import { PopupMenuStyled, ItemDivider } from './style';
import ButtonItem from '../ButtonItem/ButtonItem';
import Submenu from '../Submenu/Submenu';
import { keyCode } from '../keyCode';

export default class PopupMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSubmenu: false,
      openedSubmenu: -1,
      focusedItem: -1,
    };

    this.firstItem = props.items.length > 0 ? 0 : -1;
    this.lastItem = props.items.length - 1 || -1;
    this.keyCode = keyCode;

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    this.popup.addEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen) {
      this.updateIfNeeded(prevProps);
    }
  }

  componentWillUnmount() {
    this.popup.removeEventListener('keydown', this.handleKeydown);
  }

  closePopup = () => {
    if (this.props.closePopup) {
      this.props.closePopup();
    }
    this.setState({ focusedItem: -1 });
  };

  toggleSubMenu = () => {
    if (!this.isSubmenuOpen()) {
      const { focusedItem } = this.state;
      this.openSubMenu(focusedItem);
    } else {
      this.closeSubMenu();
    }
  };

  openSubMenu = index => {
    this.setState({ isOpenSubmenu: true, openedSubmenu: index });
  };

  closeSubMenu = () => {
    this.setState({ isOpenSubmenu: false, openedSubmenu: -1 });
    this.focusPopup();
  };

  isSubmenuOpen = () => this.state.isOpenSubmenu;

  isPopupOpen = () => this.props.isOpen;

  hasSubMenu = item => item.subItems && item.subItems.length > 0;

  isFirstItem = index => index === this.firstItem;

  isLastItem = index => index === this.lastItem;

  setFocusToItem = index => {
    this.setState({ focusedItem: index });
  };

  setFocusToFirstItem = () => {
    this.setFocusToItem(0);
  };

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
      case this.keyCode.DOWN:
        if (this.isPopupOpen()) {
          this.setFocusToNextItem();
          this.closeSubMenu();
        }
        flag = true;
        break;
      case this.keyCode.UP:
        if (this.isPopupOpen()) {
          this.setFocusToPreviousItem();
          this.closeSubMenu();
        }
        flag = true;
        break;
      case this.keyCode.LEFT: {
        const { focusedItem } = this.state;
        this.openSubMenu(focusedItem);
        flag = true;
        break;
      }
      case this.keyCode.RIGHT:
        this.closeSubMenu();
        this.focusPopup();
        flag = true;
        break;
      case this.keyCode.ESC:
      case this.keyCode.TAB:
        this.closeSubMenu();
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

  handleSubmenuBlur = (event, isOpen) => {
    const outsideOfPopup = !event.currentTarget.contains(event.relatedTarget);
    setTimeout(() => {
      if (isOpen && outsideOfPopup) {
        this.closeSubMenu();
      }
    }, 300);

    event.stopPropagation();
    event.preventDefault();
  };

  focusPopup = () => {
    const { focusedItem } = this.state;
    this.popup.focus();
    this.setFocusToItem(focusedItem);
  }

  focusPopupToFirstItem = () => {
    this.popup.focus();
    this.setFocusToItem(0);
  }

  onButtonMouseOver = index => {
    this.setFocusToItem(index);
    const { focusedItem } = this.state;
    this.openSubMenu(focusedItem);
  }

  onButtonMouseOut = () => {}

  onButtonFocus = () => {}

  onButtonBlur = () => {}

  updateIfNeeded(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.focusPopupToFirstItem();
    }
  }

  renderSubMenu = (item, index) => {
    if (!this.hasSubMenu(item)) return null;

    const { subItems } = item;
    const isOpen = this.state.isOpenSubmenu && index === this.state.openedSubmenu;

    return (
      <Submenu
        header="Social Accounts"
        aria-label="Profiles Menu"
        xPosition="left"
        horizontalOffset="-10px"
        isOpen={isOpen}
        closeSubMenu={this.closeSubMenu}
        onBlur={event => this.handleSubmenuBlur(event, isOpen)}
        items={subItems}
      />
    );
  };

  renderItems = items => {
    const { focusedItem } = this.state;
    
    return items.map((item, index) => {
      const hasSubMenu = this.hasSubMenu(item);
      const shouldFocus = index === focusedItem && !this.isSubmenuOpen();
      const type = index === 0 ? 'header' : '';

      return [
        item.hasDivider && (
          <ItemDivider key={`${item.id}--divider`} role="none" type={type}>
            {item.dividerTitle && (
              <ItemDividerTitle>{item.dividerTitle}</ItemDividerTitle>
            )}
          </ItemDivider>
        ),
        <Item
          key={`item-${index}`}
          role="none"
          type={item.type}
          onMouseOver={() => this.onButtonMouseOver(index)}
          onMouseOut={this.onButtonMouseOut}
          onFocus={this.onButtonFocus}
          onBlur={this.onButtonBlur}
        >
          <ButtonItem
            index={index}
            item={item}
            shouldFocus={shouldFocus}
            ariaHaspopup={hasSubMenu}
          />
          {hasSubMenu && this.renderSubMenu(item, index)}
        </Item>,
      ];
    });
  };

  render() {
    const {
      ariaLabelPopup,
      horizontalOffset,
      items,
      isOpen,
      onBlur,
      xPosition,
    } = this.props;

    return (
      <PopupMenuStyled
        ref={popup => (this.popup = popup)}
        role="menu"
        aria-label={ariaLabelPopup}
        isOpen={isOpen}
        xPosition={xPosition}
        horizontalOffset={horizontalOffset}
        onBlur={onBlur}
      >
        {this.renderItems(items)}
      </PopupMenuStyled>
    );
  }
}

PopupMenu.propTypes = {
  /** Boolean to check if the popup is open */
  isOpen: PropTypes.bool.isRequired,

  /** Additional horizontal space for popup alignment */
  horizontalOffset: PropTypes.string,

  /** Horizontal alignment to display popup */
  xPosition: PropTypes.string,

  /** Function that handles onBlur event for popup */
  onBlur: PropTypes.func.isRequired,

  /** Function that handles closing the popup */
  closePopup: PropTypes.func.isRequired,

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

PopupMenu.defaultProps = {
  ariaLabelPopup: null,
  horizontalOffset: null,
  xPosition: 'left',
};
