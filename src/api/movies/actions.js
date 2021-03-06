import * as movies from './index';
import {
  QUERY_NOWPLAYING,
  QUERY_POPULAR,
  QUERY_TOPRATED,
  QUERY_UPCOMING,
} from './constants';

export const queryNowPlaying = () => {
  return {
    type: QUERY_NOWPLAYING,
    payload: movies.queryNowPlaying(),
  };
};

export const queryPopular = () => {
  return {
    type: QUERY_POPULAR,
    payload: movies.queryPopular(),
  };
};

export const queryTopRated = () => {
  return {
    type: QUERY_TOPRATED,
    payload: movies.queryTopRated(),
  };
};

export const queryUpcoming = () => {
  return {
    type: QUERY_UPCOMING,
    payload: movies.queryUpcoming(),
  };
};
