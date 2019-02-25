"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardBase = void 0;

var _styledComponents = require("styled-components");

var _colors = require("../style/colors");

var _borders = require("../style/borders");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardBase = (0, _styledComponents.css)(_templateObject(), _colors.white, _colors.gray, _borders.borderRadius);
exports.CardBase = CardBase;