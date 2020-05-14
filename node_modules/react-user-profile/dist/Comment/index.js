"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getFormattedTimestamp = void 0;

var _react = _interopRequireDefault(require("react"));

var _Photo = _interopRequireDefault(require("../Photo"));

var _PropTypes = _interopRequireDefault(require("./PropTypes"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _Date = _interopRequireDefault(require("./Date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFormattedTimestamp = function getFormattedTimestamp(time) {
  var diff = (Date.now() - time) / 1000 / 60; // Minutes

  if (diff < 60) {
    return "".concat(Math.round(diff), "m");
  }

  if (diff >= 60 && diff < 24 * 60) {
    return "".concat(Math.round(diff / 60), "h");
  }

  return "".concat(Math.round(diff / (24 * 60)), "d");
};

exports.getFormattedTimestamp = getFormattedTimestamp;

var Comment = function Comment(_ref) {
  var photo = _ref.photo,
      userName = _ref.userName,
      content = _ref.content,
      createdAt = _ref.createdAt;
  return _react.default.createElement(_Wrapper.default, null, _react.default.createElement("div", null, _react.default.createElement(_Photo.default, {
    src: photo,
    alt: userName,
    size: "small"
  })), _react.default.createElement("div", null, _react.default.createElement("strong", null, userName), _react.default.createElement("br", null), content), _react.default.createElement(_Date.default, null, getFormattedTimestamp(createdAt)));
};

Comment.propTypes = _PropTypes.default;
var _default = Comment;
exports.default = _default;
//# sourceMappingURL=index.js.map