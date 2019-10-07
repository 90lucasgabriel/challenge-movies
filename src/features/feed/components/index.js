import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import MovieCardList from '../../../components/movie_card/list';
import SpinnerLoader from '../../../components/spinner_loader';

export default class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.queryPopular();
    this.queryTopRated();
    this.queryUpcoming();
  };

  queryPopular = async () => {
    this.popular = await this.props.queryPopular();
  };

  queryTopRated = async () => {
    this.toprated = await this.props.queryTopRated();
  };

  queryUpcoming = async () => {
    this.upcoming = await this.props.queryUpcoming();
  };

  _renderMovieCardList(props, categoryName) {
    console.log('props', this.props);
    if (props.movies) {
      return (
        <MovieCardList
          categoryName={categoryName}
          itemList={props.movies.data.results}
        />
      );
    }

    return (
      <SpinnerLoader isVisible={props.isLoading} size="large" color="#69f0ae" />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {this._renderMovieCardList(this.props.upcoming, 'Lançamentos')}
          {this._renderMovieCardList(this.props.popular, 'Popular')}
          {this._renderMovieCardList(this.props.toprated, 'Melhores Avaliados')}
        </ScrollView>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={this.queryUpcoming}>
          <Icon name="sync" size={22} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
