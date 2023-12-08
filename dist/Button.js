"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      background: "black",
      color: "white"
    },
    onClick: onClick
  }, text);
};
var _default = exports["default"] = Button;