"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.right = exports.left = exports.center = exports.inline = exports.withBorder = exports.withBackground = exports.FormBlockBase = void 0;

var _styledComponents = require("styled-components");

var _colors = require("../style/colors");

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormBlockBase = (0, _styledComponents.css)(_templateObject());
exports.FormBlockBase = FormBlockBase;
var withBackground = (0, _styledComponents.css)(_templateObject2(), _colors.grayLighter);
exports.withBackground = withBackground;
var withBorder = (0, _styledComponents.css)(_templateObject3(), _colors.grayLight);
exports.withBorder = withBorder;
var inline = (0, _styledComponents.css)(_templateObject4());
exports.inline = inline;
var center = (0, _styledComponents.css)(_templateObject5());
exports.center = center;
var left = (0, _styledComponents.css)(_templateObject6());
exports.left = left;
var right = (0, _styledComponents.css)(_templateObject7());
exports.right = right;