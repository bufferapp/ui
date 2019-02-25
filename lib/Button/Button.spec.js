"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestAutoSnapshots = _interopRequireDefault(require("jest-auto-snapshots"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Button = _interopRequireDefault(require("./Button"));

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */
(0, _jestAutoSnapshots.default)(_Button.default, './Button.jsx');
test('Button renders styles properly', function () {
  var tree = _reactTestRenderer.default.create(_react.default.createElement(_Button.default, {
    type: "primary",
    onClick: function onClick() {},
    label: "Primary"
  })).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#FFFFFF');
});
test('Disabled button is disabled', function () {
  var tree = _reactTestRenderer.default.create(_react.default.createElement(_Button.default, {
    type: "primary",
    onClick: function onClick() {},
    label: "Primary",
    disabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#E0E0E0');
});