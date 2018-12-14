import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';
import {
  Wrapper, SelectStyled, SelectItems, Arrow,
} from './style';
import SelectItem from './SelectItem/SelectItem';
import Button from '../Button/Button';
import { SelectButton } from '../Button/style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Search from '../Search/Search';

/** Select component that opens a popup menu on click and displays items that can be selected */
export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: props.items,
    };
  }

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  // Close the popover
  closePopover = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  handleSelectOption = (option, event) => {
    const { onSelectClick } = this.props;
    onSelectClick(option, event);
  };

  onClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  onButtonClick = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  onMoveUp = () => {
    const { items } = this.props;
    const { selectedItem } = this.state;
    const itemsLength = items.length;

    for (let i = selectedItem - 1; i < itemsLength && itemsLength > 0 && i >= 0; i -= 1) {
      if (items[i]) {
        this.setState({ selectedItem: i % itemsLength });
        break;
      }
    }
  };

  onMoveDown = () => {
    const { items } = this.props;
    const { selectedItem } = this.state;
    const itemsLength = items.length;

    if (!selectedItem) {
      this.setState({
        selectedItem: 0,
      }, () => this.updateSelectedItemPosition(selectedItem, itemsLength, items));
    } else {
      this.updateSelectedItemPosition(selectedItem, itemsLength, items);
    }
  };

  onAddItem = () => {
    const { onSelectClick } = this.props;
    const { items, selectedItem } = this.state;
    onSelectClick(items[selectedItem]);
  };

  updateSelectedItemPosition = (selectedItem, itemsLength, items) => {
    for (let i = selectedItem + 1; i < itemsLength && itemsLength > 0 && i > 0; i += 1) {
      if (items[i]) {
        this.setState({ selectedItem: i % itemsLength });
        break;
      }
    }
  };

  onSearchChange = (searchValue) => {
    const { items } = this.props;

    const filteredItems = items.filter(item => includes(item.title.toLowerCase(), searchValue.toLowerCase()));
    this.setState({
      items: filteredItems,
    });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };


  render() {
    const {
      label, isSplit, type, size, position, disabled, icon, hasSearch,
    } = this.props;
    const { isOpen, selectedItem, items } = this.state;

    return (
      <Wrapper role="button" onClick={this.onClick} onKeyUp={this.onClick} tabIndex={0} isSplit={isSplit}>
        {isSplit ? (
          <SelectButton type={type} disabled={disabled} onClick={!disabled ? this.onButtonClick : undefined}>
            <ChevronDown color={type === 'primary' && !disabled ? 'white' : 'grayDark'} />
          </SelectButton>
        ) : (
          <Button size={size} items={items} type={type} label={label} icon={icon} onClick={this.onButtonClick} isSelect />
        )}
        <SelectStyled isOpen={isOpen} position={position}>
          <Search
            onChange={this.onSearchChange}
            hasSearch={hasSearch}
            onMoveDown={this.onMoveDown}
            onMoveUp={this.onMoveUp}
            onAddItem={this.onAddItem}
            onClose={this.onClose}
          />
          <SelectItems id="select-items">
            {items.map((item, idx) => <SelectItem selected={selectedItem === idx} key={item.id} item={item} onClick={event => this.handleSelectOption(item, event)} />)}
          </SelectItems>
        </SelectStyled>
        <Arrow isOpen={isOpen} isSplit={isSplit} position={position} />
      </Wrapper>
    );
  }
}

Select.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Function to call on selected item click */
  onSelectClick: PropTypes.func.isRequired,

  /** Label to display on the Select button */
  label: PropTypes.string,

  /** Items to display in the popup */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,

  /** Is the Select component part of the Split Button */
  isSplit: PropTypes.bool,

  /** Type of the select component  */
  type: PropTypes.oneOf(['primary', 'secondary']),

  /** Size of the Button */
  size: PropTypes.oneOf(['small', 'large', 'medium']),

  /** Position of the popup */
  position: PropTypes.oneOf(['top', 'bottom']),

  /** Icon to show in the Button */
  icon: PropTypes.node,

  /** Does the Select have a search bar */
  hasSearch: PropTypes.bool,
};

Select.defaultProps = {
  label: '',
  isSplit: false,
  type: 'secondary',
  size: 'medium',
  position: 'bottom',
  disabled: undefined,
  icon: undefined,
  hasSearch: false,
};
