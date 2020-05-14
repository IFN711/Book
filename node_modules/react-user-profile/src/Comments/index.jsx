import React, { PureComponent } from 'react';

import Comment from '../Comment';

import Wrapper from './Wrapper';
import HideComments, { Button as HideCommentsButton } from './HideComments';
import List from './List';

class Comments extends PureComponent {
  constructor() {
    super();

    this.state = { visible: true };
  }

  onToggle = () => {
    this.setState(prevProps => ({ visible: !prevProps.visible }));
  };

  render() {
    const { comments } = this.props;
    const { visible } = this.state;

    return (
      <Wrapper>
        <HideComments>
          <HideCommentsButton onClick={this.onToggle}>
            {visible ? 'Hide' : 'Show'}
            {' '}
comments (
            {comments.length}
)
          </HideCommentsButton>
        </HideComments>
        {visible && (
          <List>
            {comments
              .sort((a, b) => b.createdAt - a.createdAt)
              .map(comment => (
                <Comment key={comment.id} {...comment} />
              ))}
          </List>
        )}
      </Wrapper>
    );
  }
}

export default Comments;
