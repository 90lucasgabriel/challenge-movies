import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      year: '',
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      year: this.props.year,
    });
  }

  componentWillRecieveProps(nextProps, nextState) {
    this.setState({
      id: nextProps.id,
      title: nextProps.title,
      year: nextProps.year,
    });
  }

  render() {
    return (
      <TouchableOpacity key={this.state.id} style={styles.card}>
        <Image
          style={styles.imagePoster}
          resizeMode="cover"
          source={{
            uri: `https://picsum.photos/${Math.floor(Math.random() * 350) +
              250}/${Math.floor(Math.random() * 500) + 400}`,
          }}
        />
        <Text style={styles.title}>{this.state.title}</Text>
      </TouchableOpacity>
    );
  }
}
