import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

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
    const childWidth = this.tooltipWrapper.children[0].children[0].getBoundingClientRect().width;
    this.setState({
      childWidth,
    });
  }

  /**
   * Adjusting the styles according to the desired position
   * The tooltip should be vertically or horizontally centered
   */
  getTooltipPosition(triggerRect, tooltipRect, position) {
    const { childWidth } = this.state;
    const triggerCenter = triggerRect.left + childWidth / 2;
    const left = triggerCenter - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - 2;

    const newPosition = {
      left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
      top: triggerRect.bottom + 8 + window.scrollY,
    };

    if (position === 'top') {
      newPosition.top = triggerRect.top - tooltipRect.height - 8 - window.scrollY;
    }

    return newPosition;
  }

  /**
   * Rendering label with hotkey option if available
   */
  renderLabel = (label, hotkey) => (
    <div>
      {label && (
        <Styles.Label
          color='white'
        >
          <Styles.HotkeyWrapper>
            {label}
            {hotkey &&
              <Styles.Label color="#B8B8B8" isHotkey>{hotkey}</Styles.Label>}
          </Styles.HotkeyWrapper>
        </Styles.Label>
      )}
    </div>
  );
  
  render() {
  const { children, label, position, hotkey } = this.props;
  
    return (
      <Styles.TooltipWrapper innerRef={node => this.tooltipWrapper = node}>
        <Styles.TooltipStyled
          label={this.renderLabel(label, hotkey)}
          position={(triggerRect, tooltipRect) => this.getTooltipPosition(triggerRect, tooltipRect, position)}
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
};

Tooltip.defaultProps = {
  label: '',
  position: 'bottom',
  hotkey: '',
};

export default Tooltip;