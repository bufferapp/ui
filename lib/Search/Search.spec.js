"use strict";

var _jestAutoSnapshots = _interopRequireDefault(require("jest-auto-snapshots"));

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jestAutoSnapshots.default)(_Search.default, './Search.jsx');