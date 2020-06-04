/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemDividerTitle } from '../style';
import { PopupMenuStyled, ItemDivider } from './style';
import ButtonItem from '../ButtonItem/ButtonItem';
import Submenu from '../Submenu/SubmenuWithRef';

export default class PopupMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      focusedItemSubmenu: -1,
      openedSubmenu: -1,
    };
  }

  openSubMenu = index => {
    this.setState({ isOpen: true, openedSubmenu: index });
  };

  closeSubMenu = () => {
    this.setState({ isOpen: false, openedSubmenu: -1 });
  };

  hasSubMenu = item => item.subItems && item.subItems.length > 0;

  renderSubMenu = (item, index) => {
    if (!this.hasSubMenu(item)) return null;

    const { subItems } = item;
    const isOpen = index === this.state.openedSubmenu;

    return (
      <Submenu
        ref={ref => (this[`submenu_${index}_ref`] = ref)}
        aria-label="Submenu"
        xPosition="left"
        horizontalOffset="-17px"
        isOpen={this.state.isOpen && isOpen}
        closeSubMenu={this.closeSubMenu}
        onBlur={() => {
          console.info('On blur');
        }}
        items={subItems}
      />
    );
  };

  renderItems = items => {
    const { focusedItem } = this.props;

    return items.map((item, index) => {
      const hasSubMenu = this.hasSubMenu(item);

      return [
        item.hasDivider && (
          <ItemDivider key={`${item.id}--divider`} role="none">
            {item.dividerTitle && (
              <ItemDividerTitle>{item.dividerTitle}</ItemDividerTitle>
            )}
          </ItemDivider>
        ),
        <Item
          ref={ref => (this[`item_${index}_ref`] = ref)}
          key={`item-${index}`}
          role="none"
          type={item.type}
        >
          <ButtonItem
            index={index}
            item={item}
            shouldFocus={index === focusedItem}
            ariaHaspopup={hasSubMenu}
            onClickLeft={() => {
              if (hasSubMenu) this.openSubMenu(index);
            }}
          />
          {hasSubMenu && this.renderSubMenu(item, index)}
        </Item>,
      ];
    });
  };

  render() {
    const {
      forwardedRef,
      ariaLabelPopup,
      horizontalOffset,
      items,
      isOpen,
      onBlur,
      xPosition,
    } = this.props;

    return (
      <PopupMenuStyled
        ref={forwardedRef}
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
  isOpen: PropTypes.bool.isRequired,

  onBlur: PropTypes.func.isRequired,

  /** Aria label for popup menu, it should preferibly be the same as the menubarItem name */
  ariaLabelPopup: PropTypes.string,

  /** Items list to display in the popup menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,

  focusedItem: PropTypes.number,

  horizontalOffset: PropTypes.string,

  xPosition: PropTypes.string,

  /**
   * this consumed by the default export that is wrapping the component into a ForwardRef
   * @ignore
   */
  forwardedRef: PropTypes.func,
};

PopupMenu.defaultProps = {
  ariaLabelPopup: null,
  horizontalOffset: null,
  forwardedRef: undefined,
  focusedItem: -1,
  xPosition: 'left',
};
