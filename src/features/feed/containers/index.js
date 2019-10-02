import React from 'react';
import {bindActionCreators} from 'redux';
import * as FeedActions from '../actions';
import * as PostsActions from '../../../api/movies/actions';
import {connect} from 'react-redux';
import FeedComponent from '../components';

const mapStateToProps = state => ({
  feedData: state.feedData,
  posts: state.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
