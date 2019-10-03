import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  featuredCard: {
    position: 'relative',
    height: 300,
    width: 170,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'center',
    overflow: 'hidden',
    elevation: 5,
  },

  featuredTitle: {
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imagePoster: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 400,
    height: 500,
  },
});
