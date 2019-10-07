import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  featuredCard: {
    position: 'relative',
    height: 320,
    width: 190,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'center',
    overflow: 'hidden',
    elevation: 5,
  },

  featuredCategoryTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },

  imagePoster: {
    width: '100%',
    height: '100%',
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
