import React from 'react'
import PropTypes from 'prop-types'

import { Item, ItemDividerTitle } from '../style'
import { PopupMenuStyled, ItemDivider } from './style'
import ButtonItem from '../ButtonItem/ButtonItem'
import Tooltip from '../../Tooltip/Tooltip'
import { keyCode } from '../keyCode'
import TooltipLabel from '../TooltipLabel/TooltipLabel'

// @ts-expect-error TS(7031) FIXME: Binding element 'condition' implicitly has an 'any... Remove this comment to see the full error message
const OptionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default class PopupMenu extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)

    this.state = {
      focusedItem: -1,
      tabIndex: '-1',
    }

    // @ts-expect-error TS(2551) FIXME: Property 'firstItem' does not exist on type 'Popup... Remove this comment to see the full error message
    this.firstItem = props.items.length > 0 ? 0 : -1
    // @ts-expect-error TS(2551) FIXME: Property 'lastItem' does not exist on type 'PopupM... Remove this comment to see the full error message
    this.lastItem = props.items.length - 1 || -1
    // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'PopupMe... Remove this comment to see the full error message
    this.keyCode = keyCode

    this.handleKeydown = this.handleKeydown.bind(this)
  }

  componentDidMount() {
    // @ts-expect-error TS(2339) FIXME: Property 'popup' does not exist on type 'PopupMenu... Remove this comment to see the full error message
    this.popup.addEventListener('keydown', this.handleKeydown)
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  componentDidUpdate(prevProps) {
    this.updateIfNeeded(prevProps)
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2339) FIXME: Property 'popup' does not exist on type 'PopupMenu... Remove this comment to see the full error message
    this.popup.removeEventListener('keydown', this.handleKeydown)
  }

  closePopup = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'closePopup' does not exist on type 'Read... Remove this comment to see the full error message
    if (this.props.closePopup) {
      // @ts-expect-error TS(2339) FIXME: Property 'closePopup' does not exist on type 'Read... Remove this comment to see the full error message
      this.props.closePopup()
    }
    this.setState({ focusedItem: -1 })
  }

  // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
  isPopupOpen = () => this.props.isOpen

  // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  hasSubItems = (item) => item.subItems && item.subItems.length > 0

  // @ts-expect-error TS(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
  isFirstItem = (index) => index === this.firstItem

  // @ts-expect-error TS(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
  isLastItem = (index) => index === this.lastItem

  // @ts-expect-error TS(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
  setFocusToItem = (index) => {
    this.setState({ focusedItem: index })
  }

  setFocusToNextItem = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'focusedItem' does not exist on type 'Rea... Remove this comment to see the full error message
    const { focusedItem } = this.state

    const newIndex = this.isLastItem(focusedItem)
      ? // @ts-expect-error TS(2551) FIXME: Property 'firstItem' does not exist on type 'Popup... Remove this comment to see the full error message
               this.firstItem
      : focusedItem + 1

    this.setFocusToItem(newIndex)
  }

  setFocusToPreviousItem = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'focusedItem' does not exist on type 'Rea... Remove this comment to see the full error message
    const { focusedItem } = this.state

    const newIndex = this.isFirstItem(focusedItem)
      ? // @ts-expect-error TS(2551) FIXME: Property 'lastItem' does not exist on type 'PopupM... Remove this comment to see the full error message
               this.lastItem
      : focusedItem - 1

    this.setFocusToItem(newIndex)
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleKeydown = (event) => {
    let flag = false
    switch (event.keyCode) {
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'PopupMe... Remove this comment to see the full error message
      case this.keyCode.DOWN:
        if (this.isPopupOpen()) {
          this.setFocusToNextItem()
        }
        flag = true
        break
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'PopupMe... Remove this comment to see the full error message
      case this.keyCode.UP:
        if (this.isPopupOpen()) {
          this.setFocusToPreviousItem()
        }
        flag = true
        break
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'PopupMe... Remove this comment to see the full error message
      case this.keyCode.ESC:
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'PopupMe... Remove this comment to see the full error message
      case this.keyCode.TAB:
        this.closePopup()
        break
      default:
        break
    }

    if (flag) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
  focusPopupToItem = (index) => {
    // @ts-expect-error TS(2339) FIXME: Property 'popup' does not exist on type 'PopupMenu... Remove this comment to see the full error message
    this.popup.focus()
    this.setFocusToItem(index)
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  updateIfNeeded(prevProps) {
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { isOpen, usingMouse, onOpen } = this.props
    let newTabIndex = '-1'

    if (prevProps.isOpen !== isOpen) {
      if (isOpen) {
        if (usingMouse) newTabIndex = '0'
        this.focusPopupToItem(0)
        if (onOpen) {
          onOpen()
        }
      } else {
        this.setFocusToItem(-1)
      }

      this.setState({ tabIndex: newTabIndex })
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'items' implicitly has an 'any' type.
  renderItems = (items) => {
    // @ts-expect-error TS(2339) FIXME: Property 'focusedItem' does not exist on type 'Rea... Remove this comment to see the full error message
    const { focusedItem } = this.state

    // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
    return items.map((item, index) => {
      const hasSubItems = this.hasSubItems(item)
      // @ts-expect-error TS(2339) FIXME: Property 'usingMouse' does not exist on type 'Read... Remove this comment to see the full error message
      const shouldFocus = index === focusedItem && !this.props.usingMouse
      const type = index === 0 ? 'header' : ''
      const { defaultTooltipMessage } = item

      return [
        item.hasDivider && (
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          <ItemDivider key={`${item.id}--divider`} role="none" type={type}>
            {item.dividerTitle && (
              <ItemDividerTitle>{item.dividerTitle}</ItemDividerTitle>
            )}
          </ItemDivider>
        ),
        <OptionalWrapper
          key={`item-wrapper-${index}`}
          condition={hasSubItems || defaultTooltipMessage}
          // @ts-expect-error TS(7006) FIXME: Parameter 'children' implicitly has an 'any' type.
          wrapper={(children) => {
            const tooltip = (
              <TooltipLabel
                maxItems={5}
                items={item.subItems}
                defaultMessage={defaultTooltipMessage}
              />
            )
            return (
              <Tooltip
                // @ts-expect-error TS(2322) FIXME: Type '{ children: any; customLabel: Element; posit... Remove this comment to see the full error message
                customLabel={tooltip}
                position="left"
                verticalAlign="top"
              >
                {children}
              </Tooltip>
            )
          }}
        >
          {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
          <Item key={`item-${index}`} role="none" type={item.type}>
            <ButtonItem
              // @ts-expect-error TS(2322) FIXME: Type '{ index: any; item: any; shouldFocus: boolea... Remove this comment to see the full error message
              index={index}
              item={item}
              shouldFocus={shouldFocus}
              ariaHaspopup={false}
            />
          </Item>
        </OptionalWrapper>,
      ]
    })
  }

  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'ariaLabelPopup' does not exist on type '... Remove this comment to see the full error message
      ariaLabelPopup,
      // @ts-expect-error TS(2339) FIXME: Property 'horizontalOffset' does not exist on type... Remove this comment to see the full error message
      horizontalOffset,
      // @ts-expect-error TS(2339) FIXME: Property 'items' does not exist on type 'Readonly<... Remove this comment to see the full error message
      items,
      // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
      isOpen,
      // @ts-expect-error TS(2339) FIXME: Property 'onBlur' does not exist on type 'Readonly... Remove this comment to see the full error message
      onBlur,
      // @ts-expect-error TS(2339) FIXME: Property 'xPosition' does not exist on type 'Reado... Remove this comment to see the full error message
      xPosition,
    } = this.props

    return (
      <PopupMenuStyled
        // @ts-expect-error TS(2339) FIXME: Property 'popup' does not exist on type 'PopupMenu... Remove this comment to see the full error message
        ref={(popup) => (this.popup = popup)}
        role="menu"
        aria-label={ariaLabelPopup}
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        isOpen={isOpen}
        xPosition={xPosition}
        horizontalOffset={horizontalOffset}
        onBlur={onBlur}
        // @ts-expect-error TS(2339) FIXME: Property 'tabIndex' does not exist on type 'Readon... Remove this comment to see the full error message
        tabIndex={this.state.tabIndex}
        onKeyDown={(ev) => this.handleKeydown(ev)}
      >
        {this.renderItems(items)}
      </PopupMenuStyled>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
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
    }),
  ).isRequired,

  /** onOpen function to fire when the Dropdown menu is open */
  onOpen: PropTypes.func,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
PopupMenu.defaultProps = {
  ariaLabelPopup: null,
  horizontalOffset: null,
  xPosition: 'left',
  usingMouse: false,
  onOpen: null,
}
