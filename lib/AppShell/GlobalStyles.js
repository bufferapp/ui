"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Roboto\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * https://www.styled-components.com/docs/api#createglobalstyle
 */
var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyles;
exports.default = _default;