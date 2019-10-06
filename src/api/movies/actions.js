import * as movies from './index';
import {QUERY_UPCOMING, QUERY_POPULAR} from './constants';

export const queryUpcoming = () => {
  return {
    type: QUERY_UPCOMING,
    payload: movies.queryUpcoming(),
  };
};

export const queryPopular = () => {
  return {
    type: QUERY_POPULAR,
    payload: movies.queryPopular(),
  };
};
