import React from 'react'
import PropTypes from 'prop-types'
import { ButtonItemStyled, ButtonLabel } from '../style'
import { Checkmark as CheckmarkIcon } from '../../Icon'
import { green } from '../../style/colors'
import { keyCode } from '../keyCode'

export default class ButtonItem extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)

    this.state = {
      tabIndex: '-1',
    }

    // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'ButtonI... Remove this comment to see the full error message
    this.keyCode = keyCode
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  componentDidMount() {
    // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
    this.item.addEventListener('click', this.handleClick)
    // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
    this.item.addEventListener('keydown', this.handleKeydown)
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  componentDidUpdate(prevProps) {
    // @ts-expect-error TS(2339) FIXME: Property 'shouldFocus' does not exist on type 'Rea... Remove this comment to see the full error message
    if (this.props.shouldFocus) {
      this.updateTabIndexIfNeeded(prevProps)
    }
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
    this.item.removeEventListener('click', this.handleClick)
    // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
    this.item.removeEventListener('keydown', this.handleKeydown)
  }

  setFocusToItem() {
    // @ts-expect-error TS(2339) FIXME: Property 'shouldFocus' does not exist on type 'Rea... Remove this comment to see the full error message
    const { shouldFocus } = this.props
    const newTabIndex = shouldFocus ? '0' : '-1'

    if (shouldFocus) {
      // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
      this.item.focus()
    }
    this.setState({ tabIndex: newTabIndex })
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleKeydown = (event) => {
    let flag = false
    switch (event.keyCode) {
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'ButtonI... Remove this comment to see the full error message
      case this.keyCode.SPACE:
      // @ts-expect-error TS(2339) FIXME: Property 'keyCode' does not exist on type 'ButtonI... Remove this comment to see the full error message
      case this.keyCode.RETURN:
        {
          const {
            // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            item: { onItemClick },
          } = this.props
          if (onItemClick) {
            onItemClick()
            flag = true
          }
        }
        break
      default:
        break
    }

    if (flag) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  handleClick = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'ButtonItem... Remove this comment to see the full error message
    this.item.focus()
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  updateTabIndexIfNeeded(prevProps) {
    // @ts-expect-error TS(2339) FIXME: Property 'shouldFocus' does not exist on type 'Rea... Remove this comment to see the full error message
    if (prevProps.shouldFocus !== this.props.shouldFocus) {
      this.setFocusToItem()
    }
  }

  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'item' does not exist on type 'Readonly<{... Remove this comment to see the full error message
      item: { type, title, onItemClick, icon, selected, disabled, colors, tag },
      // @ts-expect-error TS(2339) FIXME: Property 'ariaHaspopup' does not exist on type 'Re... Remove this comment to see the full error message
      ariaHaspopup,
    } = this.props
    const hasIcon = !!icon || !!selected

    return (
      <ButtonItemStyled
        // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
        ref={(item) => (this.item = item)}
        type="button"
        role="menuitem"
        fullWidth
        // @ts-expect-error TS(7006) FIXME: Parameter 'ev' implicitly has an 'any' type.
        onKeyDown={(ev) => this.handleKeydown(ev)}
        // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
        onClick={(event) => {
          if (onItemClick) onItemClick()
          event.stopPropagation()
          event.preventDefault()
        }}
        // @ts-expect-error TS(2339) FIXME: Property 'tabIndex' does not exist on type 'Readon... Remove this comment to see the full error message
        tabIndex={this.state.tabIndex}
        aria-haspopup={ariaHaspopup}
        disabled={disabled}
        colors={colors}
      >
        {selected && <CheckmarkIcon color={green} />}
        {icon || null}
        <ButtonLabel hasIcon={hasIcon} type={type}>
          {title}
        </ButtonLabel>
        {tag || null}
      </ButtonItemStyled>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
ButtonItem.propTypes = {
  shouldFocus: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    colors: PropTypes.shape({
      title: PropTypes.string,
      iconHover: PropTypes.string,
    }),
  }).isRequired,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ButtonItem.defaultProps = {
  shouldFocus: false,
  ariaHaspopup: false,
}
