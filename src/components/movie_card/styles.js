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
    position: 'absolute',
    bottom: 20,
    margin: 10,
    textAlign: 'center',
  },

  imagePoster: {
    width: '100%',
    height: '100%',
  },

  categoryTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },

  horizontalView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
});
