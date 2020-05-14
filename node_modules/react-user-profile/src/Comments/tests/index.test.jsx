import React from 'react';
import { shallow } from 'enzyme';

import Comments from '../index';
import { Button } from '../HideComments';
import Comment from '../../Comment';

describe('<Comments />', () => {
  it('should hide and show comments on click', () => {
    const wrapper = shallow(<Comments comments={[]} />);

    expect(wrapper.state('visible')).toBe(true);
    wrapper.find(Button).simulate('click');

    expect(wrapper.state('visible')).toBe(false);
    wrapper.find(Button).simulate('click');

    expect(wrapper.state('visible')).toBe(true);
  });

  it('should not render any comment without comments', () => {
    const wrapper = shallow(<Comments comments={[]} />);

    expect(wrapper.find(Comment)).toHaveLength(0);
  });

  it('should render all specified comments', () => {
    const comments = ['a', 'b', 'c', 'd'].map(id => ({
      id,
      photo: '',
      userName: '',
      content: '',
      createdAt: 0,
    }));

    const wrapper = shallow(<Comments comments={comments} />);

    expect(wrapper.find(Comment)).toHaveLength(comments.length);
  });
});
