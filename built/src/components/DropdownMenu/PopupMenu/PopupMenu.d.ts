import React from 'react';
export default class PopupMenu extends React.Component {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    closePopup: () => void;
    isPopupOpen: () => any;
    hasSubItems: (item: any) => any;
    isFirstItem: (index: any) => boolean;
    isLastItem: (index: any) => boolean;
    setFocusToItem: (index: any) => void;
    setFocusToNextItem: () => void;
    setFocusToPreviousItem: () => void;
    handleKeydown: (event: any) => void;
    focusPopupToItem: (index: any) => void;
    updateIfNeeded(prevProps: any): void;
    renderItems: (items: any) => any;
    render(): React.JSX.Element;
}
//# sourceMappingURL=PopupMenu.d.ts.map