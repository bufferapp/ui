import React from 'react';
import PropTypes from 'prop-types';

import { PopupMenuStyled, ItemDivider } from '../PopupMenu/style';
import ButtonItem from '../ButtonItem/ButtonItem';
import InstagramIcon from '../../Icon/Icons/Instagram';
import TwitterIcon from '../../Icon/Icons/Twitter';
import FacebookIcon from '../../Icon/Icons/Facebook';
import PinterestIcon from '../../Icon/Icons/Pinterest';
import { Item } from '../style';
import { keyCode } from '../keyCode';
import { instagram, twitter, facebook, pinterest } from '../../style/colors';
import { ORG_SWITCHER } from '../../NavBar/NavBar';

export default class Submenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedItem: -1,
    };

    this.firstItem = props.items.length > 0 ? 0 : -1;
    this.lastItem = props.items.length - 1 || -1;
    this.keyCode = keyCode;

    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    this.submenu.addEventListener('keydown', this.handleKeydown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen) {
      this.updateIfNeeded(prevProps);
    }
  }

  componentWillUnmount() {
    this.submenu.removeEventListener('keydown', this.handleKeydown);
  }

  setFocusToItem = index => {
    this.setState({ focusedItem: index });
  };

  setFocusToFirstItem = () => {
    this.setFocusToItem(0);
  };

  setFocusToNextItem = () => {
    const { focusedItem } = this.state;

    const newIndex = this.isLastItem(focusedItem)
      ? this.firstItem
      : focusedItem + 1;

    this.setFocusToItem(newIndex);
  };

  setFocusToPreviousItem = () => {
    const { focusedItem } = this.state;

    const newIndex = this.isFirstItem(focusedItem)
      ? this.lastItem
      : focusedItem - 1;

    this.setFocusToItem(newIndex);
  };

  isPopupOpen = () => this.props.isOpen;

  isFirstItem = index => index === this.firstItem;

  isLastItem = index => index === this.lastItem;

  handleKeydown = event => {
    let flag = false;

    switch (event.keyCode) {
      case this.keyCode.DOWN:
        if (this.isPopupOpen()) {
          this.setFocusToNextItem();
          flag = true;
        }
        break;
      case this.keyCode.UP:
        if (this.isPopupOpen()) {
          this.setFocusToPreviousItem();
        }
        flag = true;
        break;
      case this.keyCode.RIGHT:
        if (this.props.closeSubMenu) {
          this.props.closeSubMenu();
        }
        flag = true;
        break;
      case this.keyCode.ESC:
      case this.keyCode.TAB:
        if (this.props.closeSubMenu) {
          this.props.closeSubMenu();
        }
        break;
      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  getNetworkIcon = item => {
    if (item.network) {
      switch (item.network) {
        case 'instagram':
          return <InstagramIcon size="medium" color={instagram} />;
        case 'twitter':
          return <TwitterIcon size="medium" color={twitter} />;
        case 'facebook':
          return <FacebookIcon size="medium" color={facebook} />;
        case 'pinterest':
          return <PinterestIcon size="medium" color={pinterest} />;
        default:
        break;
      }
    }
  }

  updateIfNeeded(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.submenu.focus();
      this.setFocusToFirstItem();
    }
  }

  renderItems = items => {
    const { focusedItem } = this.state;
    
    return items.map((item, index) => {
      const shouldFocus = index === focusedItem && this.isPopupOpen();
      const type = item.network ? ORG_SWITCHER : '';
      item.icon = item.network ? this.getNetworkIcon(item) : item.icon;

      return [
        item.hasDivider && (
          <ItemDivider key={`${item.id}--divider`} role="none" />
        ),
        <Item key={`submenu-item-${index}`} role="none" type={type}>
          <ButtonItem
            index={index}
            item={item}
            shouldFocus={shouldFocus}
            ariaHaspopup={false}
          />
        </Item>
      ];
    })
  };

  render() {
    const {
      header,
      ariaLabelPopup,
      horizontalOffset,
      items,
      isOpen,
      onBlur,
      xPosition,
    } = this.props;

    return (
      <PopupMenuStyled
        ref={submenu => (this.submenu = submenu)}
        role="menu"
        aria-label={ariaLabelPopup}
        isOpen={isOpen}
        xPosition={xPosition}
        horizontalOffset={horizontalOffset}
        onBlur={onBlur}
        isSubmenu
      >
        <>
          <Item role="none" type="header">
            {header}
          </Item>
          {this.renderItems(items)}
        </>
      </PopupMenuStyled>
    );
  }
}

Submenu.propTypes = {
  header: PropTypes.string,

  /** Boolean to check if the Submenu is open */
  isOpen: PropTypes.bool.isRequired,

  /** Additional horizontal space for popup alignment */
  horizontalOffset: PropTypes.string,

  /** Horizontal alignment to display popup */
  xPosition: PropTypes.string,

  /** Function that handles onBlur event for popup */
  onBlur: PropTypes.func.isRequired,

  /** Function that handles closing the popup */
  closeSubMenu: PropTypes.func.isRequired,

  /** Aria label for popup menu, it should preferibly be the same as the menubarItem name */
  ariaLabelPopup: PropTypes.string,

  /** Items list to display in the menu */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

Submenu.defaultProps = {
  ariaLabelPopup: null,
  header: null,
  xPosition: 'left',
  horizontalOffset: null,
};
