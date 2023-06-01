import React from 'react';
import '@reach/tooltip/styles.css';
declare class Tooltip extends React.Component {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    setTooltipPosition(): void;
    getTooltipPosition(triggerRect: any, tooltipRect: any, position: any, verticalAlign: any): {
        left: number;
        top: any;
    };
    renderLabel: (label: any, hotkey: any, customLabel?: null) => React.JSX.Element;
    render(): React.JSX.Element;
}
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map