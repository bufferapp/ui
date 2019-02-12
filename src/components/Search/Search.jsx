import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';

const map = {
  close: 'esc',
  addItem: 'enter',
  moveUp: 'up',
  moveDown: 'down',
};

/** Search input that filters the Select items and adds keyboard navigation */
export default class Search extends React.Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.inputRef.focus();
  }

  onChange = (event) => {
    const { onChange } = this.props;
    const search = event.target.value;

    onChange(search);
    this.setState({
      search,
    });
  }

  getHotkeyHandlers = () => {
    const {
      onAddItem, onClose,
    } = this.props;
    return {
      addItem: () => {
        onAddItem();
      },
      close: () => {
        onClose();
      },
    };
  };

  render() {
    const {
      shortcutsEnabled, placeholder,
    } = this.props;

    const { search } = this.state;

    return (
      <SearchWrapper keyMap={map} handlers={shortcutsEnabled ? this.getHotkeyHandlers() : undefined}>
        <SearchInput
          placeholder={placeholder}
          type="text"
          value={search}
          ref={inputRef => this.inputRef = inputRef}
          onChange={event => this.onChange(event)}
        />
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  /** If false don't enable keyboard navigation */
  shortcutsEnabled: PropTypes.bool,

  /** Search placeholder */
  placeholder: PropTypes.string,

  /** Function to call on search input change */
  onChange: PropTypes.func.isRequired,

  /** Function to call on Enter click */
  onAddItem: PropTypes.func.isRequired,

  /** Function to call on Esc click */
  onClose: PropTypes.func.isRequired,
};

Search.defaultProps = {
  shortcutsEnabled: true,
  placeholder: 'Search',
};
