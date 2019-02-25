"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../../Icon");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** NavBar Menu component used by the Select component to show a custom User name and avatar
 *  button */
var NavBarMenu = function NavBarMenu(_ref) {
  var user = _ref.user,
      onClick = _ref.onClick;
  var name = user.name,
      email = user.email,
      avatar = user.avatar,
      menuItems = user.menuItems;
  return _react.default.createElement(_style.NavBarStyled, null, _react.default.createElement(_style.NavBarUser, null, name && _react.default.createElement(_style.NavBarName, null, name), _react.default.createElement(_style.NavBarEmail, null, email)), avatar && _react.default.createElement(_style.NavBarAvatar, {
    avatar: user.avatar,
    onClick: onClick
  }), menuItems.length > 0 && _react.default.createElement(_style.NavBarChavron, {
    onClick: onClick
  }, _react.default.createElement(_Icon.ChevronDown, {
    color: "grayLight",
    size: "large"
  })));
};

NavBarMenu.propTypes = {
  /** User Name and Email to be shown in the NavBar */
  user: _propTypes.default.shape({
    name: _propTypes.default.string,
    email: _propTypes.default.string.isRequired,
    avatar: _propTypes.default.string,
    menuItems: _propTypes.default.array
  }).isRequired,

  /** OnClick function to be called on Avatar click, passed by the Select component */
  onClick: _propTypes.default.func.isRequired
};
var _default = NavBarMenu;
exports.default = _default;