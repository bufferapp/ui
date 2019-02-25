"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLabel = exports.ButtonArrow = exports.ButtonSelect = exports.fullWidth = exports.disabled = exports.large = exports.medium = exports.small = exports.text = exports.link = exports.secondary = exports.primary = exports.ButtonBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("../style/colors");

var _fonts = require("../style/fonts");

var _borders = require("../style/borders");

var _Button = require("./Button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 5px;\n  display: flex;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  :before {\n    background-color: ", ";\n    color: ", ";\n    content: \"\";\n    height: 24px;\n    position: absolute;\n    right: 34px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 1px;\n  }\n  padding-left: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 38px;\n  ", ":hover & {\n    background-color: ", ";\n    color: ", ";\n  }\n  ", ":focus & {\n    border-color: ", ";\n      color: ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  cursor: not-allowed;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 16px;\n  padding-left: 16px;\n  height: 48px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 16px;\n  padding-left: 16px;\n  height: 40px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 8px;\n  padding-right: 8px;\n  height: 32px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  :hover {\n    color: ", ";\n  }\n\n  :focus,\n  :active {\n    box-shadow: none;\n    outline: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  :hover {\n    color: ", ";\n    border-color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  :hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  user-select: none;\n  border: 0;\n  -webkit-appearance: none;\n  position: relative;\n  transition-property: background-color, border-color, color;\n  transition-duration: 0.1s;\n  transition-timing-function: ease-in;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-width: 0;\n  flex: 0 0 auto;\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  padding-top: 0;\n  padding-bottom: 0;\n  :hover {\n    transition-property: background-color, border-color, color;\n    transition-duration: 0.1s;\n    transition-timing-function: ease-in;\n  }\n  :active {\n    top: 1px;\n  }\n  :focus {\n    box-shadow: 0 0 0 3px ", ";\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* styles common to all buttons */
var ButtonBase = (0, _styledComponents.css)(_templateObject(), _fonts.fontSize, _fonts.lineHeight, _fonts.fontWeightMedium, _borders.borderRadius, _fonts.fontFamily, _colors.white, _colors.grayDefault, _colors.boxShadow);
/* theme variants */

exports.ButtonBase = ButtonBase;
var primary = (0, _styledComponents.css)(_templateObject2(), _colors.blue, _colors.white, _colors.blueDarker, _colors.white);
exports.primary = primary;
var secondary = (0, _styledComponents.css)(_templateObject3(), _colors.white, _colors.grayDark, _colors.gray, _colors.grayDarker, _colors.grayDark, _colors.blue, _colors.grayDarker);
exports.secondary = secondary;
var link = (0, _styledComponents.css)(_templateObject4(), _colors.blue, _colors.blueDarker);
exports.link = link;
var text = (0, _styledComponents.css)(_templateObject5(), _colors.grayDarker);
/* size variants */

exports.text = text;
var small = (0, _styledComponents.css)(_templateObject6());
exports.small = small;
var medium = (0, _styledComponents.css)(_templateObject7());
exports.medium = medium;
var large = (0, _styledComponents.css)(_templateObject8());
/* state variants */

exports.large = large;
var disabled = (0, _styledComponents.css)(_templateObject9(), _colors.grayLight);
exports.disabled = disabled;
var fullWidth = (0, _styledComponents.css)(_templateObject10());
exports.fullWidth = fullWidth;

var ButtonSelect = _styledComponents.default.div(_templateObject11(), function (props) {
  return props.disabled ? _colors.gray : _colors.white;
}, function (props) {
  return props.disabled ? _colors.gray : _colors.white;
}, _Button.ButtonStyled, _colors.blueDarker, _colors.white, _Button.ButtonStyled, _colors.blue, _colors.grayDarker);

exports.ButtonSelect = ButtonSelect;

var ButtonArrow = _styledComponents.default.div(_templateObject12());

exports.ButtonArrow = ButtonArrow;

var ButtonLabel = _styledComponents.default.div(_templateObject13(), function (props) {
  return props.hasIcon ? '5px' : '0px';
});

exports.ButtonLabel = ButtonLabel;