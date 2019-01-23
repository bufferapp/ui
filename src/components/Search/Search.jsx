import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';

/** Search input that filters the Select items and adds keyboard navigation */
export default class Search extends React.Component {
  state = {
    search: '',
  };

  onChange = (event) => {
    const { onChange } = this.props;
    const search = event.target.value;

    onChange(search);
    this.setState({
      search,
    });
  }

  render() {
    const {
      placeholder,
    } = this.props;

    const { search } = this.state;

    // adding a small delay to make sure the rendering is complete
    setTimeout(() => this.inputRef && this.inputRef.focus(), 10);

    return (
      <SearchWrapper>
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
  /** Search placeholder */
  placeholder: PropTypes.string.isRequired,

  /** Function to call on search input change */
  onChange: PropTypes.func.isRequired,
};
