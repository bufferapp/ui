import React from 'react';
import PropTypes from 'prop-types';
import { Checkmark } from '../../Icon';
import {
  SelectItemStyled,
  SelectItemLabel,
  SelectItemIcon,
  SelectItemTitle,
  SelectItemCustom,
  CheckIconWrapper,
  HotKeyPrompt,
} from './style';

const shouldItemMoveRight = (item, hasSelectedItems, hideSearch) =>
  // if the item isn't selected, we need to check if other items are selected in the dropdown or if it has a search bar
  !item.selected &&
  (hasSelectedItems || !hideSearch) &&
  // if it's not selected and it has a custom component, we shouldn't move the item
  !(item.component && !hasSelectedItems);

const SelectItem = ({
  item,
  onClick,
  hovered,
  keyMap,
  hasSelectedItems,
  getItemId,
  hideSearch,
}) => (
  <SelectItemStyled
    onClick={item.onItemClick || onClick}
    hovered={hovered}
    id={getItemId(item)}
  >
    <SelectItemLabel
      hideSearch={hideSearch}
      hasSelectedItems={hasSelectedItems}
      hasComponent={item.component}
    >
      {item.selected && (
        <CheckIconWrapper>
          <Checkmark color="grayDarker" />
        </CheckIconWrapper>
      )}
      {item.icon && (
        <SelectItemIcon hovered={hovered}>{item.icon}</SelectItemIcon>
      )}

      <SelectItemTitle
        moveRight={shouldItemMoveRight(item, hasSelectedItems, hideSearch)}
        title={item[keyMap ? keyMap.title : 'title']}
      >
        {item.component && (
          <CheckIconWrapper>
            <SelectItemCustom
              dangerouslySetInnerHTML={{ __html: item.component(item) }}
            />
          </CheckIconWrapper>
        )}
        {item[keyMap ? keyMap.title : 'title']}
      </SelectItemTitle>
      {item.hotKeyPrompt && (
        <HotKeyPrompt hovered={hovered}>{item.hotKeyPrompt}</HotKeyPrompt>
      )}
    </SelectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    onItemClick: PropTypes.func,
    selected: PropTypes.bool,
    icon: PropTypes.node,
    component: PropTypes.func,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func.isRequired,

  /** Get the id of the item */
  getItemId: PropTypes.func.isRequired,

  /** Is the item selected */
  hovered: PropTypes.bool,

  /** Custom keys to used in the Items array */
  keyMap: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),

  /** Does the Select have selected items to adjust the margin */
  hasSelectedItems: PropTypes.bool,

  /** Does the Select have a search bar incorporated */
  hideSearch: PropTypes.bool,

  /** Is it a multi select */
  multiSelect: PropTypes.bool,
};

SelectItem.defaultProps = {
  hovered: undefined,
  keyMap: undefined,
  hasSelectedItems: undefined,
  hideSearch: undefined,
  multiSelect: undefined,
};

export default SelectItem;
