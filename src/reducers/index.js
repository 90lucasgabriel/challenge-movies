import {combineReducers} from 'redux';
// import settingsData from 'features/settings/reducers';
import feedData from '../features/feed/reducers';
import navigationData from '../navigation/reducers';
import movies from '../api/movies/reducers';
import trending from '../api/movies/reducers';

export default combineReducers({
  // settingsData,
  movies,
  trending,
  feedData,
  navigationData,
});
