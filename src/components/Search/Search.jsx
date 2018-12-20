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

  componentDidMount() {
    if (this.inputRef.current) setTimeout(() => this.inputRef.current.focus(), 10);
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
      onMoveDown, onMoveUp, onAddItem, onClose,
    } = this.props;
    return {
      moveUp: () => {
        onMoveUp();
      },
      moveDown: () => {
        onMoveDown();
      },
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
      shortcutsEnabled, placeholder, hasSearch,
    } = this.props;

    const { search } = this.state;

    return (
      <SearchWrapper keyMap={map} handlers={shortcutsEnabled ? this.getHotkeyHandlers() : undefined} hasSearch={hasSearch}>
        <SearchInput
          placeholder={placeholder}
          type="text"
          value={search}
          hasSearch={hasSearch}
          ref={ref => this.inputRef = ref}
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
  onAddItem: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

Search.defaultProps = {
  shortcutsEnabled: true,
  placeholder: 'Search',
  hasSearch: false,
};
