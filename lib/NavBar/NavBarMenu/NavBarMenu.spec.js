"use strict";

var _jestAutoSnapshots = _interopRequireDefault(require("jest-auto-snapshots"));

var _NavBarMenu = _interopRequireDefault(require("./NavBarMenu"));

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jestAutoSnapshots.default)(_NavBarMenu.default, './NavBarMenu.jsx');