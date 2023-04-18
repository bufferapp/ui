import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemDividerTitle } from '../style';
import { PopupMenuStyled, ItemDivider } from './style';
import ButtonItem from '../ButtonItem/ButtonItem';
import Tooltip from '../../Tooltip/Tooltip';
import { keyCode } from '../keyCode';
import TooltipLabel from '../TooltipLabel/TooltipLabel';

const OptionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default class PopupMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedItem: -1,
      tabIndex: '-1',
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
    this.updateIfNeeded(prevProps);
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

  isPopupOpen = () => this.props.isOpen;

  hasSubItems = (item) => item.subItems && item.subItems.length > 0;

  isFirstItem = (index) => index === this.firstItem;

  isLastItem = (index) => index === this.lastItem;

  setFocusToItem = (index) => {
    this.setState({ focusedItem: index });
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

  handleKeydown = (event) => {
    let flag = false;
    switch (event.keyCode) {
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

  focusPopupToItem = (index) => {
    this.popup.focus();
    this.setFocusToItem(index);
  };

  updateIfNeeded(prevProps) {
    const { isOpen, usingMouse, onOpen } = this.props;
    let newTabIndex = '-1';

    if (prevProps.isOpen !== isOpen) {
      if (isOpen) {
        if (usingMouse) newTabIndex = '0';
        this.focusPopupToItem(0);
        if (onOpen) {
          onOpen();
        }
      } else {
        this.setFocusToItem(-1);
      }

      this.setState({ tabIndex: newTabIndex });
    }
  }

  renderItems = (items) => {
    const { focusedItem } = this.state;

    return items.map((item, index) => {
      const hasSubItems = this.hasSubItems(item);
      const shouldFocus = index === focusedItem && !this.props.usingMouse;
      const type = index === 0 ? 'header' : '';
      const { defaultTooltipMessage } = item;

      return [
        item.hasDivider && (
          <ItemDivider key={`${item.id}--divider`} role="none" type={type}>
            {item.dividerTitle && (
              <ItemDividerTitle>{item.dividerTitle}</ItemDividerTitle>
            )}
          </ItemDivider>
        ),
        <OptionalWrapper
          key={`item-wrapper-${index}`}
          condition={hasSubItems || defaultTooltipMessage}
          wrapper={(children) => {
            const tooltip = (
              <TooltipLabel
                maxItems={5}
                items={item.subItems}
                defaultMessage={defaultTooltipMessage}
              />
            );
            return (
              <Tooltip
                customLabel={tooltip}
                position="left"
                verticalAlign="top"
              >
                {children}
              </Tooltip>
            );
          }}
        >
          <Item key={`item-${index}`} role="none" type={item.type}>
            <ButtonItem
              index={index}
              item={item}
              shouldFocus={shouldFocus}
              ariaHaspopup={false}
            />
          </Item>
        </OptionalWrapper>,
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
        ref={(popup) => (this.popup = popup)}
        role="menu"
        aria-label={ariaLabelPopup}
        isOpen={isOpen}
        xPosition={xPosition}
        horizontalOffset={horizontalOffset}
        onBlur={onBlur}
        tabIndex={this.state.tabIndex}
        onKeyDown={(ev) => this.handleKeydown(ev)}
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

  /** Determines if the user is using the mouse to navigate in the menu */
  usingMouse: PropTypes.bool,

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

PopupMenu.defaultProps = {
  ariaLabelPopup: null,
  horizontalOffset: null,
  xPosition: 'left',
  usingMouse: false,
  onOpen: null,
};
