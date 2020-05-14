import React from 'react';
import { mount } from 'enzyme';

import Overview from '../index';
import ShareButton from '../../ShareButton';

describe('<Overview />', () => {
  it('should show and hide share window on click', () => {
    const wrapper = mount(
      <Overview
        photo=""
        name=""
        location=""
        statistics={{ likesCount: 0, followingCount: 0, followersCount: 0 }}
        onLike={() => {}}
        onFollow={() => {}}
      />,
    );

    wrapper.find(ShareButton).simulate('click');
    expect(wrapper.state('shareVisible')).toBe(true);

    wrapper.find(ShareButton).simulate('click');
    expect(wrapper.state('shareVisible')).toBe(false);
  });
});
