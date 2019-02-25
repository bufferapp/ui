"use strict";

var _jestAutoSnapshots = _interopRequireDefault(require("jest-auto-snapshots"));

require("jest-styled-components");

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */
(0, _jestAutoSnapshots.default)(_Input.default, './Input.jsx');