import {combineReducers} from 'redux';
import feedData from '../features/feed/reducers';
import navigationData from '../navigation/reducers';
import {popular, toprated, upcoming} from '../api/movies/reducers';

export default combineReducers({
  popular,
  toprated,
  upcoming,
  feedData,
  navigationData,
});
