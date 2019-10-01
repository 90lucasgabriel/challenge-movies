import React from 'react';
import {bindActionCreators} from 'redux';
import * as FeedActions from '../actions';
import {connect} from 'react-redux';
import FeedComponent from '../components';

const mapStateToProps = state => ({
  feedData: state.feedData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FeedActions, dispatch);

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
