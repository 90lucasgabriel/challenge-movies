import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MovieCard from '../../../components/movie_card';
import styles from './styles';

export default class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.movies.movies = [];
    this.queryMovies();
    // this.queryPopular();
    console.log('props', this.props);
  }

  queryMovies = () => {
    try {
      this.props.queryMovies();
      console.log('props1', this.props);
    } catch (error) {
      console.log('error', error);
    }
  };

  // queryPopular = () => {
  //   // this.props.queryPopular();
  // };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {/* EM ALTA START */}
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#0000ff" />
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
                    // console.log(m);
                    return (
                      <View key={m.movie.ids.trakt} style={styles.card}>
                        <Image
                          style={styles.imagePoster}
                          resizeMode="cover"
                          source={{
                            uri: `https://picsum.photos/${Math.floor(
                              Math.random() * 350,
                            ) + 250}/${Math.floor(Math.random() * 500) + 400}`,
                          }}
                        />
                        <Text style={styles.title}>{m.movie.title}</Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )}
          {/* LANCAMENTOS END */}

          {/* POPULARES START
          {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View style={styles.wrapper}>
              <Text style={styles.categoryTitle}>Populares</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}>
                <View style={styles.horizontalView}>
                  {this.props.movies.movies.map(m => {
                    // console.log(m);
                    return (
                      <View key={m.movie.ids.trakt} style={styles.card}>
                        <Image
                          style={styles.imagePoster}
                          resizeMode="cover"
                          source={{
                            uri: `https://picsum.photos/${Math.floor(
                              Math.random() * 350,
                            ) + 250}/${Math.floor(Math.random() * 500) + 400}`,
                          }}
                        />
                        <Text style={styles.title}>{m.movie.title}</Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View> */}
          {/* )} */}
          {/* FEATUREDS END */}

          {/* FEATURED START */}
          {/* {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#0000ff" />
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
                    // console.log(m);
                    return (
                      <View key={m.movie.ids.trakt} style={styles.featuredCard}>
                        <Image
                          style={styles.imagePoster}
                          resizeMode="cover"
                          source={{
                            uri: `https://picsum.photos/${Math.floor(
                              Math.random() * 350,
                            ) + 250}/${Math.floor(Math.random() * 500) + 400}`,
                          }}
                        />
                        <Text style={styles.featuredTitle}>
                          {m.movie.title}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View> */}
          {/* )} */}
          {/* FEATURED END */}

          {/* COMEDIA START */}
          {/* {this.props.movies.isLoading ? (
            <View style={styles.wrapperLoader}>
              <ActivityIndicator size="large" color="#0000ff" />
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
                    // console.log(m);
                    return (
                      <View key={m.movie.ids.trakt} style={styles.card}>
                        <Image
                          style={styles.imagePoster}
                          resizeMode="cover"
                          source={{
                            uri: `https://picsum.photos/${Math.floor(
                              Math.random() * 350,
                            ) + 250}/${Math.floor(Math.random() * 500) + 400}`,
                          }}
                        />
                        <Text style={styles.title}>{m.movie.title}</Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          )} */}
          {/* COMEDIA END */}
        </ScrollView>
        <View>
          <Button
            style={styles.button}
            title="Load Movies"
            onPress={this.queryMovies}
          />
        </View>
      </View>
    );
  }
}
