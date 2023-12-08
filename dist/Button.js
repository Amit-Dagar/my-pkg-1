"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// src/Button.js

var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: className,
    onClick: onClick
  }, console.log(text, className), text);
};
var _default = exports["default"] = Button;