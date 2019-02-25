"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Styles = _interopRequireWildcard(require("./style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormBlockStyled = _styledComponents.default.div(_templateObject(), Styles.FormBlockBase, function (props) {
  return props.withBackground && Styles.withBackground;
}, function (props) {
  return props.withBorder && Styles.withBorder;
}, function (props) {
  return props.inline && Styles.inline;
}, function (props) {
  return Styles[props.align];
});

var FormBlock = function FormBlock(_ref) {
  var align = _ref.align,
      inline = _ref.inline,
      withBorder = _ref.withBorder,
      withBackground = _ref.withBackground,
      children = _ref.children;
  return _react.default.createElement(FormBlockStyled, {
    align: align,
    inline: inline,
    withBorder: withBorder,
    withBackground: withBackground
  }, children);
};

FormBlock.propTypes = {
  align: _propTypes.default.oneOf(['left', 'right', 'center']),
  inline: _propTypes.default.bool,
  withBorder: _propTypes.default.bool,
  withBackground: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node])
};
FormBlock.defaultProps = {
  align: 'center',
  inline: false,
  withBorder: false,
  withBackground: false,
  children: null
};
var _default = FormBlock;
exports.default = _default;