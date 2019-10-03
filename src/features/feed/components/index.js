import React from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MovieCard from '../../../components/movie_card';
import styles from './styles';
import FeaturedMovieCard from '../../../components/featured_movie_card';

export default class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.movies.movies = [];
    this.props.popular.movies = [];
    this.queryMovies();
    this.queryPopular();
  }

  state = {
    movies: '',
    popular: '',
  };

  queryMovies = () => {
    try {
      this.props.queryMovies();
    } catch (e) {
      console.log('error', e);
    }
  };

  queryPopular = () => {
    try {
      this.props.queryPopular();
    } catch (e) {
      console.log('error', e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {/* EM ALTA START */}
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#69f0ae" />
            </View>
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.categoryTitle}>Em Alta</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}>
                <View style={styles.horizontalView}>
                  {this.props.movies.movies.map(m => {
                    return (
                      <MovieCard
                        key={m.movie.ids.trakt}
                        id={m.movie.ids.trakt}
                        title={m.movie.title}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {/* LANCAMENTOS END */}

          {/* POPULARES START */}
          {this.props.popular.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#69f0ae" />
            </View>
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.categoryTitle}>Populares</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}>
                <View style={styles.horizontalView}>
                  {this.props.popular.movies.map(m => {
                    return (
                      <MovieCard
                        key={m.movie.ids.trakt}
                        id={m.movie.ids.trakt}
                        title={m.movie.title}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {/* FEATUREDS END */}

          {/* FEATURED START */}
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#69f0ae" />
            </View>
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.categoryTitle}>Destaques</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}>
                <View style={styles.horizontalView}>
                  {this.props.movies.movies.map(m => {
                    return (
                      <FeaturedMovieCard
                        key={m.movie.ids.trakt}
                        id={m.movie.ids.trakt}
                        title={m.movie.title}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {/* FEATURED END */}

          {/* COMEDIA START */}
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#69f0ae" />
            </View>
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.categoryTitle}>Comédia</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}>
                <View style={styles.horizontalView}>
                  {this.props.movies.movies.map(m => {
                    return (
                      <MovieCard
                        key={m.movie.ids.trakt}
                        id={m.movie.ids.trakt}
                        title={m.movie.title}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {/* COMEDIA END */}
        </ScrollView>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={this.queryMovies}>
          <Icon name="sync" size={22} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
