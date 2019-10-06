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

export default class FeedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.movies = {
      value: {
        data: {
          results: [],
        },
      },
    };
  }

  queryUpcoming = async () => {
    this.latest = await this.props.queryUpcoming();
  };

  queryPopular = async () => {
    this.latest = await this.props.queryPopular();
  };

  render() {
    if (this.props.movies.movies) {
      this.latestView = (
        <MovieCardList
          categoryName="Em breve"
          itemList={this.props.movies.movies.data.results}
        />
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {/* EM ALTA START */}
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#69f0ae" />
            </View>
          ) : (
            this.latestView
          )}
          {/* EM ALTA END */}

          {/* POPULARES START */}
          {/* {this.props.popular.isLoading ? (
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
          )} */}
          {/* POPULARES END */}

          {/* FEATURED START */}
          {/* {this.props.movies.isLoading ? (
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
          )} */}
          {/* FEATURED END */}

          {/* COMEDIA START */}
          {/* {this.props.movies.isLoading ? (
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
          )} */}
          {/* COMEDIA END */}
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
