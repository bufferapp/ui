import React from 'react';
export declare function getProductPath(baseUrl: any): any;
export declare function getLogoutUrl(baseUrl?: string): string;
export declare function getAccountUrl(baseUrl: string | undefined, user: any): string;
export declare const ORG_SWITCHER = "org_switcher";
export declare function getStopImpersonationUrl(): string | null;
export declare function appendMenuItem(ignoreMenuItems: any, menuItem: any): any;
export declare function appendOrgSwitcher(orgSwitcher: any): any;
declare class NavBar extends React.Component {
    shouldComponentUpdate(nextProps: any): boolean;
    render(): React.JSX.Element;
}
export default NavBar;
//# sourceMappingURL=NavBar.d.ts.map