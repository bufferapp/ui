"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = exports.Label = exports.H3 = exports.H2 = exports.H1 = exports.Paragraph = exports.Span = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../style/colors");

var _fonts = require("../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: ", ";\n  line-height: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 18px;\n  font-weight: ", ";\n  line-height: 28px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 24px;\n  font-weight: ", ";\n  line-height: 34px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 32px;\n  font-weight: ", ";\n  line-height: 44px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: inherit;\n  font-family: ", ";\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = _styledComponents.default.span(_templateObject(), _fonts.fontFamily);

exports.Span = Span;

var Paragraph = _styledComponents.default.p(_templateObject2(), _colors.grayDarker, _fonts.fontFamily, _fonts.fontSize, _fonts.fontWeight);

exports.Paragraph = Paragraph;

var H1 = _styledComponents.default.h1(_templateObject3(), _colors.grayDarker, _fonts.fontFamily, _fonts.fontWeightBold);

exports.H1 = H1;

var H2 = _styledComponents.default.h2(_templateObject4(), _colors.grayDarker, _fonts.fontFamily, _fonts.fontWeightBold);

exports.H2 = H2;

var H3 = _styledComponents.default.h3(_templateObject5(), _colors.grayDarker, _fonts.fontFamily, _fonts.fontWeightBold);

exports.H3 = H3;

var Label = _styledComponents.default.label(_templateObject6(), function (_ref) {
  var light = _ref.light;
  return light ? _colors.grayDark : _colors.grayDarker;
}, _fonts.fontFamily, _fonts.fontSize, _fonts.fontWeightMedium, _fonts.lineHeight);

exports.Label = Label;

var Help = _styledComponents.default.label(_templateObject7(), function (_ref2) {
  var hasError = _ref2.hasError;
  return hasError ? _colors.red : _colors.grayDarker;
}, _fonts.fontFamily, _fonts.fontWeightMedium, _fonts.lineHeight);

exports.Help = Help;