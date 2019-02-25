"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.large = exports.medium = exports.small = exports.smallest = exports.base = void 0;

var _styledComponents = require("styled-components");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 22px;\n  height: 22px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 8px;\n  height: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  fill: currentcolor;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = (0, _styledComponents.css)(_templateObject());
exports.base = base;
var smallest = (0, _styledComponents.css)(_templateObject2());
exports.smallest = smallest;
var small = (0, _styledComponents.css)(_templateObject3());
exports.small = small;
var medium = (0, _styledComponents.css)(_templateObject4());
exports.medium = medium;
var large = (0, _styledComponents.css)(_templateObject5());
exports.large = large;