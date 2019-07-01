import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      isVisible: false,
      isMultiline: false,
      top: '0',
      left: '0',
    };
  }

  componentDidMount() {
    const { position } = this.props;
    const childRect = this.childNode.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();
    const gap = 8;
    const maxWidth = 8;

    switch (position) {
      case 'top': {
        this.setState({
          top: `-${childRect.height + (tooltipRect.height) + gap}px`
        });
        break;
      }
      case 'bottom': {
        this.setState({
          top: `${gap}px`
        });
        break;
      }
      case 'left': {
        this.setState({
          left: `-${tooltipRect.width + gap}px`,
          top: `-${(childRect.height/2) + (tooltipRect.height/2)}px`,
        });
        break;
      }
      case 'right': {
        this.setState({
          left: `${childRect.width + gap}px`,
          top: `-${(childRect.height/2) + (tooltipRect.height/2)}px`,
        });
        break;
      }
      default:
        this.setState({
          top: `${gap}px`
        });
    }

    if (tooltipRect.width > maxWidth) {
      this.setState({
        isMultiline: true,
      });
    }
  }

  toggleTooltip(isVisible) {
    this.setState({
      isVisible
    });
  }

  render() {
    const { children, label, position } = this.props;
    const { isVisible, isMultiline, top, left } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.TooltipChildren
          innerRef={childNode => (this.childNode = childNode)}
          onMouseEnter={() => this.toggleTooltip(true)}
          onMouseLeave={() => this.toggleTooltip(false)}
        >
          {children}
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
              </Styles.Label>
            )}
          </Styles.TooltipStyled>
        </Styles.TooltipWrapperStyled>
      </Styles.Wrapper>
    )
  }
}

Tooltip.propTypes = {
  /** The component being wrapped */
  children: PropTypes.node,

  /** The tooltip label */
  label: PropTypes.string,

  /** The tooltip position */
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  children: undefined,
  position: 'bottom',
  label: '',
};

export default Tooltip;
