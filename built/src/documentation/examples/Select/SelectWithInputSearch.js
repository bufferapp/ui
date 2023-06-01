import React from 'react';
import Select from '@bufferapp/ui/Select';
import Search from '@bufferapp/ui/Search';
import { Search as SearchIcon } from '@bufferapp/ui/Icon';
const searchBarWrapperStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '5px 8px 4px 8px',
    border: '1px solid #B8B8B8',
    color: '#636363',
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 2px 0 2px transparent',
    transitionProperty: 'border-width, border-color, box-shadow',
    transitionDuration: '0.1s',
    transitionTimingFunction: 'ease-in',
};
export default function ExampleSelectWithInputSearch() {
    return (React.createElement(Select, { onSelectClick: () => true, customButton: (onButtonClick, onSearchChange) => (React.createElement("div", { style: searchBarWrapperStyle },
            React.createElement(SearchIcon, null),
            React.createElement(Search, { onClick: onButtonClick, onChange: onSearchChange, height: "small", placeholder: "Search Profiles", isOpen: true }))), isInputSearch: true, hideSearch: true, capitalizeItemLabel: false, hasCustomAction: false, noResultsCustomMessage: "No Profiles Found", items: [
            { id: '1', title: 'hamish' },
            { id: '2', title: 'juliana' },
            { id: '3', title: 'joel' },
        ] }));
}
//# sourceMappingURL=SelectWithInputSearch.js.map