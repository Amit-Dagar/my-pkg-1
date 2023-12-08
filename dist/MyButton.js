"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MyButton = function MyButton(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "class": "btn btn-ghost-active",
    onClick: onClick
  }, text);
};
var _default = exports["default"] = MyButton;