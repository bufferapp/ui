import React from 'react';
import PropTypes from 'prop-types';
import '@reach/tooltip/styles.css';
import * as Styles from './style';
import {
  gray,
  white
} from '../style/colors';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.setTooltipPosition = this.setTooltipPosition.bind(this);
    this.state = {
      childWidth: 0,
    };
  }

  componentDidMount() {
    this.setTooltipPosition();
    window.addEventListener("resize", this.setTooltipPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setTooltipPosition);
  }

  setTooltipPosition() {
    // Getting the first child width to calculate Tooltip position
    if (this.tooltipWrapper) {
      const childWidth = this.tooltipWrapper.children[0].children[0].getBoundingClientRect().width;
      this.setState({
        childWidth,
      });
    }
  }

  /**
   * Adjusting the styles according to the desired position
   * The tooltip should be vertically or horizontally centered
   */
  getTooltipPosition(triggerRect, tooltipRect, position) {
    const { childWidth } = this.state;
    const gap = 8;
    const triggerCenter = triggerRect.left + childWidth / 2;
    const left = triggerCenter - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - 2;
    const verticalCenter = triggerRect.top + triggerRect.height - ((triggerRect.height + tooltipRect.height) / 2) - window.scrollY;

    const newPosition = {
      left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
      top: triggerRect.bottom + gap + window.scrollY,
    };

    switch (position) {
      case 'top':
        newPosition.top = triggerRect.top - tooltipRect.height - gap - window.scrollY;
        break;

      case 'right':
        newPosition.left = triggerRect.left + childWidth + gap + window.scrollX;
        newPosition.top = verticalCenter;
        break;

      case 'left':
        newPosition.left = triggerRect.left - tooltipRect.width - gap - window.scrollX;
        newPosition.top = verticalCenter;
        break;

      default:
    }

    return newPosition;
  }

  /**
   * Rendering label with hotkey option if available
   */
  renderLabel = (label, hotkey, customHTML) => (
    <Styles.LabelWrapper>
      {label && (
        <Styles.Label
          color={white}
        >
          <Styles.HotkeyWrapper>
            {label}
            {hotkey &&
              <Styles.Label color={gray} isHotkey>{hotkey}</Styles.Label>}
          </Styles.HotkeyWrapper>
        </Styles.Label>
      )}
      {customHTML && customHTML}
    </Styles.LabelWrapper>
  );

  render() {
    const { children, label, position, hotkey, customHTML } = this.props;

    // @todo: remove style from here and use the Styled component
    // We are currently adding the stylings with the style tag,
    // instead of the adding it in the Styled component
    // because we still need to figure out a way to load the css file
    // properly, and being able to use our customs styles.
    return (
      <Styles.TooltipWrapper ref={node => this.tooltipWrapper = node}>
        <Styles.TooltipStyled
          label={this.renderLabel(label, hotkey, customHTML)}
          position={(triggerRect, tooltipRect) => this.getTooltipPosition(triggerRect, tooltipRect, position)}
          style={Styles.TooltipStyle}
        >
          <div>
            {children}
          </div>
        </Styles.TooltipStyled>
      </Styles.TooltipWrapper>
    )
  }
}

Tooltip.propTypes = {
  /** The component being wrapped */
  children: PropTypes.node.isRequired,

  /** The tooltip label */
  label: PropTypes.string,

  /** The tooltip position */
  position: PropTypes.string,

  /** The tooltip position */
  hotkey: PropTypes.string,

  /** Custom HTML */
  customHTML: PropTypes.shape({ __html: PropTypes.string }),
};

Tooltip.defaultProps = {
  label: '',
  position: 'bottom',
  hotkey: '',
  customHTML: '',
};

export default Tooltip;
