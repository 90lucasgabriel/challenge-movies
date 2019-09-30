import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './';

export default class FeedComponent extends React.Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  render() {
    return (
      <View style={styles}>
        <Text>This is the Feed entry components</Text>
      </View>
    );
  }
}
