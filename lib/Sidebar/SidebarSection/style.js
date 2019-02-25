"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.SidebarSectionStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../style/colors");

var _fonts = require("../../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 16px 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarSectionStyled = _styledComponents.default.div(_templateObject());

exports.SidebarSectionStyled = SidebarSectionStyled;

var Header = _styledComponents.default.div(_templateObject2(), _colors.grayLight, _fonts.fontSize, _fonts.fontWeightBold);

exports.Header = Header;