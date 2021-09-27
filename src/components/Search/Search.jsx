import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';

/** Search input that filters the Select items and adds keyboard navigation */
export default class Search extends React.Component {
  state = {
    search: '',
  };

  componentDidUpdate(prevProps) {
    if(prevProps.isOpen !== this.props.isOpen){
      setTimeout(()=> this.inputRef.focus(), 50)
    }
  }

  updateSearch = (search) => {
    this.setState({
      search,
    });
  }

  onChange = (event) => {
    const { onChange } = this.props;
    const search = event.target.value;

    onChange(search);
    this.updateSearch(search);
  }

  clearSearch = () => {
    const { onChange } = this.props;

    onChange('');
    this.updateSearch('');
  }

  render() {
    const {
      placeholder,
      onClick,
      height,
      clearSearchOnBlur,
      clearSearchOnFocus,
    } = this.props;

    const { search } = this.state;

    return (
      <SearchWrapper>
        <SearchInput
          placeholder={placeholder}
          type="text"
          value={search}
          ref={inputRef => this.inputRef = inputRef}
          onChange={event => this.onChange(event)}
          onClick={onClick}
          onBlur={clearSearchOnBlur ? this.clearSearch : undefined}
          onFocus={clearSearchOnFocus ? this.clearSearch : undefined}
          height={height}
        />
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  /** Search placeholder */
  placeholder: PropTypes.string,

  /** Function to call on search input change */
  onChange: PropTypes.func.isRequired,

  /** Is the select menu open */
  isOpen: PropTypes.bool,

  /** Is onClick event */
  onClick: PropTypes.func,

  /** Input height */
  height: PropTypes.string,

  /** Should the search clear on blur */
  clearSearchOnBlur: PropTypes.bool,

  /** Should the search clear on focus */
  clearSearchOnFocus: PropTypes.bool,

  /** Is onBlur event */
  onBlur: PropTypes.func
};

Search.defaultProps = {
  placeholder: '',
  height: 'tall',
  isOpen: false,
  clearSearchOnBlur: false,
  clearSearchOnFocus: false,
  onClick: () => {},
  onBlur: () => {}
}
