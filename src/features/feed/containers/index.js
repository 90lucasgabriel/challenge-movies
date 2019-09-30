import React from 'react';
import {connect} from 'react-redux';
import FeedComponent from '../components';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
