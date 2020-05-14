"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Header = _interopRequireDefault(require("../../Header"));

var _Overview = _interopRequireDefault(require("../../Overview"));

var _LikeButton = _interopRequireDefault(require("../../LikeButton"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Comments = _interopRequireDefault(require("../../Comments"));

var _NewComment = _interopRequireDefault(require("../../NewComment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<UserProfile />', function () {
  var userProps = {
    photo: '',
    userName: '',
    location: ''
  };
  it('should render header', function () {
    expect((0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps)).find(_Header.default)).toHaveLength(1);
  });
  it('should render overview', function () {
    expect((0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps)).find(_Overview.default)).toHaveLength(1);
  });
  it('should render comments', function () {
    expect((0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps)).find(_Comments.default)).toHaveLength(1);
  });
  it('should render new comment', function () {
    expect((0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps)).find(_NewComment.default)).toHaveLength(1);
  });
  it('should increase like count on heart click', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps));
    wrapper.find(_Overview.default).dive().find(_LikeButton.default).simulate('click');
    expect(wrapper.state('likesCount')).toEqual(1);
  });
  it('should increase followers count on button click', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, userProps));
    wrapper.find(_Overview.default).dive().find(_Button.default).simulate('click');
    expect(wrapper.state('followersCount')).toEqual(1);
  });
  it('should not add empty comment on form submit', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_index.default, userProps));
    var form = wrapper.find(_NewComment.default);
    form.instance().input.current.value = '';
    form.simulate('submit');
    expect(wrapper.state('comments')).toHaveLength(0);
  });
  it('should add comment on form submit', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_index.default, userProps));
    var form = wrapper.find(_NewComment.default);
    form.instance().input.current.value = 'Hello';
    form.simulate('submit');
    expect(wrapper.state('comments')).toHaveLength(1);
  });
});
//# sourceMappingURL=index.test.js.map