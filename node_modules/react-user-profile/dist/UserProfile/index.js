"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = _interopRequireDefault(require("../Header"));

var _Overview = _interopRequireDefault(require("../Overview"));

var _Comments = _interopRequireDefault(require("../Comments"));

var _PropTypes = _interopRequireDefault(require("../Comment/PropTypes"));

var _NewComment = _interopRequireDefault(require("../NewComment"));

var _Style = _interopRequireDefault(require("./Style"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _Main = _interopRequireDefault(require("./Main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile(props) {
    var _this;

    _classCallCheck(this, UserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProfile).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLike", function () {
      _this.setState(function (prevState) {
        return {
          likesCount: prevState.likesCount + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFollow", function () {
      _this.setState(function (prevState) {
        return {
          followersCount: prevState.followersCount + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNewComment", function (e, value) {
      e.preventDefault();
      var comment = {
        id: Math.floor(Math.random() * 100000).toString(),
        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
        userName: 'Mike Ross',
        content: value,
        createdAt: Date.now()
      };

      _this.setState(function (prevState) {
        return {
          comments: _toConsumableArray(prevState.comments).concat([comment])
        };
      });
    });

    var initialLikesCount = props.initialLikesCount,
        initialFollowingCount = props.initialFollowingCount,
        initialFollowersCount = props.initialFollowersCount,
        initialComments = props.initialComments;
    _this.state = {
      likesCount: initialLikesCount,
      followingCount: initialFollowingCount,
      followersCount: initialFollowersCount,
      comments: initialComments
    };
    return _this;
  }

  _createClass(UserProfile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photo = _this$props.photo,
          userName = _this$props.userName,
          location = _this$props.location;
      var _this$state = this.state,
          likesCount = _this$state.likesCount,
          followingCount = _this$state.followingCount,
          followersCount = _this$state.followersCount,
          comments = _this$state.comments;
      var statistics = {
        likesCount: likesCount,
        followingCount: followingCount,
        followersCount: followersCount
      };
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Style.default, null), _react.default.createElement(_Wrapper.default, null, _react.default.createElement(_Main.default, null, _react.default.createElement(_Header.default, null), _react.default.createElement(_Overview.default, {
        photo: photo,
        name: userName,
        location: location,
        statistics: statistics,
        onLike: this.onLike,
        onFollow: this.onFollow
      }), _react.default.createElement(_Comments.default, {
        comments: comments
      })), _react.default.createElement(_NewComment.default, {
        onNewComment: this.onNewComment
      })));
    }
  }]);

  return UserProfile;
}(_react.Component);

exports.default = UserProfile;

_defineProperty(UserProfile, "propTypes", {
  photo: _propTypes.default.string.isRequired,
  userName: _propTypes.default.string.isRequired,
  location: _propTypes.default.string.isRequired,
  initialLikesCount: _propTypes.default.number,
  initialFollowingCount: _propTypes.default.number,
  initialFollowersCount: _propTypes.default.number,
  initialComments: _propTypes.default.arrayOf(_propTypes.default.shape(_PropTypes.default))
});

_defineProperty(UserProfile, "defaultProps", {
  initialLikesCount: 0,
  initialFollowingCount: 0,
  initialFollowersCount: 0,
  initialComments: []
});
//# sourceMappingURL=index.js.map