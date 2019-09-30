import React from 'react';
import {connect} from 'react-redux';
import UserProfileComponent from '../components';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const UserProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileComponent);
