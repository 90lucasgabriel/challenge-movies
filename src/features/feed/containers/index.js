import React from 'react';
import {bindActionCreators} from 'redux';
import * as FeedActions from '../actions';
import * as MoviesActions from '../../../api/movies/actions';
import {connect} from 'react-redux';
import FeedComponent from '../components';

const mapStateToProps = state => ({
  // feedData: state.feedData,
  movies: state.movies,
  // popular: state.popular,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
