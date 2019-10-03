import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import MovieCard from '.';

export default class MovieCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      itemList: '',
    };
  }

  componentDidMount() {
    this.setState({
      categoryName: this.props.categoryName,
      itemList: this.props.itemList,
    });
  }

  componentWillRecieveProps(nextProps, nextState) {
    this.setState({
      categoryName: nextProps.categoryName,
      itemList: nextProps.itemList,
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.categoryTitle}>{this.state.categoryName}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          <View style={styles.horizontalView}>
            {this.state.itemList.map(m => {
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
    );
  }
}
