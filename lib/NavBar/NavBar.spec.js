"use strict";

var _jestAutoSnapshots = _interopRequireDefault(require("jest-auto-snapshots"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jestAutoSnapshots.default)(_NavBar.default, './NavBar.jsx');