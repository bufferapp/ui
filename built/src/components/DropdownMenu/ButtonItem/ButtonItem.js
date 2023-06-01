import React from 'react';
import PropTypes from 'prop-types';
import { ButtonItemStyled, ButtonLabel } from '../style';
import { Checkmark as CheckmarkIcon } from '../../Icon';
import { green } from '../../style/colors';
import { keyCode } from '../keyCode';
export default class ButtonItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeydown = (event) => {
            let flag = false;
            switch (event.keyCode) {
                case this.keyCode.SPACE:
                case this.keyCode.RETURN:
                    {
                        const { item: { onItemClick }, } = this.props;
                        if (onItemClick) {
                            onItemClick();
                            flag = true;
                        }
                    }
                    break;
                default:
                    break;
            }
            if (flag) {
                event.stopPropagation();
                event.preventDefault();
            }
        };
        this.handleClick = () => {
            this.item.focus();
        };
        this.state = {
            tabIndex: '-1',
        };
        this.keyCode = keyCode;
        this.handleKeydown = this.handleKeydown.bind(this);
    }
    componentDidMount() {
        this.item.addEventListener('click', this.handleClick);
        this.item.addEventListener('keydown', this.handleKeydown);
    }
    componentDidUpdate(prevProps) {
        if (this.props.shouldFocus) {
            this.updateTabIndexIfNeeded(prevProps);
        }
    }
    componentWillUnmount() {
        this.item.removeEventListener('click', this.handleClick);
        this.item.removeEventListener('keydown', this.handleKeydown);
    }
    setFocusToItem() {
        const { shouldFocus } = this.props;
        const newTabIndex = shouldFocus ? '0' : '-1';
        if (shouldFocus) {
            this.item.focus();
        }
        this.setState({ tabIndex: newTabIndex });
    }
    updateTabIndexIfNeeded(prevProps) {
        if (prevProps.shouldFocus !== this.props.shouldFocus) {
            this.setFocusToItem();
        }
    }
    render() {
        const { item: { type, title, onItemClick, icon, selected, disabled, colors, tag }, ariaHaspopup, } = this.props;
        const hasIcon = !!icon || !!selected;
        return (React.createElement(ButtonItemStyled, { ref: (item) => (this.item = item), type: "button", role: "menuitem", fullWidth: true, onKeyDown: (ev) => this.handleKeydown(ev), onClick: (event) => {
                if (onItemClick)
                    onItemClick();
                event.stopPropagation();
                event.preventDefault();
            }, tabIndex: this.state.tabIndex, "aria-haspopup": ariaHaspopup, disabled: disabled, colors: colors },
            selected && React.createElement(CheckmarkIcon, { color: green }),
            icon || null,
            React.createElement(ButtonLabel, { hasIcon: hasIcon, type: type }, title),
            tag || null));
    }
}
ButtonItem.propTypes = {
    shouldFocus: PropTypes.bool,
    ariaHaspopup: PropTypes.bool,
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        disabled: PropTypes.bool,
        colors: PropTypes.shape({
            title: PropTypes.string,
            iconHover: PropTypes.string,
        }),
    }).isRequired,
};
ButtonItem.defaultProps = {
    shouldFocus: false,
    ariaHaspopup: false,
};
//# sourceMappingURL=ButtonItem.js.map