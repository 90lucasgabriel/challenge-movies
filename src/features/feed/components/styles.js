import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 300,
  },

  scrollContainer: {
    flexDirection: 'column',
    display: 'flex',
  },

  wrapper: {
    justifyContent: 'space-between',
  },

  textInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },

  button: {
    position: 'absolute',
    borderRadius: 50,
    bottom: 20,
    right: 40,
  },

  blue: {
    backgroundColor: 'blue',
  },
});

export default styles;
