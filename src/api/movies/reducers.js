import {
  QUERY_NOWPLAYING,
  QUERY_POPULAR,
  QUERY_TOPRATED,
  QUERY_UPCOMING,
} from './constants';

export function nowplaying(state = [], action) {
  switch (action.type) {
    case `${QUERY_NOWPLAYING}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${QUERY_NOWPLAYING}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case `${QUERY_NOWPLAYING}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export function popular(state = [], action) {
  switch (action.type) {
    case `${QUERY_POPULAR}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${QUERY_POPULAR}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
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

export function toprated(state = [], action) {
  switch (action.type) {
    case `${QUERY_TOPRATED}_PENDING`:
      return {
        ...state,
        isLoading: true,
      };

    case `${QUERY_TOPRATED}_FULFILLED`:
      console.log('action', action);
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case `${QUERY_TOPRATED}_REJECTED`:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}

export function upcoming(state = [], action) {
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

    default:
      return state;
  }
}
