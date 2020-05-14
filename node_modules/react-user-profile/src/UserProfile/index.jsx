import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Overview from '../Overview';
import Comments from '../Comments';
import CommentPropTypes from '../Comment/PropTypes';
import NewComment from '../NewComment';

import Style from './Style';
import Wrapper from './Wrapper';
import Main from './Main';

export default class UserProfile extends Component {
  static propTypes = {
    photo: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    initialLikesCount: PropTypes.number,
    initialFollowingCount: PropTypes.number,
    initialFollowersCount: PropTypes.number,
    initialComments: PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)),
  };

  static defaultProps = {
    initialLikesCount: 0,
    initialFollowingCount: 0,
    initialFollowersCount: 0,
    initialComments: [],
  };

  constructor(props) {
    super(props);

    const {
      initialLikesCount,
      initialFollowingCount,
      initialFollowersCount,
      initialComments,
    } = props;

    this.state = {
      likesCount: initialLikesCount,
      followingCount: initialFollowingCount,
      followersCount: initialFollowersCount,
      comments: initialComments,
    };
  }

  onLike = () => {
    this.setState(prevState => ({ likesCount: prevState.likesCount + 1 }));
  };

  onFollow = () => {
    this.setState(prevState => ({ followersCount: prevState.followersCount + 1 }));
  };

  onNewComment = (e, value) => {
    e.preventDefault();

    const comment = {
      id: Math.floor(Math.random() * 100000).toString(),
      photo:
        'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
      userName: 'Mike Ross',
      content: value,
      createdAt: Date.now(),
    };

    this.setState(prevState => ({ comments: [...prevState.comments, comment] }));
  };

  render() {
    const { photo, userName, location } = this.props;
    const {
      likesCount, followingCount, followersCount, comments,
    } = this.state;

    const statistics = { likesCount, followingCount, followersCount };

    return (
      <>
        <Style />
        <Wrapper>
          <Main>
            <Header />
            <Overview
              photo={photo}
              name={userName}
              location={location}
              statistics={statistics}
              onLike={this.onLike}
              onFollow={this.onFollow}
            />
            <Comments comments={comments} />
          </Main>
          <NewComment onNewComment={this.onNewComment} />
        </Wrapper>
      </>
    );
  }
}
