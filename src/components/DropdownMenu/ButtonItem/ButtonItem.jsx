/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItemStyled, ButtonLabel, ChevronLeftIcon } from '../style';
// import { ORG_SWITCHER } from '../../NavBar/NavBar';

export default class ButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: '-1',
      ariaExpanded: 'false',
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
  }

  componentDidMount() {
    this.item.addEventListener('keydown', this.handleKeydown);
    this.item.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(prevProps) {
    if (this.props.shouldFocus) {
      this.updateTabIndexNeeded(prevProps);
    }
  }

  componentWillUnmount() {
    this.item.removeEventListener('keydown', this.handleKeydown);
    this.item.removeEventListener('click', this.handleClick);
  }

  setFocusToItem() {
    // const { tabIndex, ariaExpanded } = this.state;
    const { shouldFocus } = this.props;

    /*
    let flag = false;
    if (tabIndex === '0') {
      flag = ariaExpanded === 'true';
    }
    */
    // const flag = tabIndex === '0' && ariaExpanded === 'true';

    const newTabIndex = shouldFocus ? '0' : '-1';
    if (shouldFocus) {
      this.item.focus();
    }
    this.setState({ tabIndex: newTabIndex });
  }

  handleKeydown = event => {
    switch (event.keyCode) {
      case this.keyCode.RETURN:
        // this.item.click();
        break;
      case this.keyCode.DOWN:
        break;
      default:
        break;
    }
  };

  handleClick = () => {
    this.item.focus();
  };

  updateTabIndexNeeded(prevProps) {
    if (prevProps.shouldFocus !== this.props.shouldFocus) {
      this.setFocusToItem();
    }
  }

  /*
    var flag = false;
    for (var i = 0; i < this.menubarItems.length; i++) {
      var mbi = this.menubarItems[i];

      if (mbi.domNode.tabIndex == 0) {
        flag = mbi.domNode.getAttribute('aria-expanded') === 'true';
      }

      mbi.domNode.tabIndex = -1;
      if (mbi.popupMenu) {
        mbi.popupMenu.close();
      }
    }

    newItem.domNode.focus();
    newItem.domNode.tabIndex = 0;

    if (flag && newItem.popupMenu) {
      newItem.popupMenu.open();
    }
  */

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
          onItemClick();
          event.stopPropagation();
          event.preventDefault();
        }}
        tabIndex={this.state.tabIndex}
        aria-expanded={this.state.ariaExpanded}
        aria-haspopup={ariaHaspopup}
      >
        {ariaHaspopup && <ChevronLeftIcon />}
        {icon || null}
        <ButtonLabel hasIcon={hasIcon}>{title}</ButtonLabel>
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
    icon: PropTypes.string,
  }).isRequired,
};

ButtonItem.defaultProps = {
  shouldFocus: false,
  ariaHaspopup: false,
};
