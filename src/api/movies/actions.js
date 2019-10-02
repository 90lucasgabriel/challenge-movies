import axios from 'axios';
import {QUERY_MOVIES, QUERY_POPULAR} from './constants';

const path = 'https://api.trakt.tv/movies';
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
      .get(`${path}/trending`, {
        headers: headersConfig,
      })
      .then(response => {
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

export const queryPopular = () => {
  return dispatch => {
    dispatch({type: `${QUERY_POPULAR}_PENDING`});
    axios
      .get(`${path}/popular`, {
        headers: headersConfig,
      })
      .then(response => {
        dispatch({type: `${QUERY_POPULAR}_FULFILLED`, popular: response.data});
      })
      .catch(e => {
        console.log('error', e);
        dispatch({type: `${QUERY_POPULAR}_REJECTED`, popular: e});
      });
  };
};
