import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#DDD',
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },

  scrollContainer: {
    flex: 1,
    // marginBottom: 100,
    backgroundColor: '#E2E2E2',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#FFF',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#EDEDED',
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  addButtonText: {
    color: '#FFF',
    fontSize: 24,
  },
});
