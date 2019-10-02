import axios from 'axios';
import {
  QUERY_MOVIES,
  QUERY_POPULAR,
  QUERY_PLAYED,
  QUERY_CAST,
} from './constants';

const path = 'https://api.trakt.tv/movies/popular';
const headersConfig = {
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key':
    'fd4cdaf83c7d5ea10f545f3bf9c6ad4ba8ed452b3e3c3b0cac69f3fb971a1136',
};

export const queryMovies = () => {
  return dispatch => {
    dispatch({type: `${QUERY_MOVIES}_PENDING`});
    axios
      .get(`${path}`, {
        headers: headersConfig,
      })
      .then(response => {
        console.log('response', response);
        dispatch({
          type: `${QUERY_MOVIES}_FULFILLED`,
          movies: response.data,
        });
      })
      .catch(e => {
        console.log('error', e);
        dispatch({type: `${QUERY_MOVIES}_REJECTED`, movies: e});
      });
  };
};

// export const queryPopular = () => {
//   return dispatch => {
//     dispatch({type: `${QUERY_POPULAR}_PENDING`});
//     axios
//       .get(`${path}/popular`, {
//         headers: headersConfig,
//       })
//       .then(response => {
//         console.log('response', response);
//         dispatch({type: `${QUERY_POPULAR}_FULFILLED`, movies: response.data});
//       })
//       .catch(e => {
//         console.log('error', e);
//         dispatch({type: `${QUERY_POPULAR}_REJECTED`, movies: e});
//       });
//   };
// };

// export const queryPlayed = () => {
//   return dispatch => {
//     dispatch({type: `${QUERY_PLAYED}_PENDING`});
//     axios
//       .get(`${path}/played`, {
//         headers: headersConfig,
//       })
//       .then(response => {
//         console.log('response', response);
//         dispatch({type: `${QUERY_PLAYED}_FULFILLED`, movies: response.data});
//       })
//       .catch(e => {
//         console.log('error', e);
//         dispatch({type: `${QUERY_PLAYED}_REJECTED`, movies: e});
//       });
//   };
// };

// export const queryCast = movieId => {
//   return dispatch => {
//     dispatch({type: `${QUERY_CAST}_PENDING`});
//     axios
//       .get(`${path}/movies/${movieId}/people`, {
//         headers: headersConfig,
//       })
//       .then(response => {
//         console.log('response', response);
//         dispatch({type: `${QUERY_CAST}_FULFILLED`, movies: response.data});
//       })
//       .catch(e => {
//         console.log('error', e);
//         dispatch({type: `${QUERY_CAST}_REJECTED`, movies: e});
//       });
//   };
// };
