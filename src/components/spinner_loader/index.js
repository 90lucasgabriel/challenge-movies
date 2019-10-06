import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

export default class SpinnerLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isVisible: props.isVisible,
      size: props.size,
      color: props.color,
    };
  }

  _renderSpinnerLoader() {
    if (this.state.isVisible) {
      return (
        <View style={styles.wrapperLoader}>
          <ActivityIndicator size="large" color="#69f0ae" />
        </View>
      );
    }

    return <View />;
  }

  render() {
    return this._renderSpinnerLoader();
  }
}
