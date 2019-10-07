import {combineReducers} from 'redux';
import feedData from '../features/feed/reducers';
import navigationData from '../navigation/reducers';
import {nowplaying, popular, toprated, upcoming} from '../api/movies/reducers';

export default combineReducers({
  nowplaying,
  popular,
  toprated,
  upcoming,
  feedData,
  navigationData,
});
