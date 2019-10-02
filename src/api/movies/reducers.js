import {QUERY_MOVIES, QUERY_POPULAR} from './constants';

const initState = {
  isLoading: false,
  error: false,
  movies: '',
  popular: '',
};

export default function moviesReducer(state = [], action) {
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

    case `${QUERY_POPULAR}_PENDING`:
      return Object.assign({}, state, {isLoading: true});

    case `${QUERY_POPULAR}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        popular: action.popular,
      });

    case `${QUERY_POPULAR}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        popular: action.popular,
      });

    default:
      return state;
  }
}
