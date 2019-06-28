import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './style';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      isVisible: false
    };
  }

  toggleTooltip(isVisible) {
    this.setState({
      isVisible
    });
  }

  render() {
    const { children, label } = this.props;
    const { isVisible } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.TooltipChildren
          onMouseEnter={() => this.toggleTooltip(true)}
          onMouseLeave={() => this.toggleTooltip(false)}
        >
          {children}
        </Styles.TooltipChildren>
        <Styles.TooltipWrapperStyled>
          <Styles.TooltipStyled isVisible={isVisible}>
            {label.length > 0 && <Styles.Label color='white'>{label}</Styles.Label>}
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
};

Tooltip.defaultProps = {
  children: undefined,
  label: '',
};

export default Tooltip;
