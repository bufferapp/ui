/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react'
import PropTypes from 'prop-types'
import { DropdownItems, Item } from './style'
import PopupMenu from './PopupMenu/PopupMenu'
import { keyCode } from './keyCode'

export default class DropdownMenu extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      usingMouse: false,
    }

    // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
    this.keyCode = keyCode

    this.handleKeydown = this.handleKeydown.bind(this)
    this.handlePopupBlur = this.handlePopupBlur.bind(this)
    this.handleMousedown = this.handleMousedown.bind(this)
  }

  componentDidMount() {
    // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Dropd... Remove this comment to see the full error message
    this.itemsNode.addEventListener('keydown', this.handleKeydown)
    // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Dropd... Remove this comment to see the full error message
    this.itemsNode.addEventListener('mousedown', this.handleMousedown)
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Dropd... Remove this comment to see the full error message
    this.itemsNode.removeEventListener('keydown', this.handleKeydown)
    // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Dropd... Remove this comment to see the full error message
    this.itemsNode.removeEventListener('mousedown', this.handleMousedown)
  }

  handleMousedown = () => {
    this.setState({ usingMouse: true })
  }

  togglePopup = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
  isPopupOpen = () => this.state.isOpen

  openPopup = () => {
    this.setState({ isOpen: true })
  }

  closePopup = () => {
    this.setState({ isOpen: false })
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleKeydown = (event) => {
    let flag = false
    switch (event.keyCode) {
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
      case this.keyCode.SPACE:
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
      case this.keyCode.RETURN:
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
      case this.keyCode.DOWN:
        if (!this.isPopupOpen()) {
          this.openPopup()
          flag = true
        }
        break
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
      case this.keyCode.ESC:
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'Dropdow... Remove this comment to see the full error message
      case this.keyCode.TAB:
        this.closePopup()
        break
      default:
        break
    }

    this.setState({ usingMouse: false })

    if (flag) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handlePopupBlur = (event) => {
    const outsideOfPopup = !event.currentTarget.contains(event.relatedTarget)
    setTimeout(() => {
      if (this.isPopupOpen() && outsideOfPopup) {
        this.closePopup()
      }
    }, 300)
  }

  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'menubarItem' does not exist on type 'Rea... Remove this comment to see the full error message
      menubarItem,
      // @ts-expect-error TS(2339) FIXME: Property 'items' does not exist on type 'Readonly<... Remove this comment to see the full error message
      items,
      // @ts-expect-error TS(2339) FIXME: Property 'ariaLabel' does not exist on type 'Reado... Remove this comment to see the full error message
      ariaLabel,
      // @ts-expect-error TS(2339) FIXME: Property 'ariaLabelPopup' does not exist on type '... Remove this comment to see the full error message
      ariaLabelPopup,
      // @ts-expect-error TS(2339) FIXME: Property 'horizontalOffset' does not exist on type... Remove this comment to see the full error message
      horizontalOffset,
      // @ts-expect-error TS(2339) FIXME: Property 'xPosition' does not exist on type 'Reado... Remove this comment to see the full error message
      xPosition,
      // @ts-expect-error TS(2339) FIXME: Property 'onOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
      onOpen,
    } = this.props

    const MenubarItem = React.cloneElement(menubarItem)

    return (
      <DropdownItems
        // @ts-expect-error TS(2339) FIXME: Property 'itemsNode' does not exist on type 'Dropd... Remove this comment to see the full error message
        ref={(itemsNode) => (this.itemsNode = itemsNode)}
        role="menubar"
        aria-label={ariaLabel}
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        usingMouse={this.state.usingMouse}
      >
        {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
        <Item role="none" menuOption>
          <MenubarItem.type
            {...MenubarItem.props}
            role="menuitem"
            // @ts-expect-error TS(2322) FIXME: Type 'string' is not assignable to type 'number'.
            tabIndex="0"
            aria-haspopup="true"
            // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
            aria-expanded={this.state.isOpen}
            onKeyDown={(ev) => this.handleKeydown(ev)}
            onClick={(ev) => {
              this.togglePopup()
              ev.preventDefault()
            }}
          />
          <PopupMenu
            // @ts-expect-error TS(2322) FIXME: Type '{ role: string; xPosition: any; items: any; ... Remove this comment to see the full error message
            role="menu"
            xPosition={xPosition}
            items={items}
            aria-label={ariaLabelPopup}
            horizontalOffset={horizontalOffset}
            // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
            isOpen={this.state.isOpen}
            // @ts-expect-error TS(2339) FIXME: Property 'usingMouse' does not exist on type 'Read... Remove this comment to see the full error message
            usingMouse={this.state.usingMouse}
            closePopup={this.closePopup}
            // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
            onBlur={(event) => this.handlePopupBlur(event)}
            onOpen={onOpen}
          />
        </Item>
      </DropdownItems>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DropdownMenu.propTypes = {
  /** Link in the NavBar that triggers the popup */
  menubarItem: PropTypes.node.isRequired,

  /** Aria label for list component */
  ariaLabel: PropTypes.string.isRequired,

  /** Aria label for popup menu, it should preferibly be the same as the menubarItem name */
  ariaLabelPopup: PropTypes.string,

  /** xPosition for Dropdown menu */
  xPosition: PropTypes.string,

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
DropdownMenu.defaultProps = {
  ariaLabelPopup: null,
  xPosition: 'right',
  onOpen: null,
}
