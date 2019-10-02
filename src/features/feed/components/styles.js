import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2E2E2',
    flex: 1,
  },

  scrollContainer: {
    flexDirection: 'column',
    display: 'flex',
  },

  wrapperLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
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

  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },

  categoryTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },

  horizontalView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },

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

  refreshButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 10,
    backgroundColor: '#69f0ae',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});

export default styles;
