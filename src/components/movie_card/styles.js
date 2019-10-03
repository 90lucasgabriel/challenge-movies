import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    position: 'relative',
    height: 180,
    width: 125,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'center',
    elevation: 3,
    overflow: 'hidden',
  },

  title: {
    margin: 10,
    textAlign: 'center',
  },

  imagePoster: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 400,
    height: 500,
  },
});
