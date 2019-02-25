"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Styles = _interopRequireWildcard(require("./style"));

var _Icon = require("../Icon");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      hasError = _ref.hasError,
      help = _ref.help,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      size = _ref.size,
      type = _ref.type,
      value = _ref.value;
  return _react.default.createElement(Styles.InputWrapper, null, label.length > 0 && _react.default.createElement(_Text.default, {
    htmlFor: name,
    type: "label"
  }, label), _react.default.createElement(Styles.InputStyled, {
    disabled: disabled,
    hasError: hasError,
    name: name,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    size: size,
    value: value
  }), help.length > 0 && _react.default.createElement(_Text.default, {
    type: "help",
    htmlFor: name,
    hasError: hasError
  }, hasError && _react.default.createElement(_Icon.Warning, {
    size: "small"
  }), "".concat(hasError ? ' ' : '').concat(help)));
};

Input.propTypes = {
  /** It disables the input field. </i> */
  disabled: _propTypes.default.bool,

  /** It colors the field in red. */
  hasError: _propTypes.default.bool,

  /** It adds an help text below the input box. */
  help: _propTypes.default.string,

  /** It adds a label on top of the input box. */
  label: _propTypes.default.string,

  /** It's the name of the input. */
  name: _propTypes.default.string.isRequired,

  /** It's the placeholder value of the input. */
  placeholder: _propTypes.default.string,

  /** The onChange event */
  onChange: _propTypes.default.func.isRequired,

  /** This is the vertical size of the input field, can be `small`, `regular`, or `tall` */
  size: _propTypes.default.string,

  /** The type of the input */
  type: _propTypes.default.string,

  /** The value of the input */
  value: _propTypes.default.string
};
Input.defaultProps = {
  disabled: false,
  hasError: false,
  help: '',
  label: '',
  placeholder: '',
  size: 'regular',
  type: 'text',
  value: undefined
};
var _default = Input;
exports.default = _default;