import React from 'react';
import PropTypes from 'prop-types';

import { PopupMenuStyled } from '../PopupMenu/style';
import ButtonItem from '../ButtonItem/ButtonItem';
import { Item } from '../style';

export default class Submenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedItem: '-1',
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
  }

  componentDidMount() {
    this.submenu.addEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen) {
      this.updateIfNeeded(prevProps);
    }
  }

  componentWillUnmount() {
    this.submenu.removeEventListener('keydown', this.handleKeydown);
  }

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

  isPopupOpen = () => this.props.isOpen;

  isFirstItem = index => index === this.firstItem;

  isLastItem = index => index === this.lastItem;

  handleKeydown = event => {
    let flag = false;
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        /*
        if (!this.isPopupOpen()) {
          this.openPopupAndFocusFirstItem();
          flag = true;
        }
        */
        break;
      case this.keyCode.DOWN:
        if (this.isPopupOpen()) {
          this.setFocusToNextItem();
        }
        flag = true;
        break;
      case this.keyCode.UP:
        if (this.isPopupOpen()) {
          this.setFocusToPreviousItem();
        }
        flag = true;
        break;
      case this.keyCode.RIGHT:
        if (this.props.closeSubMenu) {
          this.props.closeSubMenu();
        }
        // this.menu.setFocusToNextItem(this);
        flag = true;
        break;
      case this.keyCode.ESC:
      case this.keyCode.TAB:
        if (this.props.closeSubMenu) {
          this.props.closeSubMenu();
        }
        break;
      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  updateIfNeeded(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      console.info('isOpen!!', this.submenu);
      this.submenu.focus();
      this.setFocusToFirstItem();
    }
  }

  renderItems = items => {
    const { focusedItem } = this.state;

    return items.map((item, index) => (
      <Item key={`submenu-item-${index}`} role="none" type={item.type}>
        <ButtonItem
          index={index}
          item={item}
          shouldFocus={index === focusedItem}
          ariaHaspopup={false}
        />
      </Item>
    ));
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
        ref={submenu => (this.submenu = submenu)}
        role="menu"
        aria-label={ariaLabelPopup}
        isOpen={isOpen}
        xPosition={xPosition}
        horizontalOffset={horizontalOffset}
        onBlur={onBlur}
        isSubmenu
      >
        {this.renderItems(items)}
      </PopupMenuStyled>
    );
  }
}

Submenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,

  onBlur: PropTypes.func.isRequired,

  closeSubMenu: PropTypes.func.isRequired,

  /** Aria label for popup menu, it should preferibly be the same as the menubarItem name */
  ariaLabelPopup: PropTypes.string,

  xPosition: PropTypes.string,

  horizontalOffset: PropTypes.string,

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

Submenu.defaultProps = {
  ariaLabelPopup: null,
  xPosition: 'left',
  horizontalOffset: null,
};
