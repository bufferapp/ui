"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItemTitle = exports.SelectItemIcon = exports.SelectItemLabel = exports.SelectItemStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../style/colors");

var _fonts = require("../../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 4px;\n  svg {\n     fill: ", ";\n  }\n  ", ":hover & * {\n    color: ", ";\n    fill: ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    font-weight: ", ";\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: capitalize;\n    padding: 0px 16px;\n    display: flex;\n    align-items: end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-height: 32px;\n    align-items: center;\n    color: ", ";\n    cursor: pointer;\n    display: flex;\n    font-size: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    user-select: none;\n    white-space: nowrap;\n    width: 100%;\n    background-color:", ";\n    &:hover {\n      background-color:", ";\n      color: #fff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectItemStyled = _styledComponents.default.li(_templateObject(), function (props) {
  return props.hovered ? _colors.white : _colors.grayDarker;
}, _fonts.fontSize, function (props) {
  return props.hovered ? _colors.blue : 'transparent';
}, _colors.blue);

exports.SelectItemStyled = SelectItemStyled;

var SelectItemLabel = _styledComponents.default.div(_templateObject2(), _fonts.fontSize, _fonts.fontWeightMedium);

exports.SelectItemLabel = SelectItemLabel;

var SelectItemIcon = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.hovered ? _colors.white : _colors.grayDark;
}, SelectItemStyled, _colors.white, _colors.white);

exports.SelectItemIcon = SelectItemIcon;

var SelectItemTitle = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.moveRight ? '22px' : '10px';
});

exports.SelectItemTitle = SelectItemTitle;