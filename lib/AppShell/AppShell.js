"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NavBar = _interopRequireDefault(require("../NavBar"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The AppShell component is a general purpose wrapper for all of our applications.
 */
var AppShell = function AppShell(_ref) {
  var user = _ref.user,
      SidebarComponent = _ref.sidebar,
      ContentComponent = _ref.content;
  return _react.default.createElement(_style.AppShellStyled, null, _react.default.createElement(_NavBar.default, {
    user: user
  }), _react.default.createElement(_style.Wrapper, null, _react.default.createElement(_style.SidebarWrapper, null, _react.default.createElement(SidebarComponent, null)), _react.default.createElement(_style.ContentWrapper, null, _react.default.createElement(ContentComponent, null))));
};

AppShell.propTypes = {
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
  }).isRequired,
  sidebar: _propTypes.default.func.isRequired,
  content: _propTypes.default.func.isRequired
};
var _default = AppShell;
exports.default = _default;