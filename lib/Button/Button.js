"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ButtonStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Styles = _interopRequireWildcard(require("./style"));

var _ChevronDown = _interopRequireDefault(require("../Icon/Icons/ChevronDown"));

var _Select = _interopRequireDefault(require("../Select/Select"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px; width: 1px;\n  margin: -1px; padding: 0; border: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  margin-left: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonStyled = _styledComponents.default.button(_templateObject(), Styles.ButtonBase, function (props) {
  return Styles[props.size];
}, function (props) {
  return Styles[props.disabled ? 'disabled' : props.type];
}, function (props) {
  return Styles[props.fullWidth ? 'fullWidth' : ''];
});

exports.ButtonStyled = ButtonStyled;

var Loading = _styledComponents.default.img(_templateObject2());

var VisuallyHiddenLabel = _styledComponents.default.span(_templateObject3());
/** All buttons, including text, link and split-buttons, follow the same core principles in dimensions, padding, and font sizes.
 * Combined with simple modifiers, they can be changed in size and appearance.  */


var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      type = _ref.type,
      size = _ref.size,
      label = _ref.label,
      isSplit = _ref.isSplit,
      loading = _ref.loading,
      icon = _ref.icon,
      hasIconOnly = _ref.hasIconOnly,
      isSelect = _ref.isSelect,
      items = _ref.items,
      selectPosition = _ref.selectPosition,
      onSelectClick = _ref.onSelectClick,
      fullWidth = _ref.fullWidth;
  return _react.default.createElement(ButtonStyled, {
    onClick: !disabled ? onClick : undefined,
    disabled: disabled,
    size: size,
    type: type,
    isSplit: isSplit,
    icon: icon,
    hasIconOnly: hasIconOnly,
    fullWidth: fullWidth
  }, icon, hasIconOnly && _react.default.createElement(VisuallyHiddenLabel, null, label), !hasIconOnly && _react.default.createElement(Styles.ButtonLabel, {
    hasIcon: !!icon
  }, label), isSelect && (type === 'primary' || type === 'secondary') && _react.default.createElement(Styles.ButtonArrow, null, _react.default.createElement(_ChevronDown.default, {
    color: type === 'primary' ? 'white' : 'grayDark',
    size: size,
    isChevron: true
  })), loading && _react.default.createElement(Loading, {
    src: "./images/loading-gray.svg",
    alt: "loading"
  }), isSplit && (type === 'primary' || type === 'secondary') && _react.default.createElement(_Select.default, {
    onSelectClick: onSelectClick,
    items: items,
    type: type,
    isSplit: true,
    position: selectPosition,
    disabled: disabled
  }));
};

Button.propTypes = {
  /** Is the button disabled */
  disabled: _propTypes.default.bool,

  /** Size of the Button */
  size: _propTypes.default.oneOf(['small', 'large', 'medium']),

  /** OnClick handler */
  onClick: _propTypes.default.func,

  /** Button label */
  label: _propTypes.default.string,

  /** Type of button */
  type: _propTypes.default.oneOf(['link', 'primary', 'secondary', 'text']),

  /** Is the Button Split  */
  isSplit: _propTypes.default.bool,

  /** Is this the Select button with chevron */
  isSelect: _propTypes.default.bool,

  /** Is the Button Loading  */
  loading: _propTypes.default.bool,

  /** Does the button have only an icon and no label */
  hasIconOnly: _propTypes.default.bool,

  /** Icon to show with the label */
  icon: _propTypes.default.node,

  /** Items to display in the Split Button popup */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired
  })),

  /** Position of the Select popup */
  selectPosition: _propTypes.default.oneOf(['top', 'bottom']),

  /** Function to call on Split Button selected item click */
  onSelectClick: _propTypes.default.func,

  /** Is the button the full width of the parent container */
  fullWidth: _propTypes.default.bool
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
  isSelect: undefined,
  items: undefined,
  selectPosition: 'bottom',
  onSelectClick: undefined,
  fullWidth: false,
  onClick: null
};
var _default = Button;
exports.default = _default;