import {combineReducers} from 'redux';
// import settingsData from 'features/settings/reducers';
import feedData from '../features/feed/reducers';
import navigationData from '../navigation/reducers';
import posts from '../api/movies/reducers';

export default combineReducers({
  // settingsData,
  posts,
  feedData,
  navigationData,
});
