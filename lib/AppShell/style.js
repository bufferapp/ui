"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWrapper = exports.SidebarWrapper = exports.Wrapper = exports.AppShellStyled = exports.flexRow = exports.flexColumn = exports.flex = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  align-items: center;\n  height: 100%;\n  flex: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  width: 270px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  flex: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  min-height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flex = (0, _styledComponents.css)(_templateObject());
exports.flex = flex;
var flexColumn = (0, _styledComponents.css)(_templateObject2());
exports.flexColumn = flexColumn;
var flexRow = (0, _styledComponents.css)(_templateObject3());
/**
 *
 */

exports.flexRow = flexRow;

var AppShellStyled = _styledComponents.default.div(_templateObject4(), flex, flexColumn);

exports.AppShellStyled = AppShellStyled;

var Wrapper = _styledComponents.default.div(_templateObject5(), flex, flexRow);

exports.Wrapper = Wrapper;

var SidebarWrapper = _styledComponents.default.div(_templateObject6(), flex, flexColumn);

exports.SidebarWrapper = SidebarWrapper;

var ContentWrapper = _styledComponents.default.div(_templateObject7(), flex, flexColumn);

exports.ContentWrapper = ContentWrapper;