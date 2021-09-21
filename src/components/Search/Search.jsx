import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';

/** Search input that filters the Select items and adds keyboard navigation */
export default class Search extends React.Component {
  state = {
    controlled: false,
    search: '',
  };

  static getDerivedStateFromProps = (props, state) => {
    // Allows controlling input. If value is not passed,
    // state will be managed internally.
    if (props.value !== state.value) {
      return {
        ...state,
        controlled: true,
        search: props.value
      }
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.isOpen !== this.props.isOpen){
      setTimeout(()=> this.inputRef.focus(), 50)
    }
  }


  onChange = (event) => {
    const { onChange } = this.props;
    const { controlled } = this.state;

    const search = event.target.value;

    onChange(search);
    // Only update state if not controlled to save re-renders
    if (!controlled) {
      this.setState({
        search,
      });
    }
  }

  clearSearch = () => {
    const { onChange } = this.props;
    const { controlled } = this.state;

    onChange('');
    // Only update state if not controlled to save re-renders
    if (!controlled) {
      this.setState({
        search: '',
      });
    }
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
          clearSearchOnBlur={clearSearchOnBlur}
          onBlur={clearSearchOnBlur ? this.clearSearch : undefined}
          onFocus={clearSearchOnFocus ? this.clearSearch : undefined}
          height={height}
        />
      </SearchWrapper>
    );
  }
}

export const searchPropTypes = {
  /** Search placeholder */
  placeholder: PropTypes.string,

  /** The value of the input. Should only be provided if input is controlled. */
  value: PropTypes.string,

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

Search.propTypes = searchPropTypes;

Search.defaultProps = {
  placeholder: '',
  value: undefined,
  height: 'tall',
  isOpen: false,
  clearSearchOnBlur: false,
  clearSearchOnFocus: false,
  onClick: () => {},
  onBlur: () => {}
}
