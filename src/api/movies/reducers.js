import {FETCH_POST} from './types';

export default function postReducer(state = [], action) {
  console.log('movies reducers', action.type);
  switch (action.type) {
    case FETCH_POST:
      console.log('movies FETCH_POST', action.posts);
      return action.posts;

    case `${FETCH_POST}_PENDING`:
      console.log('FETCH_POST_PENDING', action);
      return;

    case `${FETCH_POST}_FULFILLED`:
      console.log('FETCH_POST_FULFILLED', action);
      return {
        isFulfilled: true,
        data: action.posts,
      };

    case `${FETCH_POST}_REJECTED`:
      console.log('movies FETCH_POST_REJECTED', action);
      return {
        isRejected: true,
        error: action.posts,
      };
    default:
      return state;
  }
}
