"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../style/colors");

var _Select = _interopRequireDefault(require("../Select"));

var _BufferLogo = _interopRequireDefault(require("./BufferLogo"));

var _NavBarMenu = _interopRequireDefault(require("./NavBarMenu/NavBarMenu"));

var _NavBarProducts = _interopRequireDefault(require("./NavBarProducts/NavBarProducts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 64px;\n  width: 100vw;\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarStyled = _styledComponents.default.nav(_templateObject(), _colors.grayDarker);

var NavBarLeft = _styledComponents.default.div(_templateObject2());

var NavBarRight = _styledComponents.default.div(_templateObject3());
/**
 * The NavBar is not generally consumed alone, but instead used by the AppShell component. (This page is WIP. Examples coming soon.)
 */


var NavBar = function NavBar(_ref) {
  var user = _ref.user;
  return _react.default.createElement(NavBarStyled, null, _react.default.createElement(NavBarLeft, null, _react.default.createElement(_BufferLogo.default, null), _react.default.createElement(_NavBarProducts.default, null)), _react.default.createElement(NavBarRight, null, user.menuItems && _react.default.createElement(_Select.default, {
    horizontalOffset: "-16px",
    customButton: function customButton(handleClick) {
      return _react.default.createElement(_NavBarMenu.default, {
        user: user,
        onClick: handleClick
      });
    },
    items: user.menuItems
  })));
};

NavBar.propTypes = {
  user: _propTypes.default.shape({
    name: _propTypes.default.string,
    email: _propTypes.default.string.isRequired,
    avatar: _propTypes.default.string,
    menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
      id: _propTypes.default.string.isRequired,
      title: _propTypes.default.string.isRequired,
      component: _propTypes.default.node,
      hasDivider: _propTypes.default.bool,
      onItemClick: _propTypes.default.func
    }))
  }).isRequired
};
var _default = NavBar;
exports.default = _default;