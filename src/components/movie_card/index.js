import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      poster: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      id: props.id,
      poster: props.poster,
      title: props.title,
    };
  }

  render() {
    return (
      <TouchableOpacity key={this.state.id} style={styles.card}>
        <Image
          style={styles.imagePoster}
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${this.state.poster}`,
          }}
        />
      </TouchableOpacity>
    );
  }
}
