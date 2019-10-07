import axios from 'axios';

const path = 'https://api.themoviedb.org/3';
const paramsConfig = {
  api_key: 'dd656e8f52997de093bf8523eda0de95',
};

export const queryNowPlaying = () => {
  return axios.get(`${path}/movie/now_playing`, {
    params: paramsConfig,
  });
};

export const queryPopular = () => {
  return axios.get(`${path}/movie/popular`, {
    params: paramsConfig,
  });
};

export const queryTopRated = () => {
  return axios.get(`${path}/movie/top_rated`, {
    params: paramsConfig,
  });
};

export const queryUpcoming = () => {
  return axios.get(`${path}/movie/upcoming`, {
    params: paramsConfig,
  });
};
