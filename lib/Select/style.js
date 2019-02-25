"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItemDivider = exports.Arrow = exports.SelectItems = exports.SelectStyled = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../style/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    height: 1px;\n    margin-bottom: 4px;\n    margin-top: 4px;\n    padding: 0;\n    pointer-events: none;\n    width: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-left: 1px solid ", ";\n    border-radius: 2px 0 0 0;\n    border-top: 1px solid ", ";\n    display: ", ";\n    height: 10px;\n    right: 13px;\n    position: absolute;\n    width: 10px;\n    z-index: 1;\n    transform: ", ";\n    bottom: ", ";\n    top: ", ";\n    z-index: 9999;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    max-height: 135px;\n    overflow-y: auto;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    position: relative;\n    z-index: 2;\n    background: ", ";\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n    border-radius: 4px;\n    list-style: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    right: 0;\n    position: absolute;\n    z-index: 1000;\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    box-shadow: ", ";\n    border-radius: 4px;\n    display: ", ";\n    min-width: 200px;\n    width: auto;\n    background-color: #ffffff;\n    bottom: ", ";\n    top: ", ";\n    margin-bottom: ", ";\n    margin-top: ", ";\n    transform: translateX(", ");\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: 0;\n  :focus {\n    outline: 0\n  }\n  width: ", ";\n  height: ", ";\n  max-height: ", ";\n  position: ", ";\n  display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.isSplit ? '100%' : 'auto';
}, function (props) {
  return props.isSplit ? '100%' : 'auto';
}, function (props) {
  return props.isSplit ? '100%' : '40px';
}, function (props) {
  return props.isSplit ? 'initial' : 'relative';
});

exports.Wrapper = Wrapper;

var SelectStyled = _styledComponents.default.div(_templateObject2(), _colors.gray, _colors.grayShadow, function (props) {
  return props.isOpen ? 'initial' : 'none';
}, function (props) {
  return props.position === 'top' ? '100%' : 'initial';
}, function (props) {
  return props.position === 'bottom' ? '100%' : 'initial';
}, function (props) {
  return props.position === 'top' ? '8px' : '0';
}, function (props) {
  return props.isMenu ? '32px' : props.position === 'bottom' ? '8px' : '0';
}, function (props) {
  return props.horizontalOffset ? props.horizontalOffset : '0';
});

exports.SelectStyled = SelectStyled;

var SelectItems = _styledComponents.default.ul(_templateObject3(), _colors.white);

exports.SelectItems = SelectItems;

var Arrow = _styledComponents.default.div(_templateObject4(), _colors.gray, _colors.gray, function (props) {
  return props.isOpen ? 'inline-block' : 'none';
}, function (props) {
  return props.position === 'top' ? 'rotate(225deg)' : 'rotate(45deg)';
}, function (props) {
  return props.position === 'top' ? '100%' : '-15px';
}, function (props) {
  return props.position === 'top' ? '-15px' : 'initial';
});

exports.Arrow = Arrow;

var SelectItemDivider = _styledComponents.default.li(_templateObject5(), _colors.grayLighter);

exports.SelectItemDivider = SelectItemDivider;