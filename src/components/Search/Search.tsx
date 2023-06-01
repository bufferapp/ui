import React from 'react'
import PropTypes from 'prop-types'
import { SearchInput, SearchWrapper } from './style'

/** Search input that filters the Select items and adds keyboard navigation */
export default class Search extends React.Component {
  state = {
    search: '',
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'prevProps' implicitly has an 'any' type... Remove this comment to see the full error message
  componentDidUpdate(prevProps) {
    // @ts-expect-error TS(2339) FIXME: Property 'isOpen' does not exist on type 'Readonly... Remove this comment to see the full error message
    if (prevProps.isOpen !== this.props.isOpen) {
      // @ts-expect-error TS(2339) FIXME: Property 'inputRef' does not exist on type 'Search... Remove this comment to see the full error message
      setTimeout(() => this.inputRef.focus(), 50)
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'search' implicitly has an 'any' type.
  updateSearch = (search) => {
    this.setState({
      search,
    })
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  onChange = (event) => {
    // @ts-expect-error TS(2339) FIXME: Property 'onChange' does not exist on type 'Readon... Remove this comment to see the full error message
    const { onChange } = this.props
    const search = event.target.value

    onChange(search)
    this.updateSearch(search)
  }

  clearSearch = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'onChange' does not exist on type 'Readon... Remove this comment to see the full error message
    const { onChange } = this.props

    onChange('')
    this.updateSearch('')
  }

  render() {
    const {
      // @ts-expect-error TS(2339) FIXME: Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
      placeholder,
      // @ts-expect-error TS(2339) FIXME: Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
      onClick,
      // @ts-expect-error TS(2339) FIXME: Property 'height' does not exist on type 'Readonly... Remove this comment to see the full error message
      height,
      // @ts-expect-error TS(2339) FIXME: Property 'clearSearchOnBlur' does not exist on typ... Remove this comment to see the full error message
      clearSearchOnBlur,
      // @ts-expect-error TS(2339) FIXME: Property 'clearSearchOnFocus' does not exist on ty... Remove this comment to see the full error message
      clearSearchOnFocus,
    } = this.props

    const { search } = this.state

    return (
      <SearchWrapper>
        <SearchInput
          placeholder={placeholder}
          type="text"
          value={search}
          // @ts-expect-error TS(7006) FIXME: Parameter 'inputRef' implicitly has an 'any' type.
          ref={(inputRef) => (this.inputRef = inputRef)}
          // @ts-expect-error TS(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
          onChange={(event) => this.onChange(event)}
          onClick={onClick}
          onBlur={clearSearchOnBlur ? this.clearSearch : undefined}
          onFocus={clearSearchOnFocus ? this.clearSearch : undefined}
          height={height}
        />
      </SearchWrapper>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
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
  onBlur: PropTypes.func,
}

// @ts-expect-error TS(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
Search.defaultProps = {
  placeholder: '',
  height: 'tall',
  isOpen: false,
  clearSearchOnBlur: false,
  clearSearchOnFocus: false,
  onClick: () => {},
  onBlur: () => {},
}
