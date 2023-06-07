import React from 'react'
import PropTypes from 'prop-types'
import '@reach/tooltip/styles.css'
import * as Styles from './style'
import { gray, white } from '../style/colors'

class Tooltip extends React.Component {
  tooltipWrapper: any = null

  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)

    this.setTooltipPosition = this.setTooltipPosition.bind(this)
    this.state = {
      childWidth: 0,
    }
  }

  componentDidMount() {
    this.setTooltipPosition()
    window.addEventListener('resize', this.setTooltipPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTooltipPosition)
  }

  setTooltipPosition() {
    // Getting the first child width to calculate Tooltip position
    if (this.tooltipWrapper) {
      const childWidth =
        this.tooltipWrapper.children[0].children[0].getBoundingClientRect()
          .width
      this.setState({
        childWidth,
      })
    }
  }

  /**
   * Adjusting the styles according to the desired position
   * The tooltip should be vertically or horizontally centered
   */
  // @ts-expect-error TS(7006) FIXME: Parameter 'triggerRect' implicitly has an 'any' ty... Remove this comment to see the full error message
  getTooltipPosition(triggerRect, tooltipRect, position, verticalAlign) {
    // @ts-expect-error TS(2339) FIXME: Property 'childWidth' does not exist on type 'Read... Remove this comment to see the full error message
    const { childWidth } = this.state
    const gap = 8
    const triggerCenter = triggerRect.left + childWidth / 2
    const left = triggerCenter - tooltipRect.width / 2
    const maxLeft = window.innerWidth - tooltipRect.width - 2
    const verticalCenter =
      triggerRect.top +
      triggerRect.height -
      (triggerRect.height + tooltipRect.height) / 2 -
      window.scrollY
    const verticalTop = triggerRect.top
    const topPosition = verticalAlign === 'top' ? verticalTop : verticalCenter

    const newPosition = {
      left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
      top: triggerRect.bottom + gap + window.scrollY,
    }

    switch (position) {
      case 'top':
        newPosition.top =
          triggerRect.top - tooltipRect.height - gap - window.scrollY
        break

      case 'right':
        newPosition.left = triggerRect.left + childWidth + gap + window.scrollX
        newPosition.top = topPosition
        break

      case 'left':
        newPosition.left =
          triggerRect.left - tooltipRect.width - gap - window.scrollX
        newPosition.top = topPosition
        break

      default:
    }

    return newPosition
  }

  /**
   * Rendering label with hotkey option if available
   */
  // @ts-expect-error TS(7006) FIXME: Parameter 'label' implicitly has an 'any' type.
  renderLabel = (label, hotkey, customLabel = null) => (
    <Styles.LabelWrapper>
      {label && (
        <Styles.Label color={white}>
          <Styles.HotkeyWrapper>
            {label}
            {hotkey && (
              <Styles.Label color={gray} isHotkey>
                {hotkey}
              </Styles.Label>
            )}
          </Styles.HotkeyWrapper>
        </Styles.Label>
      )}
      {customLabel}
    </Styles.LabelWrapper>
  )

  render() {
    const {
      children,
      // @ts-expect-error TS(2339) FIXME: Property 'label' does not exist on type 'Readonly<... Remove this comment to see the full error message
      label,
      // @ts-expect-error TS(2339) FIXME: Property 'position' does not exist on type 'Readon... Remove this comment to see the full error message
      position,
      // @ts-expect-error TS(2339) FIXME: Property 'verticalAlign' does not exist on type 'R... Remove this comment to see the full error message
      verticalAlign,
      // @ts-expect-error TS(2339) FIXME: Property 'hotkey' does not exist on type 'Readonly... Remove this comment to see the full error message
      hotkey,
      // @ts-expect-error TS(2339) FIXME: Property 'customLabel' does not exist on type 'Rea... Remove this comment to see the full error message
      customLabel,
      // @ts-expect-error TS(2339) FIXME: Property 'opacity' does not exist on type 'Readonl... Remove this comment to see the full error message
      opacity,
    } = this.props

    const renderTooltip = label || customLabel

    // @todo: remove style from here and use the Styled component
    // We are currently adding the stylings with the style tag,
    // instead of the adding it in the Styled component
    // because we still need to figure out a way to load the css file
    // properly, and being able to use our customs styles.
    return (
      <React.Fragment>
        {renderTooltip ? (
          <Styles.TooltipWrapper ref={(node) => (this.tooltipWrapper = node)}>
            <Styles.TooltipStyled
              label={this.renderLabel(label, hotkey, customLabel)}
              // @ts-expect-error TS(7006) FIXME: Parameter 'triggerRect' implicitly has an 'any' ty... Remove this comment to see the full error message
              position={(triggerRect, tooltipRect) =>
                this.getTooltipPosition(
                  triggerRect,
                  tooltipRect,
                  position,
                  verticalAlign,
                )
              }
              style={Styles.TooltipStyle}
              opacity={opacity}
            >
              <div>{children}</div>
            </Styles.TooltipStyled>
          </Styles.TooltipWrapper>
        ) : (
          <div>{children}</div>
        )}
      </React.Fragment>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Tooltip.propTypes = {
  /** The component being wrapped */
  children: PropTypes.node.isRequired,

  /** The tooltip label */
  label: PropTypes.string,

  /** The tooltip position */
  position: PropTypes.string,

  /** The tooltip vertical position: this only applies for left and right positioned tooltip */
  verticalAlign: PropTypes.string,

  /** The tooltip position */
  hotkey: PropTypes.string,

  /** Custom Label */
  customLabel: PropTypes.node,

  /** Custom Opacity */
  opacity: PropTypes.number,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Tooltip.defaultProps = {
  label: '',
  position: 'bottom',
  verticalAlign: 'center',
  hotkey: '',
  customLabel: '',
  opacity: 1,
}

export default Tooltip
