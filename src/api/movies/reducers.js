import {
  QUERY_MOVIES,
  QUERY_POPULAR,
  QUERY_PLAYED,
  QUERY_CAST,
} from './constants';

const initState = {
  isLoading: false,
  error: false,
};

export default function movieReducer(state = [], action) {
  switch (action.type) {
    case `${QUERY_MOVIES}_PENDING`:
      return Object.assign({}, state, {isLoading: true});

    case `${QUERY_MOVIES}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        movies: action.movies,
      });

    case `${QUERY_MOVIES}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        movies: action.movies,
      });

    // case `${QUERY_POPULAR}_PENDING`:
    //   return Object.assign({}, state, {isLoading: true});

    // case `${QUERY_POPULAR}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     popular: action.movies,
    //   });

    // case `${QUERY_POPULAR}_REJECTED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     popular: action.movies,
    //   });

    // case `${QUERY_PLAYED}_PENDING`:
    //   return Object.assign({}, state, {isLoading: true});

    // case `${QUERY_PLAYED}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     movies: action.movies,
    //   });

    // case `${QUERY_PLAYED}_REJECTED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     movies: action.movies,
    //   });

    // case `${QUERY_CAST}_PENDING`:
    //   return Object.assign({}, state, {isLoading: true});

    // case `${QUERY_CAST}_FULFILLED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     movies: action.movies,
    //   });

    // case `${QUERY_CAST}_REJECTED`:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     movies: action.movies,
    //   });

    default:
      return state;
  }
}
