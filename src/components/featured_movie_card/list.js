import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import MovieCard from '.';

export default class FeaturedMovieCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      itemList: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      categoryName: props.categoryName,
      itemList: props.itemList,
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.featuredCategoryTitle}>
          {this.state.categoryName}
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          <View style={styles.horizontalView}>
            {this.state.itemList.map(m => {
              return (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  poster={m.poster_path}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
