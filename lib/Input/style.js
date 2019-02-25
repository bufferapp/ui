"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputStyled = exports.InputWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../style/colors");

var _fonts = require("../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 4px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  padding: ", ";\n  margin: 8px 0px;\n  width: 100%;\n  cursor: pointer;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    border: 1px solid ", ";\n    box-shadow: 0px 0px 0px 3px ", ";\n    outline: none;\n  }\n\n  &:disabled {\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    cursor: not-allowed;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputWrapper = _styledComponents.default.div(_templateObject());

exports.InputWrapper = InputWrapper;

var InputStyled = _styledComponents.default.input(_templateObject2(), function (_ref) {
  var hasError = _ref.hasError;
  return hasError ? _colors.redLight : _colors.white;
}, function (_ref2) {
  var hasError = _ref2.hasError;
  return hasError ? _colors.red : _colors.grayLight;
}, function (_ref3) {
  var hasError = _ref3.hasError;
  return hasError ? _colors.red : _colors.grayDarker;
}, _fonts.fontFamily, _fonts.fontSize, _fonts.fontWeight, _fonts.lineHeight, function (_ref4) {
  var size = _ref4.size;

  switch (size) {
    case 'small':
      return '5px 8px 4px 8px';

    case 'tall':
      return '13px 16px 12px 16px';

    default:
      return '9px 8px 8px 8px';
  }
}, _colors.gray, function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError ? _colors.red : _colors.blue;
}, function (_ref6) {
  var hasError = _ref6.hasError;
  return hasError ? "#F3AFB9" : "#ABB7FF";
}, _colors.grayLight, _colors.grayLight, _colors.grayDark, _colors.gray);

exports.InputStyled = InputStyled;