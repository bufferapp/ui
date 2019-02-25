"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.SidebarItemStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ButtonStyles = _interopRequireWildcard(require("../../Button/style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  text-decoration: none;\n  margin-bottom: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarItemStyled = _styledComponents.default.a(_templateObject(), ButtonStyles.ButtonBase, ButtonStyles.primary, ButtonStyles.small);

exports.SidebarItemStyled = SidebarItemStyled;

var Label = _styledComponents.default.span(_templateObject2(), function (props) {
  return props.hasIcon ? '5px' : '0px';
});

exports.Label = Label;