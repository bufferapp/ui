import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, SelectStyled, SelectItems, Arrow,
} from './style';
import SelectItem from './SelectItem/SelectItem';
import Button from '../Button/Button';
import { SelectButton } from '../Button/style';
import ChevronDown from '../Icon/Icons/ChevronDown';

/** Select component that opens a popup menu on click and displays items that can be selected */
export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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


  render() {
    const {
      label, items, isSplit, type, size, position, disabled,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrapper role="button" onClick={this.onClick} onKeyUp={this.onClick} tabIndex={0} isSplit={isSplit}>
        {isSplit ? (
          <SelectButton type={type} disabled={disabled} onClick={!disabled ? this.onButtonClick : undefined}>
            <ChevronDown type={disabled ? 'secondary' : 'primary'} />
          </SelectButton>
        ) : (
          <Button size={size} items={items} type={type} label={label} onClick={this.onButtonClick} isSelect />
        )}
        <SelectStyled isOpen={isOpen} position={position}>
          <SelectItems>
            {items.map(item => <SelectItem key={item.id} item={item} onClick={this.handleSelectOption} />)}
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
};

Select.defaultProps = {
  label: '',
  isSplit: false,
  type: 'secondary',
  size: 'medium',
  position: 'bottom',
  disabled: undefined,
};
