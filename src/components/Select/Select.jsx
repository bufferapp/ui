
import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';
import SelectItem from './SelectItem/SelectItem';

const SelectStyled = style.div`  
  ${Styles.select};
`;

/** Select component */
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
    const { label, items, Button } = this.props;
    const { isOpen } = this.state;

    return (
      <Styles.wrapper role="button" onClick={this.onClick} onKeyUp={this.onClick} tabIndex={0}>
        <Button onButtonClick={this.onButtonClick}>{label}</Button>
        <SelectStyled isOpen={isOpen}>
          <Styles.SelectItems>
            {items.map(item => <SelectItem key={item.id} item={item} onClick={this.handleSelectOption} />)}
          </Styles.SelectItems>
        </SelectStyled>
        <Styles.selectArrow isOpen={isOpen} />
      </Styles.wrapper>
    );
  }
}

Select.propTypes = {
  onSelectClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  Button: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

Select.defaultProps = {
  label: '',
};
