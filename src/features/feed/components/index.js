import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

import styles from './styles';

export default class FeedComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('state', this.state);
  }

  state = {
    newTodoText: '',
  };

  addNewTodo = () => {
    console.log('text', this.state);
    this.props.addTodo(this.state.newTodoText);
    this.setState({newTodoText: ''});
  };

  render() {
    return (
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
