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
