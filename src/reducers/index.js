import {combineReducers} from 'redux';
import feedData from '../features/feed/reducers';
import navigationData from '../navigation/reducers';
import movies from '../api/movies/reducers';
import popular from '../api/movies/reducers';

export default combineReducers({
  movies,
  popular,
  feedData,
  navigationData,
});
