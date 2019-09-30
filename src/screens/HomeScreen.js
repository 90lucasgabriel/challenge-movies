import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import {styles} from './HomeScreen.style';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lucas</Text>
        </View>

        <ScrollView style={styles.scrollContainer} />

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder="Criar uma nota..."
            placeholderTextColor="#919191"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
