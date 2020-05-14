"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0;\n  padding: 0 0.5rem 0 0;\n  list-style-type: none;\n  max-height: 27rem;\n  text-align: left;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar-button {\n    display: none;\n    height: 0.3rem;\n  }\n  ::-webkit-scrollbar-button:hover {\n    background-color: #aaa;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 44, 113, 0.12);\n    border-radius: 6.25rem;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background-color: rgba(0, 44, 113, 0.3);\n  }\n  ::-webkit-scrollbar-track {\n    background-color: rgba(216, 216, 216, 0.3);\n    border-radius: 6.25rem;\n  }\n  ::-webkit-scrollbar-track:hover {\n    background-color: rgba(216, 216, 216, 0.5);\n  }\n  ::-webkit-scrollbar {\n    width: 0.3rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.ul(_templateObject());

exports.default = _default;
//# sourceMappingURL=List.js.map