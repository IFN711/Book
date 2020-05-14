"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  box-shadow: 0 0 0.25rem 0 rgba(172, 172, 172, 0.5);\n  border-radius: 0.31rem;\n\n  > ", " {\n    &:last-child {\n      background: none;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n\n    &:not(:last-child) {\n      margin-bottom: 1rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div(_templateObject(), _Box.default);

exports.default = _default;
//# sourceMappingURL=Main.js.map