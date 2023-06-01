import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchWrapper } from './style';
export default class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            search: '',
        };
        this.updateSearch = (search) => {
            this.setState({
                search,
            });
        };
        this.onChange = (event) => {
            const { onChange } = this.props;
            const search = event.target.value;
            onChange(search);
            this.updateSearch(search);
        };
        this.clearSearch = () => {
            const { onChange } = this.props;
            onChange('');
            this.updateSearch('');
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            setTimeout(() => this.inputRef.focus(), 50);
        }
    }
    render() {
        const { placeholder, onClick, height, clearSearchOnBlur, clearSearchOnFocus, } = this.props;
        const { search } = this.state;
        return (React.createElement(SearchWrapper, null,
            React.createElement(SearchInput, { placeholder: placeholder, type: "text", value: search, ref: (inputRef) => (this.inputRef = inputRef), onChange: (event) => this.onChange(event), onClick: onClick, onBlur: clearSearchOnBlur ? this.clearSearch : undefined, onFocus: clearSearchOnFocus ? this.clearSearch : undefined, height: height })));
    }
}
Search.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    height: PropTypes.string,
    clearSearchOnBlur: PropTypes.bool,
    clearSearchOnFocus: PropTypes.bool,
    onBlur: PropTypes.func,
};
Search.defaultProps = {
    placeholder: '',
    height: 'tall',
    isOpen: false,
    clearSearchOnBlur: false,
    clearSearchOnFocus: false,
    onClick: () => { },
    onBlur: () => { },
};
//# sourceMappingURL=Search.js.map