"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarItem = function SidebarItem(_ref) {
  var Icon = _ref.icon,
      label = _ref.label,
      url = _ref.url,
      active = _ref.active;
  return _react.default.createElement(_style.SidebarItemStyled, {
    href: url,
    active: active
  }, Icon && _react.default.createElement(Icon, {
    color: "white"
  }), _react.default.createElement(_style.Label, {
    hasIcon: !!Icon
  }, label));
};

SidebarItem.propTypes = {
  icon: _propTypes.default.func,
  label: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool
};
SidebarItem.defaultProps = {
  icon: null,
  active: false
};
var _default = SidebarItem;
exports.default = _default;