"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subTitle = exports.title = exports.FormBase = void 0;

var _styledComponents = require("styled-components");

var _fonts = require("../style/fonts");

var _colors = require("../style/colors");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 500;\n  line-height: normal;\n  margin: 0px;\n  color: ", ";\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 500;\n  line-height: normal;\n  margin: 8px 0px;\n  color: ", ";\n  width: 100%;\n"]);

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

var FormBase = (0, _styledComponents.css)(_templateObject());
exports.FormBase = FormBase;
var title = (0, _styledComponents.css)(_templateObject2(), _fonts.fontFamily, _fonts.fontSizeH3, _colors.grayDarker);
exports.title = title;
var subTitle = (0, _styledComponents.css)(_templateObject3(), _fonts.fontFamily, _fonts.fontSize, _colors.grayDark);
exports.subTitle = subTitle;