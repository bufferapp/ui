import React from 'react'
import PropTypes from 'prop-types'
import { Checkmark } from '../../Icon'
import Tooltip from '../../Tooltip'
import {
  SelectItemStyled,
  SelectItemLabel,
  SelectItemIcon,
  SelectItemTitle,
  SelectItemCustom,
  IconWrapper,
  HotKeyPrompt,
  Title,
} from './style'

// @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
const shouldItemMoveRight = (item, hasSelectedItems, hideSearch) =>
  // if the item isn't selected, we need to check if other items are selected in the dropdown or if it has a search bar
  !item.selected &&
  (hasSelectedItems || !hideSearch) &&
  // if it's not selected and it has a custom component, we shouldn't move the item
  !(item.component && !hasSelectedItems)

// @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
const SelectItemTooltipWrapper = (props) => {
  const { item, keyMap } = props
  const tooltip = item[keyMap ? keyMap.tooltip : 'tooltip']

  return (
    <>
      {tooltip ? (
        // @ts-expect-error TS(2322) FIXME: Type '{ children: Element; label: any; position: s... Remove this comment to see the full error message
        <Tooltip label={tooltip} position="bottom">
          <SelectItem {...props} />
        </Tooltip>
      ) : (
        <SelectItem {...props} />
      )}
    </>
  )
}

const SelectItem = ({
  // @ts-expect-error TS(7031) FIXME: Binding element 'item' implicitly has an 'any' typ... Remove this comment to see the full error message
  item,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onClick' implicitly has an 'any' ... Remove this comment to see the full error message
  onClick,
  // @ts-expect-error TS(7031) FIXME: Binding element 'hovered' implicitly has an 'any' ... Remove this comment to see the full error message
  hovered,
  // @ts-expect-error TS(7031) FIXME: Binding element 'keyMap' implicitly has an 'any' t... Remove this comment to see the full error message
  keyMap,
  // @ts-expect-error TS(7031) FIXME: Binding element 'hasSelectedItems' implicitly has ... Remove this comment to see the full error message
  hasSelectedItems,
  // @ts-expect-error TS(7031) FIXME: Binding element 'getItemId' implicitly has an 'any... Remove this comment to see the full error message
  getItemId,
  // @ts-expect-error TS(7031) FIXME: Binding element 'hideSearch' implicitly has an 'an... Remove this comment to see the full error message
  hideSearch,
  // @ts-expect-error TS(7031) FIXME: Binding element 'capitalizeItemLabel' implicitly h... Remove this comment to see the full error message
  capitalizeItemLabel,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onItemClick' implicitly has an 'a... Remove this comment to see the full error message
  onItemClick,
}) => {
  const tooltip = item[keyMap ? keyMap.tooltip : 'tooltip']
  let title = item[keyMap ? keyMap.title : 'title']
  if (tooltip) title = null

  return (
    <SelectItemStyled
      onClick={onItemClick || onClick}
      // @ts-expect-error TS(2769) FIXME: No overload matches this call.
      hovered={hovered}
      id={getItemId(item)}
      disabled={item.disabled}
    >
      <SelectItemLabel
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        capitalizeItemLabel={capitalizeItemLabel}
        hideSearch={hideSearch}
        hasSelectedItems={hasSelectedItems}
        hasComponent={item.component}
      >
        {item.selected && (
          <IconWrapper>
            <Checkmark color="grayDarker" />
          </IconWrapper>
        )}
        {!item.iconEnd && item.icon && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <SelectItemIcon iconEnd={item.iconEnd} hovered={hovered}>
            {item.icon}
          </SelectItemIcon>
        )}

        <SelectItemTitle
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          moveRight={shouldItemMoveRight(item, hasSelectedItems, hideSearch)}
          title={title}
        >
          {item.component && (
            // @ts-expect-error TS(2769) FIXME: No overload matches this call.
            <IconWrapper custom>
              <SelectItemCustom
                dangerouslySetInnerHTML={{ __html: item.component(item) }}
              />
            </IconWrapper>
          )}
          <Title>{item[keyMap ? keyMap.title : 'title']}</Title>
        </SelectItemTitle>
        {item.iconEnd && item.icon && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <SelectItemIcon iconEnd={item.iconEnd} hovered={hovered}>
            {item.icon}
          </SelectItemIcon>
        )}
        {item.hotKeyPrompt && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <HotKeyPrompt hovered={hovered}>{item.hotKeyPrompt}</HotKeyPrompt>
        )}
      </SelectItemLabel>
    </SelectItemStyled>
  )
}

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    onItemClick: PropTypes.func,
    selected: PropTypes.bool,
    icon: PropTypes.node,
    iconEnd: PropTypes.bool,
    component: PropTypes.func,
    tooltip: PropTypes.string,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func.isRequired,

  /** On click function */
  onItemClick: PropTypes.func.isRequired,

  /** Get the id of the item */
  getItemId: PropTypes.func.isRequired,

  /** Is the item selected */
  hovered: PropTypes.bool,

  /** Should capitalize Item Label */
  capitalizeItemLabel: PropTypes.bool,

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
}

SelectItem.defaultProps = {
  hovered: undefined,
  keyMap: undefined,
  hasSelectedItems: undefined,
  hideSearch: undefined,
  multiSelect: undefined,
  capitalizeItemLabel: true,
}

export default SelectItemTooltipWrapper
