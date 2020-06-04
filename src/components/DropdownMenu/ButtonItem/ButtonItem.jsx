import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItemStyled, ButtonLabel, ChevronLeftIcon } from '../style';

export default class ButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: '-1',
    };

    this.keyCode = Object.freeze({
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    });

    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    this.item.addEventListener('keydown', this.handleKeydown);
    this.item.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.shouldFocus) {
      this.updateTabIndexIfNeeded(prevProps);
    }
  }

  componentWillUnmount() {
    this.item.removeEventListener('keydown', this.handleKeydown);
    this.item.removeEventListener('click', this.handleClick);
  }

  setFocusToItem() {
    const { shouldFocus } = this.props;
    const newTabIndex = shouldFocus ? '0' : '-1';

    if (shouldFocus) {
      this.item.focus();
    }
    this.setState({ tabIndex: newTabIndex });
  }

  handleKeydown = event => {
    switch (event.keyCode) {
      case this.keyCode.LEFT: {
        const { onClickLeft } = this.props;
        if (onClickLeft) onClickLeft();
        break;
      }
      default:
        break;
    }
  };

  handleClick = () => {
    this.item.focus();
  };

  handleMouseover = () => {};

  handleFocus = () => {};

  updateTabIndexIfNeeded(prevProps) {
    if (prevProps.shouldFocus !== this.props.shouldFocus) {
      this.setFocusToItem();
    }
  }

  render() {
    const {
      item: { title, onItemClick, icon },
      ariaHaspopup,
    } = this.props;
    const hasIcon = ariaHaspopup || !!icon;

    return (
      <ButtonItemStyled
        ref={item => (this.item = item)}
        type="button"
        role="menuitem"
        fullWidth
        onClick={event => {
          if (onItemClick) onItemClick();
          event.stopPropagation();
          event.preventDefault();
        }}
        tabIndex={this.state.tabIndex}
        aria-haspopup={ariaHaspopup}
        onFocus={this.handleFocus}
        onMouseOver={this.handleMouseover}
      >
        {ariaHaspopup && <ChevronLeftIcon />}
        {icon || null}
        <ButtonLabel hasIcon={hasIcon}>{title}</ButtonLabel>
      </ButtonItemStyled>
    );
  }
}

ButtonItem.propTypes = {
  onClickLeft: PropTypes.func,
  shouldFocus: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

ButtonItem.defaultProps = {
  shouldFocus: false,
  ariaHaspopup: false,
  onClickLeft: () => {},
};
