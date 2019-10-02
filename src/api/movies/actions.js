import React from 'react';
import {FETCH_POST} from './types';
import axios from 'axios';
import {createAsyncAction} from 'redux-promise-middleware-actions';

const path = 'https://api.trakt.tv/calendars/all/movies/';

// export function fetchPosts(posts) {
//   console.log('posts', posts);
//   return {
//     type: FETCH_POST,
//     payload: new Promise(posts),
//   };
// }

// export function fetchAllPosts() {
//   console.log('dispatch');
//   console.log('axios');
//   return axios
//     .get(path, {
//       headers: {
//         'Content-Type': 'application/json',
//         'trakt-api-version': '2',
//         'trakt-api-key':
//           'fd4cdaf83c7d5ea10f545f3bf9c6ad4ba8ed452b3e3c3b0cac69f3fb971a1136',
//       },
//     })
//     .then(response => {
//       console.log('response', response);
//       fetchPosts(response.data);
//     })
//     .catch(error => {
//       throw error;
//     });
// }

export const fetchAllPosts = () => ({
  type: FETCH_POST,
  posts: axios
    .get('https://jsonplaceholder.typicode.com/posts/42', {
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key':
          'fd4cdaf83c7d5ea10f545f3bf9c6ad4ba8ed452b3e3c3b0cac69f3fb971a1136',
      },
    })
    .then(p => {
      console.log('p', p);
    }),
});

export const fetchAll = createAsyncAction(FETCH_POST, async () => {
  const response = await axios.get(path, {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-version': '2',
      'trakt-api-key':
        'fd4cdaf83c7d5ea10f545f3bf9c6ad4ba8ed452b3e3c3b0cac69f3fb971a1136',
    },
  });
  return response.json();
});
