import React from 'react';
import {Text, View, TextInput, Button, ScrollView} from 'react-native';
import MovieCard from '../../../components/movie_card';
import styles from './styles';
// import {fetchAllPosts} from '../../../api/movies/actions';
import MoviesService from '../../../api/movies';
// import MoviesService from '../../../api/movies';

export default class FeedComponent extends React.Component {
  // movies = new MoviesService();

  constructor(props) {
    super(props);
    // console.log('fetchAllPosts', fetchAllPosts());
    // this.movies.query();
    console.log('props', props);

    // this.movies.query().then(data => {
    //   console.log('success', data);
    // });
    console.log('state', this.state);

    // this.props.fetchAllPosts();
    // console.log('props.posts', this.props.posts);
  }

  state = {
    newTodoText: '',
  };

  addNewTodo = async () => {
    // console.log('text', this.state);
    // this.props.addTodo(this.state.newTodoText);
    // this.setState({newTodoText: ''});
    console.log(this.props);

    await this.props.fetchAllPosts().then(p => {
      console.log('p', p.data);
    });
  };

  render() {
    return (
      // <ScrollView style={styles.scrollContainer}>
      //   <View style={styles.wrapper}>
      //     <MovieCard>aoishd</MovieCard>
      //     <MovieCard style={styles.blue} />
      //     <MovieCard />
      //     <MovieCard style={styles.blue} />
      //     <MovieCard />
      //     <MovieCard style={styles.blue} />
      //   </View>
      // </ScrollView>
      <View style={styles.container}>
        {this.props.feedData.map(todo => (
          <Text key={todo.id} style={styles.text}>
            {todo.text}
          </Text>
        ))}
        <TextInput
          style={styles.textInput}
          placeholder="Criar uma nota..."
          value={this.state.newTodoText}
          onChangeText={newTodoText => this.setState({newTodoText})}
        />
        <Button style={styles.button} title="+" onPress={this.addNewTodo} />
      </View>
    );
  }
}
