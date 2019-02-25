"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarChavron = exports.NavBarEmail = exports.NavBarName = exports.NavBarAvatar = exports.NavBarUser = exports.NavBarStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../style/colors");

var _fonts = require("../../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: #3D3D3D;\n  border: 1px solid #3D3D3D;\n  box-sizing: border-box;\n  border-radius: 4px;\n  color: ", ";\n  height: 16px;\n  width: 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  left: -8px;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: ", ";\n  font-weight: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 100px;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  cursor: pointer;\n  background-size: cover;\n  background-image: url(", ");\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: end;\n  flex-direction: column;\n  padding-right: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  padding: 0px 8px 0px 16px;\n  height: 64px;\n  width: 230px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarStyled = _styledComponents.default.div(_templateObject(), _colors.grayDark);

exports.NavBarStyled = NavBarStyled;

var NavBarUser = _styledComponents.default.div(_templateObject2());

exports.NavBarUser = NavBarUser;

var NavBarAvatar = _styledComponents.default.div(_templateObject3(), _colors.gray, function (props) {
  return props.avatar;
});

exports.NavBarAvatar = NavBarAvatar;

var NavBarName = _styledComponents.default.div(_templateObject4(), _colors.white, _fonts.fontWeightMedium);

exports.NavBarName = NavBarName;

var NavBarEmail = _styledComponents.default.div(_templateObject5(), _fonts.fontSize, _colors.grayLight);

exports.NavBarEmail = NavBarEmail;

var NavBarChavron = _styledComponents.default.div(_templateObject6(), _colors.gray);

exports.NavBarChavron = NavBarChavron;