import React from 'react';
export default class Select extends React.Component {
    static sameItems: (itemsA: any, itemsB: any) => any;
    state: {
        isOpen: any;
        items: any;
        selectedItems: any;
        isFiltering: boolean;
        searchValue: string;
        isCustomItemFocused: boolean;
    };
    static getDerivedStateFromProps(props: any, state: any): {
        items: any;
        selectedItems: any;
    } | null;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    filterOnMenuOpen: () => void;
    clearSearchOnMenuClose: () => void;
    keyDownPressed: (e: any) => void | null;
    handleKeyPress: (event: any, keyHandler: any) => void;
    closePopover: (e: any) => void;
    updateItemsInState: (items: any, option: any, index: any) => any;
    handleSelectOption: (option: any, event: any) => void;
    onClick: (e: any) => void;
    onKeyUp: (e: any) => void;
    onButtonClick: () => void;
    onMoveUp: () => void;
    onMoveDown: () => void;
    onAddItem: (event: any) => void;
    updateHoveredItemPosition: (hoveredItem: any, itemsLength: any, items: any) => void;
    scrollToItem: (parent: any, child: any) => void;
    findItemInState: (item: any) => any;
    onSearchChange: (searchValue: any) => void;
    onClose: () => void;
    getItemId: (item: any) => any;
    renderSelectButton: () => any;
    renderCustomActionItem: (length: any, onCustomItemClick: any, customItemLabel: any) => React.JSX.Element | undefined;
    renderNoItems: (hideSearch: any, length: any, isInputSearch: any, noResultsCustomMessage: any) => React.JSX.Element | undefined;
    renderSelectPopup: () => React.JSX.Element;
    render(): React.JSX.Element;
}
//# sourceMappingURL=Select.d.ts.map