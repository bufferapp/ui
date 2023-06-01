var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import ChevronDown from '../Icon/Icons/ChevronDown';
import Select from '../Select/Select';
export const ButtonWrapperStyled = styled.div `
  ${Styles.ButtonWrapperBase};
  ${(props) => Styles[[props.type, props.disabled ? 'Disabled' : ''].join('')]};
  ${(props) => (props.fullWidth ? Styles.fullWidth : '')};
`;
export const ButtonContainerStyled = styled.div `
  ${Styles.ButtonContainerBase};
`;
export const ButtonStyled = styled.button `
  ${Styles.ButtonNestedBase};
  ${(props) => Styles[props.size]};
  ${(props) => Styles[props.disabled ? 'disabled' : '']};
  ${(props) => (props.fullWidth ? Styles.fullWidth : '')};
`;
const Loading = styled.img `
  width: 24px;
  margin-left: 10px;
`;
const VisuallyHiddenLabel = styled.span `
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
const Button = (_a) => {
    var { disabled, onClick, type, size, label, isSplit, loading, icon, iconEnd, hasIconOnly, isSelect, items, selectPosition, onSelectClick, fullWidth, tooltip, ref, hideSearch, textToLeft, className, children, onOpen } = _a, props = __rest(_a, ["disabled", "onClick", "type", "size", "label", "isSplit", "loading", "icon", "iconEnd", "hasIconOnly", "isSelect", "items", "selectPosition", "onSelectClick", "fullWidth", "tooltip", "ref", "hideSearch", "textToLeft", "className", "children", "onOpen"]);
    return (React.createElement(ButtonWrapperStyled, { className: className, disabled: disabled, type: type, fullWidth: fullWidth, "$loading": loading },
        React.createElement(ButtonContainerStyled, null,
            React.createElement(ButtonStyled, Object.assign({ onClick: !disabled ? onClick : undefined, disabled: disabled, isSplit: isSplit, icon: icon, hasIconOnly: hasIconOnly, "data-tip": tooltip, ref: ref, "aria-haspopup": "false", size: size, fullWidth: fullWidth, type: type }, props),
                !iconEnd && icon,
                hasIconOnly && React.createElement(VisuallyHiddenLabel, null, label),
                !hasIconOnly && (React.createElement(Styles.ButtonLabel, { hasIcon: !!icon, iconEnd: !!iconEnd }, label)),
                iconEnd && icon,
                isSelect && (type === 'primary' || type === 'secondary') && (React.createElement(Styles.ButtonArrow, { textToLeft: textToLeft },
                    React.createElement(ChevronDown, { color: type === 'primary' ? 'white' : 'grayDark', size: size, isChevron: true }))),
                loading && React.createElement(Loading, { src: "./images/loading-gray.svg", alt: "loading" })),
            isSplit &&
                (type === 'primary' || type === 'secondary') &&
                (children ? (React.Children.map(children, (child) => React.cloneElement(child, {}))) : (React.createElement(Select, { onSelectClick: onSelectClick, items: items, type: type, size: size, isSplit: true, yPosition: selectPosition, xPosition: "right", disabled: disabled, hideSearch: hideSearch, onOpen: onOpen }))))));
};
Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', 'medium']),
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'text',
        'error',
        'danger',
        'orange',
    ]),
    isSplit: PropTypes.bool,
    isSelect: PropTypes.bool,
    loading: PropTypes.bool,
    hasIconOnly: PropTypes.bool,
    icon: PropTypes.node,
    iconEnd: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    })),
    children: PropTypes.element,
    selectPosition: PropTypes.oneOf(['top', 'bottom']),
    onSelectClick: PropTypes.func,
    fullWidth: PropTypes.bool,
    tooltip: PropTypes.string,
    ref: PropTypes.node,
    hideSearch: PropTypes.bool,
    className: PropTypes.string,
    onOpen: PropTypes.func,
};
Button.defaultProps = {
    disabled: false,
    isSplit: undefined,
    loading: false,
    size: 'medium',
    type: 'secondary',
    label: undefined,
    hasIconOnly: false,
    icon: undefined,
    iconEnd: false,
    isSelect: undefined,
    items: undefined,
    selectPosition: 'bottom',
    onSelectClick: undefined,
    fullWidth: false,
    tooltip: undefined,
    ref: undefined,
    hideSearch: true,
    className: undefined,
    children: undefined,
    onOpen: null,
};
export default Button;
//# sourceMappingURL=Button.js.map