import React from 'react';
export declare function hasDismissedCookie(cookie: any, cookieKey: any): boolean;
declare class Modal extends React.Component {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onKeyDown: (event: any) => void;
    validateAction: (action: any) => boolean;
    handleAction(action: any): void;
    clickToClose(e: any): void;
    dismiss(): void;
    render(): React.JSX.Element | null;
}
export default Modal;
//# sourceMappingURL=Modal.d.ts.map