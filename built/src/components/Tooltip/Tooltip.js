import React from 'react';
import PropTypes from 'prop-types';
import '@reach/tooltip/styles.css';
import * as Styles from './style';
import { gray, white } from '../style/colors';
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.renderLabel = (label, hotkey, customLabel = null) => (React.createElement(Styles.LabelWrapper, null,
            label && (React.createElement(Styles.Label, { color: white },
                React.createElement(Styles.HotkeyWrapper, null,
                    label,
                    hotkey && (React.createElement(Styles.Label, { color: gray, isHotkey: true }, hotkey))))),
            customLabel));
        this.setTooltipPosition = this.setTooltipPosition.bind(this);
        this.state = {
            childWidth: 0,
        };
    }
    componentDidMount() {
        this.setTooltipPosition();
        window.addEventListener('resize', this.setTooltipPosition);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setTooltipPosition);
    }
    setTooltipPosition() {
        if (this.tooltipWrapper) {
            const childWidth = this.tooltipWrapper.children[0].children[0].getBoundingClientRect()
                .width;
            this.setState({
                childWidth,
            });
        }
    }
    getTooltipPosition(triggerRect, tooltipRect, position, verticalAlign) {
        const { childWidth } = this.state;
        const gap = 8;
        const triggerCenter = triggerRect.left + childWidth / 2;
        const left = triggerCenter - tooltipRect.width / 2;
        const maxLeft = window.innerWidth - tooltipRect.width - 2;
        const verticalCenter = triggerRect.top +
            triggerRect.height -
            (triggerRect.height + tooltipRect.height) / 2 -
            window.scrollY;
        const verticalTop = triggerRect.top;
        const topPosition = verticalAlign === 'top' ? verticalTop : verticalCenter;
        const newPosition = {
            left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
            top: triggerRect.bottom + gap + window.scrollY,
        };
        switch (position) {
            case 'top':
                newPosition.top =
                    triggerRect.top - tooltipRect.height - gap - window.scrollY;
                break;
            case 'right':
                newPosition.left = triggerRect.left + childWidth + gap + window.scrollX;
                newPosition.top = topPosition;
                break;
            case 'left':
                newPosition.left =
                    triggerRect.left - tooltipRect.width - gap - window.scrollX;
                newPosition.top = topPosition;
                break;
            default:
        }
        return newPosition;
    }
    render() {
        const { children, label, position, verticalAlign, hotkey, customLabel, opacity, } = this.props;
        const renderTooltip = label || customLabel;
        return (React.createElement(React.Fragment, null, renderTooltip ? (React.createElement(Styles.TooltipWrapper, { ref: (node) => (this.tooltipWrapper = node) },
            React.createElement(Styles.TooltipStyled, { label: this.renderLabel(label, hotkey, customLabel), position: (triggerRect, tooltipRect) => this.getTooltipPosition(triggerRect, tooltipRect, position, verticalAlign), style: Styles.TooltipStyle, opacity: opacity },
                React.createElement("div", null, children)))) : (React.createElement("div", null, children))));
    }
}
Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string,
    position: PropTypes.string,
    verticalAlign: PropTypes.string,
    hotkey: PropTypes.string,
    customLabel: PropTypes.node,
    opacity: PropTypes.number,
};
Tooltip.defaultProps = {
    label: '',
    position: 'bottom',
    verticalAlign: 'center',
    hotkey: '',
    customLabel: '',
    opacity: 1,
};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map