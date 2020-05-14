"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  id: _propTypes.default.string.isRequired,
  photo: _propTypes.default.string.isRequired,
  userName: _propTypes.default.string.isRequired,
  content: _propTypes.default.string.isRequired,
  createdAt: _propTypes.default.number.isRequired
};
exports.default = _default;
//# sourceMappingURL=PropTypes.js.map