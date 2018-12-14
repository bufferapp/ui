import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';

const map = {
  close: 'esc',
  addItem: 'enter',
  moveUp: 'up',
  moveDown: 'down',
};

export default class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.inputRef = React.createRef();
    this.state = {
      search: '',
    };
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
    const { onMoveDown, onMoveUp } = this.props;
    return {
      moveUp: () => {
        onMoveUp();
      },
      moveDown: () => {
        onMoveDown();
      },
    };
  };

  render() {
    const {
      shortcutsEnabled, placeholder, hasSearch,
    } = this.props;

    const { search } = this.state;

    // adding a small delay to make sure the rendering is complete
    if (this.inputRef.current) setTimeout(() => this.inputRef.current.focus(), 10);

    return (
      <SearchWrapper keyMap={map} handlers={shortcutsEnabled ? this.getHotkeyHandlers() : undefined} hasSearch={hasSearch}>
        <SearchInput
          placeholder={placeholder}
          type="text"
          value={search}
          hasSearch={hasSearch}
          ref={this.inputRef}
          onChange={event => this.onChange(event)}
        />
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  shortcutsEnabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  hasSearch: PropTypes.bool,
  onMoveUp: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired,
};

Search.defaultProps = {
  shortcutsEnabled: true,
  placeholder: 'Search',
  hasSearch: false,
};
