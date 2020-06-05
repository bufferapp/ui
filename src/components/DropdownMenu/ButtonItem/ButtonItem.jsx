import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItemStyled, ButtonLabel } from '../style';
import { Checkmark as CheckmarkIcon } from '../../Icon';
import { green } from '../../style/colors';

export default class ButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: '-1',
    };
  }

  componentDidMount() {
    this.item.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.shouldFocus) {
      this.updateTabIndexIfNeeded(prevProps);
    }
  }

  componentWillUnmount() {
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

  handleClick = () => {
    this.item.focus();
  };

  updateTabIndexIfNeeded(prevProps) {
    if (prevProps.shouldFocus !== this.props.shouldFocus) {
      this.setFocusToItem();
    }
  }

  render() {
    const {
      item: { type, title, onItemClick, icon, selected },
      ariaHaspopup,
    } = this.props;
    const hasIcon = !!icon || !!selected;

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
      >
        {selected && <CheckmarkIcon color={green} />}
        {icon || null}
        <ButtonLabel hasIcon={hasIcon} type={type}>{title}</ButtonLabel>
      </ButtonItemStyled>
    );
  }
}

ButtonItem.propTypes = {
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
};
