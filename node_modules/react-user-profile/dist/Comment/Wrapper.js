"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Photo = _interopRequireDefault(require("../Photo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2rem 0 1rem 0;\n  font-size: 0.88rem;\n  color: #444444;\n\n  &:first-child {\n    padding-top: 1rem;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #ebebeb;\n  }\n\n  strong {\n    font-weight: 500;\n    color: #002c71;\n  }\n\n  ", " {\n    margin-top: -30%;\n  }\n\n  > *:nth-child(2) {\n    margin-left: 0.7rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.li(_templateObject(), _Photo.default);

exports.default = _default;
//# sourceMappingURL=Wrapper.js.map