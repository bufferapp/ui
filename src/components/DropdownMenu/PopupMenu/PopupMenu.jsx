import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemDividerTitle } from '../style';
import { PopupMenuStyled, ItemDivider } from './style';
import ButtonItem from '../ButtonItem/ButtonItem';

export default class PopupMenu extends React.Component {
  hasSubMenu = item => item.subItems && item.subItems.length > 0;

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
        <Item key={`item-${index}`} role="none" type={item.type}>
          <ButtonItem
            index={index}
            item={item}
            shouldFocus={index === focusedItem}
            ariaHaspopup={hasSubMenu}
          />
          {hasSubMenu && `Popup`}
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
