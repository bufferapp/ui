/* eslint-disable no-unused-expressions, react/no-unused-state */
import React from 'react'
import PropTypes from 'prop-types'
import helper from 'immutability-helper'
import SearchIcon from '../Icon/Icons/Search'
import {
  Wrapper,
  SelectStyled,
  SelectItems,
  SelectItemDivider,
  SearchBarWrapper,
  NoMatchesContainer,
  CustomItemContainer,
  SelectItemDividerTitle,
} from './style'
import SelectItem from './SelectItem/SelectItem'
import Button from '../Button/Button'
import { ButtonSelect } from '../Button/style'
import ChevronDown from '../Icon/Icons/ChevronDown'
import Search from '../Search/Search'

/** Select component that opens a popup menu on click and displays items that can be selected */
export default class Select extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'itemsA' implicitly has an 'any' type.
  static sameItems = (itemsA, itemsB) =>
    itemsA.length === itemsB.length &&
    itemsA.every(
      // @ts-expect-error TS(7006) FIXME: Parameter 'el' implicitly has an 'any' type.
      (el, ix) =>
        el &&
        itemsB[ix] &&
        el.id === itemsB[ix].id &&
        el.title === itemsB[ix].title &&
        el.selected === itemsB[ix].selected &&
        el.disabled === itemsB[ix].disabled,
    )

  state = {
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    isOpen: this.props.isOpen,
    // @ts-expect-error TS(2339) FIXME: Property 'items' does not exist on type 'Readonly<... Remove this comment to see the full error message
    items: this.props.items || [],
    // @ts-expect-error TS(2339) FIXME: Property 'items' does not exist on type 'Readonly<... Remove this comment to see the full error message
    selectedItems: this.props.items || [],
    isFiltering: false,
    searchValue: '',
    /* We've added the functionality of adding a custom item with an action so
    we're using this value to handle keyboard events on that custom item. We
    use it to determine if the custom item has focus and listen for up, down
    and enter and well as highlighting on hover */
    isCustomItemFocused: false,
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  static getDerivedStateFromProps(props, state) {
    if (
      props.items &&
      !Select.sameItems(props.items, state.items) &&
      !state.isFiltering
    ) {
      return { items: props.items, selectedItems: props.items }
    }
    return null
  }

  componentDidMount() {
    // When the selector is open and users click anywhere on the page,
    // the selector should close
    // Set capture to true so an open select will close when another select gets opened
    document.addEventListener('click', this.closePopover, true)

    // catch the keypress to move the selected items up or down
    // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
    this.selectNode &&
      // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
      this.selectNode.addEventListener('keydown', this.keyDownPressed)
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  componentDidUpdate(prevProps, prevState) {
    // Simulate button click if isOpen is being controlled
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    if (prevProps.isOpen !== this.props.isOpen) {
      // focus the Select component in order to be able to catch the keyboard events
      // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
      this.props.isOpen && this.onButtonClick()
    }

    if (
      prevState.isOpen !== this.state.isOpen &&
      this.state.isOpen &&
      // @ts-expect-error TS(2339) FIXME: Property 'onOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
      this.props.onOpen
    ) {
      // @ts-expect-error TS(2339) FIXME: Property 'onOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
      this.props.onOpen()
    }

    const menuIsOpening = !prevState.isOpen && !!this.state.isOpen
    const shouldFilterOnMenuOpen =
      // @ts-expect-error TS(2339) FIXME: Property 'clearSearchOnBlur' does not exist on typ... Remove this comment to see the full error message
      !this.props.clearSearchOnBlur && !!this.state.searchValue
    if (menuIsOpening && shouldFilterOnMenuOpen) this.filterOnMenuOpen()

    const menuIsClosing = !!prevState.isOpen && !this.state.isOpen
    // @ts-expect-error TS(2339) FIXME: Property 'clearSearchOnBlur' does not exist on typ... Remove this comment to see the full error message
    if (menuIsClosing && this.props.clearSearchOnBlur)
      this.clearSearchOnMenuClose()
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover, true)
    // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
    this.selectNode &&
      // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
      this.selectNode.removeEventListener('keydown', this.keyDownPressed)
  }

  filterOnMenuOpen = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'searchInput' does not exist on type 'Sel... Remove this comment to see the full error message
    if (this.searchInput) this.searchInput.updateSearch(this.state.searchValue)
    this.onSearchChange(this.state.searchValue)
  }

  clearSearchOnMenuClose = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'searchInput' does not exist on type 'Sel... Remove this comment to see the full error message
    if (this.searchInput) this.searchInput.updateSearch('')
    this.onSearchChange('')
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  keyDownPressed = (e) => {
    // @ts-expect-error TS(2339) FIXME: Property 'shortcutsEnabled' does not exist on type... Remove this comment to see the full error message
    const { shortcutsEnabled, hotKeys } = this.props
    if (!shortcutsEnabled) return

    if (hotKeys) {
      // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
      hotKeys.forEach((item) => {
        if (e.which === item.hotKey) {
          item.onKeyPress()
        }
      })
    }

    switch (e.which) {
      case 40: // Arrow down
        return this.handleKeyPress(e, this.onMoveDown)
      case 38: // Arrow up
        return this.handleKeyPress(e, this.onMoveUp)
      case 13: // Enter
        return this.handleKeyPress(e, this.onAddItem)
      case 27: // Esc
        return this.handleKeyPress(e, this.onClose)
      default:
        return null
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleKeyPress = (event, keyHandler) => {
    event.preventDefault()
    event.stopPropagation()
    keyHandler(event)
  }

  // Close the popover
  // @ts-expect-error TS(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  closePopover = (e) => {
    // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
    if (this.selectNode && this.selectNode.contains(e.target)) {
      return
    }

    const { isOpen } = this.state

    if (isOpen) {
      this.setState({
        isOpen: false,
        hoveredItem: undefined,
      })
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'items' implicitly has an 'any' type.
  updateItemsInState = (items, option, index) =>
    index > -1
      ? helper(items, {
          [index]: {
            selected: { $set: !option.selected },
          },
        })
      : items

  // @ts-expect-error TS(7006) FIXME: Parameter 'option' implicitly has an 'any' type.
  handleSelectOption = (option, event) => {
    // @ts-expect-error TS(2339) FIXME: Property 'onSelectClick' does not exist on type 'R... Remove this comment to see the full error message
    const { onSelectClick, multiSelect } = this.props
    const { items } = this.state
    onSelectClick && onSelectClick(option, event)

    // @ts-expect-error TS(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
    const selectedIndex = items.findIndex((x) => x.selected === true)

    const deselectItems =
      !multiSelect && selectedIndex > -1
        ? helper(items, {
            [selectedIndex]: {
              selected: { $set: false },
            },
          })
        : items

    const optionIndex = deselectItems.findIndex(
      // @ts-expect-error TS(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
      (x) => this.getItemId(x) === this.getItemId(option),
    )

    this.setState({
      isOpen: multiSelect,
      items: this.updateItemsInState(deselectItems, option, optionIndex),
      // we need to copy the items to another array here in order to use that one during search
      // filtering
      selectedItems: this.updateItemsInState(
        deselectItems,
        option,
        optionIndex,
      ),
    })
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  onClick = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    // @ts-expect-error TS(2339) FIXME: Property 'isSplit' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.isSplit && !this.props.disabled) {
      // @ts-expect-error TS(2554) FIXME: Expected 0 arguments, but got 1.
      this.onButtonClick(e)
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  onKeyUp = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    // @ts-expect-error TS(2339) FIXME: Property 'isSplit' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.isSplit && !this.props.disabled) {
      const altPlusUp = e.altKey && ['Up', 'ArrowUp'].indexOf(e.key) >= 0
      const altPlusDown = e.altKey && ['Down', 'ArrowDown'].indexOf(e.key) >= 0
      const space = ['Space', ' '].indexOf(e.key) >= 0
      const enter = ['Enter'].indexOf(e.key) >= 0
      if (altPlusUp || altPlusDown || space || enter) {
        e.preventDefault()
        // @ts-expect-error TS(2554) FIXME: Expected 0 arguments, but got 1.
        this.onButtonClick(e)
      }
    }
  }

  onButtonClick = () => {
    const { isOpen } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'isInputSearch' does not exist on type 'R... Remove this comment to see the full error message
    const { isInputSearch, items } = this.props
    this.setState(
      {
        isOpen: !isOpen,
        items,
      },
      () => {
        // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
        !isInputSearch && !isOpen && this.selectNode && this.selectNode.focus()
        this.scrollToItem(
          // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Selec... Remove this comment to see the full error message
          this.itemsNode,
          document.getElementById(this.getItemId(items[0])),
        )
      },
    )
  }

  onMoveUp = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'hoveredItem' does not exist on type '{ i... Remove this comment to see the full error message
    const { items, isCustomItemFocused, hoveredItem } = this.state
    const itemsLength = items.length

    for (
      let i = hoveredItem - 1;
      i < itemsLength && itemsLength > 0 && i >= 0;
      i -= 1
    ) {
      if (items[i]) {
        this.setState({ hoveredItem: i % itemsLength })
        this.scrollToItem(
          // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Selec... Remove this comment to see the full error message
          this.itemsNode,
          document.getElementById(this.getItemId(items[i])),
        )
        break
      }
    }

    if (isCustomItemFocused) {
      this.setState({ isCustomItemFocused: false })
    }
  }

  onMoveDown = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'hoveredItem' does not exist on type '{ i... Remove this comment to see the full error message
    const { items, hoveredItem } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'hasCustomAction' does not exist on type ... Remove this comment to see the full error message
    const { hasCustomAction } = this.props
    const itemsLength = items.length

    if (itemsLength === 0 && hasCustomAction) {
      this.setState({ isCustomItemFocused: true })
    }
    if (!hoveredItem) {
      this.setState(
        {
          hoveredItem: 0,
        },
        () => this.updateHoveredItemPosition(hoveredItem, itemsLength, items),
      )
    } else {
      this.updateHoveredItemPosition(hoveredItem, itemsLength, items)
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  onAddItem = (event) => {
    // @ts-expect-error TS(2339) FIXME: Property 'multiSelect' does not exist on type 'Rea... Remove this comment to see the full error message
    const { multiSelect } = this.props
    // @ts-expect-error TS(2339) FIXME: Property 'hoveredItem' does not exist on type '{ i... Remove this comment to see the full error message
    const { items, hoveredItem, isCustomItemFocused, searchValue } = this.state
    const selectedItem = items[hoveredItem]

    if (isCustomItemFocused) {
      // @ts-expect-error TS(2339) FIXME: Property 'onCustomItemClick' does not exist on typ... Remove this comment to see the full error message
      this.props.onCustomItemClick(searchValue)
      this.setState({ isCustomItemFocused: false, isOpen: multiSelect })
    }

    if (selectedItem) {
      selectedItem.onItemClick
        ? this.handleSelectOption(selectedItem, selectedItem.onItemClick)
        : this.handleSelectOption(selectedItem, event)
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'hoveredItem' implicitly has an 'any' ty... Remove this comment to see the full error message
  updateHoveredItemPosition = (hoveredItem, itemsLength, items) => {
    for (
      let i = hoveredItem + 1;
      i <= itemsLength && itemsLength > 0 && i > 0;
      i += 1
    ) {
      if (i === itemsLength) {
        this.setState({ hoveredItem: 0 })
        this.scrollToItem(
          // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Selec... Remove this comment to see the full error message
          this.itemsNode,
          document.getElementById(this.getItemId(items[i])),
        )
        break
      }
      if (items[i]) {
        this.setState({ hoveredItem: i % itemsLength })
        this.scrollToItem(
          // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Selec... Remove this comment to see the full error message
          this.itemsNode,
          document.getElementById(this.getItemId(items[i])),
        )
        break
      }
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'parent' implicitly has an 'any' type.
  scrollToItem = (parent, child) => {
    if (!parent || !child) return

    // Where is the parent on page
    const parentRect = parent.getBoundingClientRect()
    // What can you see?
    const parentViewableArea = {
      height: parent.clientHeight,
      width: parent.clientWidth,
    }

    // Where is the child
    const childRect = child.getBoundingClientRect()
    // Is the child viewable?
    const isViewable =
      childRect.top >= parentRect.top &&
      childRect.top <= parentRect.top + parentViewableArea.height

    // if you can't see the child try to scroll parent
    if (!isViewable) {
      // scroll by offset relative to parent
      parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  findItemInState = (item) => {
    const { selectedItems } = this.state
    // @ts-expect-error TS(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
    return selectedItems.find((x) => this.getItemId(x) === this.getItemId(item))
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'searchValue' implicitly has an 'any' ty... Remove this comment to see the full error message
  onSearchChange = (searchValue) => {
    // @ts-expect-error TS(2339) FIXME: Property 'items' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { items, keyMap } = this.props
    const searchField = keyMap ? keyMap.title : 'title'
    const isFiltering = !!searchValue

    // first, filter the items in the props that we get from the parent

    // the items in the props don't have the {selected: true/false} information
    // so we need to find out for each item in filteredProps if its selected or not

    // that's why we made the selectedItems array in the state, to store that information
    // and we need to check there to see, for each item, if its selected

    const { startingWith, including } = items.reduce(
      // @ts-expect-error TS(7006) FIXME: Parameter 'filtered' implicitly has an 'any' type.
      (filtered, item) => {
        const hideItemWhileSearching = isFiltering && !!item.hideOnSearch
        if (hideItemWhileSearching) return filtered

        if (
          item[searchField].toLowerCase().startsWith(searchValue.toLowerCase())
        ) {
          return {
            ...filtered,
            startingWith: [
              ...filtered.startingWith,
              {
                ...item,
                selected:
                  this.findItemInState(item) &&
                  this.findItemInState(item).selected,
              },
            ],
          }
        }
        if (
          item[searchField].toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return {
            ...filtered,
            including: [
              ...filtered.including,
              {
                ...item,
                selected:
                  this.findItemInState(item) &&
                  this.findItemInState(item).selected,
              },
            ],
          }
        }

        return { ...filtered }
      },
      { startingWith: [], including: [] },
    )

    const arrayFinal = [...startingWith, ...including]

    this.setState({
      items: arrayFinal,
      isFiltering,
      searchValue,
    })
  }

  onClose = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'onClose' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { onClose } = this.props
    this.setState(
      {
        isOpen: false,
        isFiltering: false,
        hoveredItem: 0,
      },
      onClose && onClose(),
    )
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  getItemId = (item) => {
    if (!item) return
    // @ts-expect-error TS(2339) FIXME: Property 'keyMap' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { keyMap } = this.props
    return item[keyMap && keyMap.id ? keyMap.id : 'id']
  }

  renderSelectButton = () => {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'isSplit' does not exist on type 'Readonl... Remove this comment to see the full error message
      isSplit,
      // @ts-expect-error TS(2339) FIXME: Property 'customButton' does not exist on type 'Re... Remove this comment to see the full error message
      customButton,
      // @ts-expect-error TS(2339) FIXME: Property 'type' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      type,
      // @ts-expect-error TS(2339) FIXME: Property 'size' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      size,
      // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339) FIXME: Property 'icon' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      icon,
      // @ts-expect-error TS(2339) FIXME: Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
      label,
      // @ts-expect-error TS(2339) FIXME: Property 'hasIconOnly' does not exist on type 'Rea... Remove this comment to see the full error message
      hasIconOnly,
      // @ts-expect-error TS(2339) FIXME: Property 'fullWidth' does not exist on type 'Reado... Remove this comment to see the full error message
      fullWidth,
      // @ts-expect-error TS(2339) FIXME: Property 'isInputSearch' does not exist on type 'R... Remove this comment to see the full error message
      isInputSearch,
      // @ts-expect-error TS(2339) FIXME: Property 'textToLeft' does not exist on type 'Read... Remove this comment to see the full error message
      textToLeft,
    } = this.props
    const { items } = this.state

    if (isSplit) {
      return (
        <ButtonSelect
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          type={type}
          size={size}
          disabled={disabled}
          onClick={!disabled ? this.onButtonClick : undefined}
        >
          <ChevronDown
            color={type === 'primary' && !disabled ? 'white' : 'grayDark'}
          />
        </ButtonSelect>
      )
    }
    if (customButton && isInputSearch) {
      return customButton(this.onButtonClick, this.onSearchChange)
    }
    if (customButton) {
      return customButton(this.onButtonClick, null, this.state.isOpen)
    }
    if (hasIconOnly) {
      return (
        // @ts-expect-error TS(2740) FIXME: Type '{ type: string; icon: any; hasIconOnly: true... Remove this comment to see the full error message
        <Button
          type="text"
          icon={icon}
          hasIconOnly
          onClick={this.onButtonClick}
          label="Click Me"
        />
      )
    }

    return (
      // @ts-expect-error TS(2740) FIXME: Type '{ size: any; items: any; disabled: any; type... Remove this comment to see the full error message
      <Button
        size={size}
        items={items}
        disabled={disabled}
        type={type}
        label={label}
        icon={icon}
        onClick={this.onButtonClick}
        isSelect
        fullWidth={fullWidth}
        textToLeft={textToLeft}
      />
    )
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'length' implicitly has an 'any' type.
  renderCustomActionItem = (length, onCustomItemClick, customItemLabel) => {
    if (length === 0) {
      return (
        <CustomItemContainer
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          isCustomItemFocused={this.state.isCustomItemFocused}
          onClick={() => onCustomItemClick(this.state.searchValue)}
        >
          {`${customItemLabel} ${this.state.searchValue}`}
        </CustomItemContainer>
      )
    }
  }

  renderNoItems = (
    // @ts-expect-error TS(7006) FIXME: Parameter 'hideSearch' implicitly has an 'any' typ... Remove this comment to see the full error message
    hideSearch,
    // @ts-expect-error TS(7006) FIXME: Parameter 'length' implicitly has an 'any' type.
    length,
    // @ts-expect-error TS(7006) FIXME: Parameter 'isInputSearch' implicitly has an 'any' ... Remove this comment to see the full error message
    isInputSearch,
    // @ts-expect-error TS(7006) FIXME: Parameter 'noResultsCustomMessage' implicitly has ... Remove this comment to see the full error message
    noResultsCustomMessage,
  ) => {
    if (length === 0 && (!hideSearch || isInputSearch)) {
      return <NoMatchesContainer>{noResultsCustomMessage}</NoMatchesContainer>
    }
  }

  renderSelectPopup = () => {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'xPosition' does not exist on type 'Reado... Remove this comment to see the full error message
      xPosition,
      // @ts-expect-error TS(2339) FIXME: Property 'yPosition' does not exist on type 'Reado... Remove this comment to see the full error message
      yPosition,
      // @ts-expect-error TS(2339) FIXME: Property 'horizontalOffset' does not exist on type... Remove this comment to see the full error message
      horizontalOffset,
      // @ts-expect-error TS(2339) FIXME: Property 'hideSearch' does not exist on type 'Read... Remove this comment to see the full error message
      hideSearch,
      // @ts-expect-error TS(2339) FIXME: Property 'keyMap' does not exist on type 'Readonly... Remove this comment to see the full error message
      keyMap,
      // @ts-expect-error TS(2339) FIXME: Property 'searchPlaceholder' does not exist on typ... Remove this comment to see the full error message
      searchPlaceholder,
      // @ts-expect-error TS(2339) FIXME: Property 'hasIconOnly' does not exist on type 'Rea... Remove this comment to see the full error message
      hasIconOnly,
      // @ts-expect-error TS(2339) FIXME: Property 'marginTop' does not exist on type 'Reado... Remove this comment to see the full error message
      marginTop,
      // @ts-expect-error TS(2339) FIXME: Property 'multiSelect' does not exist on type 'Rea... Remove this comment to see the full error message
      multiSelect,
      // @ts-expect-error TS(2339) FIXME: Property 'hasCustomAction' does not exist on type ... Remove this comment to see the full error message
      hasCustomAction,
      // @ts-expect-error TS(2339) FIXME: Property 'onCustomItemClick' does not exist on typ... Remove this comment to see the full error message
      onCustomItemClick,
      // @ts-expect-error TS(2339) FIXME: Property 'customItemLabel' does not exist on type ... Remove this comment to see the full error message
      customItemLabel,
      // @ts-expect-error TS(2339) FIXME: Property 'fullWidth' does not exist on type 'Reado... Remove this comment to see the full error message
      fullWidth,
      // @ts-expect-error TS(2339) FIXME: Property 'capitalizeItemLabel' does not exist on t... Remove this comment to see the full error message
      capitalizeItemLabel,
      // @ts-expect-error TS(2339) FIXME: Property 'isInputSearch' does not exist on type 'R... Remove this comment to see the full error message
      isInputSearch,
      // @ts-expect-error TS(2339) FIXME: Property 'selectPopupVisible' does not exist on ty... Remove this comment to see the full error message
      selectPopupVisible,
      // @ts-expect-error TS(2339) FIXME: Property 'noResultsCustomMessage' does not exist o... Remove this comment to see the full error message
      noResultsCustomMessage,
      // @ts-expect-error TS(2339) FIXME: Property 'searchInputProps' does not exist on type... Remove this comment to see the full error message
      searchInputProps,
    } = this.props
    // @ts-expect-error TS(2339) FIXME: Property 'hoveredItem' does not exist on type '{ i... Remove this comment to see the full error message
    const { isOpen, hoveredItem, items, isFiltering } = this.state

    return (
      <SelectStyled
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        isOpen={isOpen || selectPopupVisible}
        xPosition={xPosition}
        yPosition={yPosition}
        hasIconOnly={hasIconOnly}
        marginTop={marginTop}
        fullWidth={fullWidth}
        horizontalOffset={horizontalOffset}
      >
        {!hideSearch && (items.length > 5 || isFiltering) && (
          <SearchBarWrapper
            id="searchInput"
            // @ts-expect-error TS(2339) FIXME: Property 'searchInputNode' does not exist on type ... Remove this comment to see the full error message
            ref={(node) => (this.searchInputNode = node)}
          >
            <SearchIcon />
            <Search
              // @ts-expect-error TS(2339) FIXME: Property 'searchInput' does not exist on type 'Sel... Remove this comment to see the full error message
              ref={(node) => (this.searchInput = node)}
              onChange={this.onSearchChange}
              placeholder={searchPlaceholder}
              isOpen={isOpen}
              {...searchInputProps}
            />
          </SearchBarWrapper>
        )}
        {/* @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Selec... Remove this comment to see the full error message */}
        <SelectItems ref={(itemsNode) => (this.itemsNode = itemsNode)}>
          {hasCustomAction
            ? this.renderCustomActionItem(
                items.length,
                onCustomItemClick,
                customItemLabel,
              )
            : this.renderNoItems(
                hideSearch,
                items.length,
                isInputSearch,
                noResultsCustomMessage,
              )}
          {}
          {/* @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type. */}
          {items.map((item, idx) => [
            item.hasDivider && (
              <SelectItemDivider key={`${this.getItemId(item)}--divider`}>
                {item.dividerTitle && (
                  <SelectItemDividerTitle>
                    {item.dividerTitle}
                  </SelectItemDividerTitle>
                )}
              </SelectItemDivider>
            ),
            <SelectItem
              hovered={hoveredItem === idx}
              key={this.getItemId(item) + idx}
              getItemId={this.getItemId}
              item={item}
              capitalizeItemLabel={capitalizeItemLabel}
              keyMap={keyMap}
              // @ts-expect-error TS(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
              hasSelectedItems={items.some((i) => i.selected)}
              // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
              onClick={(event) => this.handleSelectOption(item, event)}
              onItemClick={() =>
                this.handleSelectOption(item, item.onItemClick)
              }
              hideSearch={hideSearch}
              multiSelect={multiSelect}
            />,
          ])}
        </SelectItems>
      </SelectStyled>
    )
  }

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'isSplit' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { isSplit, tooltip, disabled, fullWidth } = this.props

    return (
      <Wrapper
        role="button"
        onClick={(e) => this.onClick(e)}
        onKeyUp={(e) => this.onKeyUp(e)}
        tabIndex={0}
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        isSplit={isSplit}
        // @ts-expect-error TS(2339) FIXME: Property 'selectNode' does not exist on type 'Sele... Remove this comment to see the full error message
        ref={(selectNode) => (this.selectNode = selectNode)}
        data-tip={disabled ? '' : tooltip}
        fullWidth={fullWidth}
        aria-haspopup="true"
        aria-expanded={this.state.isOpen}
      >
        {this.renderSelectButton()}
        {this.renderSelectPopup()}
      </Wrapper>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Select.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Function to call on selected item click */
  onSelectClick: PropTypes.func,

  /** Label to display on the Select button */
  label: PropTypes.string,

  /** Items to display in the popup */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      /** If true, item will be hidden while searching */
      hideOnSearch: PropTypes.bool,
    }),
  ).isRequired,

  /** Is the Select component part of the Split Button */
  isSplit: PropTypes.bool,

  /** Type of the select component  */
  type: PropTypes.oneOf(['primary', 'secondary']),

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** Position of the popup right or left */
  xPosition: PropTypes.oneOf(['right', 'left']),

  /** Position of the popup top or bottom */
  yPosition: PropTypes.oneOf(['top', 'bottom']),

  /** Offset the popup horizontally */
  horizontalOffset: PropTypes.string,

  /** Icon to show in the Button */
  icon: PropTypes.node,

  /** Does the Select have a search bar */
  hideSearch: PropTypes.bool,

  /** Custom Button component */
  customButton: PropTypes.func,

  /** Custom keys to used in the Items array */
  keyMap: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),

  /** Can the select have multiple items selected */
  multiSelect: PropTypes.bool,

  /** If false don't enable keyboard navigation */
  shortcutsEnabled: PropTypes.bool,

  /** Search placeholder */
  searchPlaceholder: PropTypes.string,

  /** Tooltip to show on the component */
  tooltip: PropTypes.string,

  /** Should the component be opened */
  isOpen: PropTypes.bool,

  /** Callback to be called when the Select menu gets closed */
  onClose: PropTypes.func,

  /** Does the button have only an icon and no label */
  hasIconOnly: PropTypes.bool,

  /** Space between the dropdown and the button */
  marginTop: PropTypes.string,

  /** Indicated whether the select has a custom action */
  hasCustomAction: PropTypes.bool,

  /** The custom action item */
  onCustomItemClick: PropTypes.func,

  /** A custom label for a custom item */
  customItemLabel: PropTypes.string,

  /** An array of objects containing HotKeys */
  hotKeys: PropTypes.arrayOf(
    PropTypes.shape({
      hotKey: PropTypes.number,
      onKeyPress: PropTypes.func,
    }),
  ),

  /** Is the select full width */
  fullWidth: PropTypes.bool,

  /** Should capitalize Item Label */
  capitalizeItemLabel: PropTypes.bool,

  /** Boolean to check if the select is triggered by an input instead of a button */
  isInputSearch: PropTypes.bool,

  /** Indicates if the select popup should be visible */
  selectPopupVisible: PropTypes.bool,

  /** Custom message to display when no results were found */
  noResultsCustomMessage: PropTypes.string,

  /** Should clear the search field's value when the main input is blurred  */
  clearSearchOnBlur: PropTypes.bool,

  /** Prop */
  searchInputProps: PropTypes.shape({}),

  /** Aligns text in Select to the left  */
  textToLeft: PropTypes.bool,

  /** onOpen function to fire when the Select menu is open */
  onOpen: PropTypes.func,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Select.defaultProps = {
  label: '',
  isSplit: false,
  type: 'secondary',
  size: 'medium',
  xPosition: 'left',
  yPosition: 'bottom',
  horizontalOffset: undefined,
  disabled: undefined,
  icon: undefined,
  hideSearch: false,
  customButton: undefined,
  onSelectClick: undefined,
  keyMap: undefined,
  multiSelect: false,
  shortcutsEnabled: true,
  searchPlaceholder: 'Search',
  tooltip: undefined,
  isOpen: false,
  onClose: undefined,
  hasIconOnly: false,
  marginTop: undefined,
  hasCustomAction: false,
  onCustomItemClick: undefined,
  customItemLabel: undefined,
  hotKeys: undefined,
  fullWidth: undefined,
  capitalizeItemLabel: true,
  isInputSearch: false,
  selectPopupVisible: false,
  noResultsCustomMessage: 'No matches found',
  clearSearchOnBlur: false,
  searchInputProps: {
    clearSearchOnBlur: true,
  },
  textToLeft: false,
  onOpen: null,
}
