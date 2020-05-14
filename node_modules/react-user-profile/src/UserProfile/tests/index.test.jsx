import React from 'react';
import { shallow, mount } from 'enzyme';

import UserProfile from '../index';
import Header from '../../Header';
import Overview from '../../Overview';
import LikeButton from '../../LikeButton';
import Button from '../../Button';
import Comments from '../../Comments';
import NewComment from '../../NewComment';

describe('<UserProfile />', () => {
  const userProps = { photo: '', userName: '', location: '' };

  it('should render header', () => {
    expect(shallow(<UserProfile {...userProps} />).find(Header)).toHaveLength(1);
  });

  it('should render overview', () => {
    expect(shallow(<UserProfile {...userProps} />).find(Overview)).toHaveLength(1);
  });

  it('should render comments', () => {
    expect(shallow(<UserProfile {...userProps} />).find(Comments)).toHaveLength(1);
  });

  it('should render new comment', () => {
    expect(shallow(<UserProfile {...userProps} />).find(NewComment)).toHaveLength(1);
  });

  it('should increase like count on heart click', () => {
    const wrapper = shallow(<UserProfile {...userProps} />);
    wrapper
      .find(Overview)
      .dive()
      .find(LikeButton)
      .simulate('click');

    expect(wrapper.state('likesCount')).toEqual(1);
  });

  it('should increase followers count on button click', () => {
    const wrapper = shallow(<UserProfile {...userProps} />);

    wrapper
      .find(Overview)
      .dive()
      .find(Button)
      .simulate('click');

    expect(wrapper.state('followersCount')).toEqual(1);
  });

  it('should not add empty comment on form submit', () => {
    const wrapper = mount(<UserProfile {...userProps} />);
    const form = wrapper.find(NewComment);

    form.instance().input.current.value = '';
    form.simulate('submit');

    expect(wrapper.state('comments')).toHaveLength(0);
  });

  it('should add comment on form submit', () => {
    const wrapper = mount(<UserProfile {...userProps} />);
    const form = wrapper.find(NewComment);

    form.instance().input.current.value = 'Hello';
    form.simulate('submit');

    expect(wrapper.state('comments')).toHaveLength(1);
  });
});
