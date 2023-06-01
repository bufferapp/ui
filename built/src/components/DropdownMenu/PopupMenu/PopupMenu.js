import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemDividerTitle } from '../style';
import { PopupMenuStyled, ItemDivider } from './style';
import ButtonItem from '../ButtonItem/ButtonItem';
import Tooltip from '../../Tooltip/Tooltip';
import { keyCode } from '../keyCode';
import TooltipLabel from '../TooltipLabel/TooltipLabel';
const OptionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;
export default class PopupMenu extends React.Component {
    constructor(props) {
        super(props);
        this.closePopup = () => {
            if (this.props.closePopup) {
                this.props.closePopup();
            }
            this.setState({ focusedItem: -1 });
        };
        this.isPopupOpen = () => this.props.isOpen;
        this.hasSubItems = (item) => item.subItems && item.subItems.length > 0;
        this.isFirstItem = (index) => index === this.firstItem;
        this.isLastItem = (index) => index === this.lastItem;
        this.setFocusToItem = (index) => {
            this.setState({ focusedItem: index });
        };
        this.setFocusToNextItem = () => {
            const { focusedItem } = this.state;
            const newIndex = this.isLastItem(focusedItem)
                ?
                    this.firstItem
                : focusedItem + 1;
            this.setFocusToItem(newIndex);
        };
        this.setFocusToPreviousItem = () => {
            const { focusedItem } = this.state;
            const newIndex = this.isFirstItem(focusedItem)
                ?
                    this.lastItem
                : focusedItem - 1;
            this.setFocusToItem(newIndex);
        };
        this.handleKeydown = (event) => {
            let flag = false;
            switch (event.keyCode) {
                case this.keyCode.DOWN:
                    if (this.isPopupOpen()) {
                        this.setFocusToNextItem();
                    }
                    flag = true;
                    break;
                case this.keyCode.UP:
                    if (this.isPopupOpen()) {
                        this.setFocusToPreviousItem();
                    }
                    flag = true;
                    break;
                case this.keyCode.ESC:
                case this.keyCode.TAB:
                    this.closePopup();
                    break;
                default:
                    break;
            }
            if (flag) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        this.focusPopupToItem = (index) => {
            this.popup.focus();
            this.setFocusToItem(index);
        };
        this.renderItems = (items) => {
            const { focusedItem } = this.state;
            return items.map((item, index) => {
                const hasSubItems = this.hasSubItems(item);
                const shouldFocus = index === focusedItem && !this.props.usingMouse;
                const type = index === 0 ? 'header' : '';
                const { defaultTooltipMessage } = item;
                return [
                    item.hasDivider && (React.createElement(ItemDivider, { key: `${item.id}--divider`, role: "none", type: type }, item.dividerTitle && (React.createElement(ItemDividerTitle, null, item.dividerTitle)))),
                    React.createElement(OptionalWrapper, { key: `item-wrapper-${index}`, condition: hasSubItems || defaultTooltipMessage, wrapper: (children) => {
                            const tooltip = (React.createElement(TooltipLabel, { maxItems: 5, items: item.subItems, defaultMessage: defaultTooltipMessage }));
                            return (React.createElement(Tooltip, { customLabel: tooltip, position: "left", verticalAlign: "top" }, children));
                        } },
                        React.createElement(Item, { key: `item-${index}`, role: "none", type: item.type },
                            React.createElement(ButtonItem, { index: index, item: item, shouldFocus: shouldFocus, ariaHaspopup: false }))),
                ];
            });
        };
        this.state = {
            focusedItem: -1,
            tabIndex: '-1',
        };
        this.firstItem = props.items.length > 0 ? 0 : -1;
        this.lastItem = props.items.length - 1 || -1;
        this.keyCode = keyCode;
        this.handleKeydown = this.handleKeydown.bind(this);
    }
    componentDidMount() {
        this.popup.addEventListener('keydown', this.handleKeydown);
    }
    componentDidUpdate(prevProps) {
        this.updateIfNeeded(prevProps);
    }
    componentWillUnmount() {
        this.popup.removeEventListener('keydown', this.handleKeydown);
    }
    updateIfNeeded(prevProps) {
        const { isOpen, usingMouse, onOpen } = this.props;
        let newTabIndex = '-1';
        if (prevProps.isOpen !== isOpen) {
            if (isOpen) {
                if (usingMouse)
                    newTabIndex = '0';
                this.focusPopupToItem(0);
                if (onOpen) {
                    onOpen();
                }
            }
            else {
                this.setFocusToItem(-1);
            }
            this.setState({ tabIndex: newTabIndex });
        }
    }
    render() {
        const { ariaLabelPopup, horizontalOffset, items, isOpen, onBlur, xPosition, } = this.props;
        return (React.createElement(PopupMenuStyled, { ref: (popup) => (this.popup = popup), role: "menu", "aria-label": ariaLabelPopup, isOpen: isOpen, xPosition: xPosition, horizontalOffset: horizontalOffset, onBlur: onBlur, tabIndex: this.state.tabIndex, onKeyDown: (ev) => this.handleKeydown(ev) }, this.renderItems(items)));
    }
}
PopupMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    horizontalOffset: PropTypes.string,
    xPosition: PropTypes.string,
    onBlur: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    ariaLabelPopup: PropTypes.string,
    usingMouse: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        colors: PropTypes.shape({
            title: PropTypes.string,
            iconHover: PropTypes.string,
        }),
    })).isRequired,
    onOpen: PropTypes.func,
};
PopupMenu.defaultProps = {
    ariaLabelPopup: null,
    horizontalOffset: null,
    xPosition: 'left',
    usingMouse: false,
    onOpen: null,
};
//# sourceMappingURL=PopupMenu.js.map