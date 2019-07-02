import React, { Children } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

class Tooltip extends React.Component {
  /**
   * Aligns Tooltip horizontally in relation to the child
   *
   * @param child prop
   * @param tooltip element
   * @returns left position
   */
  static centerHorizontally(child, tooltip) {
    return (child.width / 2) - (tooltip.width / 2);
  }

  /**
   * Aligns Tooltip vertically in relation to the child
   *
   * @param child prop
   * @param tooltip element
   * @returns top position
   */
  static centerVertically(child, tooltip) {
    return (child.height / 2) + (tooltip.height / 2);
  }

  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.setTooltipPosition = this.setTooltipPosition.bind(this);
    this.state = {
      isVisible: false,
      isMultiline: false,
      top: '0',
      left: '0',
    };
  }

  componentDidMount() {
    const tooltipRect = this.tooltip.getBoundingClientRect();
    const maxWidth = 200;

    if (tooltipRect.width > maxWidth) {
      this.setState({
        isMultiline: true,
      });
    }

    this.setTooltipPosition();
    window.addEventListener("resize", this.setTooltipPosition);
  }

  /**
   * Update Tooltip position if the multiline state changes,
   * which means that the tooltip size updated.
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMultiline !== this.state.isMultiline) {
      this.setTooltipPosition();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setTooltipPosition);
  }

  /**
   * Adjusting the styles according to the desired position
   * The tooltip should be vertically or horizontally centered
   */
  setTooltipPosition() {
    const { position } = this.props;
    const gap = 8;
    const childNode = this.childNode.children;
    const childRect = childNode[0].getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();

    switch (position) {
      case 'top': {
        this.setState({
          top: `-${childRect.height + (tooltipRect.height) + gap}px`,
          left: `${Tooltip.centerHorizontally(childRect, tooltipRect)}px`,
        });
        break;
      }
      case 'bottom': {
        this.setState({
          top: `${gap}px`,
          left: `${Tooltip.centerHorizontally(childRect, tooltipRect)}px`,
        });
        break;
      }
      case 'left': {
        this.setState({
          left: `-${tooltipRect.width + gap}px`,
          top: `-${Tooltip.centerVertically(childRect, tooltipRect)}px`,
        });
        break;
      }
      case 'right': {
        this.setState({
          left: `${childRect.width + gap}px`,
          top: `-${Tooltip.centerVertically(childRect, tooltipRect)}px`,
        });
        break;
      }
      default:
        this.setState({
          top: `${gap}px`,
        });
    }
  }

  toggleTooltip(isVisible) {
    this.setState({
      isVisible
    });
  }

  static renderLabel(label, hotkey) {
    if (hotkey) {
      return <Styles.Label color="#B8B8B8" isHotkey>{hotkey}</Styles.Label>;
    }
  }

  render() {
    const { children, label, position, hotkey } = this.props;
    const { isVisible, isMultiline, top, left } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.TooltipChildren
          innerRef={childNode => (this.childNode = childNode)}
          onMouseEnter={() => this.toggleTooltip(true)}
          onMouseLeave={() => this.toggleTooltip(false)}
        >
          {Children.only(children)}
        </Styles.TooltipChildren>
        <Styles.TooltipWrapperStyled>
          <Styles.TooltipStyled
            innerRef={tooltip => (this.tooltip = tooltip)}
            isVisible={isVisible}
            position={position}
            top={top}
            left={left}
          >
            {label.length > 0 && (
              <Styles.Label
                color='white'
                isMultiline={isMultiline}
              >
                {label}
                {Tooltip.renderLabel(label, hotkey)}
              </Styles.Label>
            )}
          </Styles.TooltipStyled>
        </Styles.TooltipWrapperStyled>
      </Styles.Wrapper>
    )
  }
}

Tooltip.propTypes = {
  /** The component being wrapped, expects a single child */
  children: PropTypes.node,

  /** The tooltip label */
  label: PropTypes.string,

  /** The tooltip position */
  position: PropTypes.string,

  /** The tooltip position */
  hotkey: PropTypes.string,
};

Tooltip.defaultProps = {
  children: undefined,
  position: 'bottom',
  label: '',
  hotkey: '',
};

export default Tooltip;
