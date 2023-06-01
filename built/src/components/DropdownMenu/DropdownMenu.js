import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItems, Item } from './style';
import PopupMenu from './PopupMenu/PopupMenu';
import { keyCode } from './keyCode';
export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleMousedown = () => {
            this.setState({ usingMouse: true });
        };
        this.togglePopup = () => {
            const { isOpen } = this.state;
            this.setState({ isOpen: !isOpen });
        };
        this.isPopupOpen = () => this.state.isOpen;
        this.openPopup = () => {
            this.setState({ isOpen: true });
        };
        this.closePopup = () => {
            this.setState({ isOpen: false });
        };
        this.handleKeydown = (event) => {
            let flag = false;
            switch (event.keyCode) {
                case this.keyCode.SPACE:
                case this.keyCode.RETURN:
                case this.keyCode.DOWN:
                    if (!this.isPopupOpen()) {
                        this.openPopup();
                        flag = true;
                    }
                    break;
                case this.keyCode.ESC:
                case this.keyCode.TAB:
                    this.closePopup();
                    break;
                default:
                    break;
            }
            this.setState({ usingMouse: false });
            if (flag) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        this.handlePopupBlur = (event) => {
            const outsideOfPopup = !event.currentTarget.contains(event.relatedTarget);
            setTimeout(() => {
                if (this.isPopupOpen() && outsideOfPopup) {
                    this.closePopup();
                }
            }, 300);
        };
        this.state = {
            isOpen: false,
            usingMouse: false,
        };
        this.keyCode = keyCode;
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handlePopupBlur = this.handlePopupBlur.bind(this);
        this.handleMousedown = this.handleMousedown.bind(this);
    }
    componentDidMount() {
        this.itemsNode.addEventListener('keydown', this.handleKeydown);
        this.itemsNode.addEventListener('mousedown', this.handleMousedown);
    }
    componentWillUnmount() {
        this.itemsNode.removeEventListener('keydown', this.handleKeydown);
        this.itemsNode.removeEventListener('mousedown', this.handleMousedown);
    }
    render() {
        const { menubarItem, items, ariaLabel, ariaLabelPopup, horizontalOffset, xPosition, onOpen, } = this.props;
        const MenubarItem = React.cloneElement(menubarItem);
        return (React.createElement(DropdownItems, { ref: (itemsNode) => (this.itemsNode = itemsNode), role: "menubar", "aria-label": ariaLabel, usingMouse: this.state.usingMouse },
            React.createElement(Item, { role: "none", menuOption: true },
                React.createElement(MenubarItem.type, Object.assign({}, MenubarItem.props, { role: "menuitem", tabIndex: "0", "aria-haspopup": "true", "aria-expanded": this.state.isOpen, onKeyDown: (ev) => this.handleKeydown(ev), onClick: (ev) => {
                        this.togglePopup();
                        ev.preventDefault();
                    } })),
                React.createElement(PopupMenu, { role: "menu", xPosition: xPosition, items: items, "aria-label": ariaLabelPopup, horizontalOffset: horizontalOffset, isOpen: this.state.isOpen, usingMouse: this.state.usingMouse, closePopup: this.closePopup, onBlur: (event) => this.handlePopupBlur(event), onOpen: onOpen }))));
    }
}
DropdownMenu.propTypes = {
    menubarItem: PropTypes.node.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    ariaLabelPopup: PropTypes.string,
    xPosition: PropTypes.string,
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
DropdownMenu.defaultProps = {
    ariaLabelPopup: null,
    xPosition: 'right',
    onOpen: null,
};
//# sourceMappingURL=DropdownMenu.js.map