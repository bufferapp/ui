"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = exports.SearchWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    && {\n      border: 0;\n      border-bottom:  1px solid #ecf0f3;\n      border-radius: 4px;\n      box-shadow: none;\n      width: 100%;\n      padding: 0 7px;\n      box-sizing: border-box;\n      resize: none;\n      font-size: 14px;\n      height: 35px;\n      &:focus {\n        outline: none;\n        border-color: transparent;\n        box-shadow: none;\n        border-bottom: 1px solid #b8b8b8;\n        border-bottom-left-radius: 0px;\n        border-bottom-right-radius: 0px;\n      }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height:  auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchWrapper = _styledComponents.default.div(_templateObject());

exports.SearchWrapper = SearchWrapper;

var SearchInput = _styledComponents.default.input(_templateObject2());

exports.SearchInput = SearchInput;