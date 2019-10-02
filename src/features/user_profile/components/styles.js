import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    flex: 1,
  },

  scrollContainer: {
    flexDirection: 'column',
    display: 'flex',
  },

  imageProfile: {
    position: 'absolute',
    width: 400,
    height: 400,
  },

  content: {
    flex: 1,
    zIndex: 5,
    marginTop: 380,
    paddingTop: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 12,
    shadowColor: 'black',
  },

  item: {
    padding: 12,
    fontSize: 22,
    height: 60,
    color: 'grey',
  },
});

export default styles;
