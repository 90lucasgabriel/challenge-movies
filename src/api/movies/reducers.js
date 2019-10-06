import {QUERY_UPCOMING, QUERY_POPULAR} from './constants';

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case `${QUERY_UPCOMING}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${QUERY_UPCOMING}_FULFILLED`:
      console.log('action', action);
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case `${QUERY_UPCOMING}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };

    case `${QUERY_POPULAR}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${QUERY_POPULAR}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        popular: action.payload,
      };

    case `${QUERY_POPULAR}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
