// import React from 'react';
// import Axios from 'axios';

// const path = 'https://api.trakt.tv/calendars/all/movies/';

// class MoviesService extends React.Component {
//   query() {
//     console.log('path', path);
//     return Axios.get(path, {
//       headers: {
//         'Content-Type': 'application/json',
//         'trakt-api-version': '2',
//         'trakt-api-key':
//           'fd4cdaf83c7d5ea10f545f3bf9c6ad4ba8ed452b3e3c3b0cac69f3fb971a1136',
//       },
//     });
//   }
// }
// export default MoviesService;

// import React from 'react';
// import {bindActionCreators} from 'redux';
// import * as MoviesActions from './actions';
// import {connect} from 'react-redux';
// import FeedComponent from '../components';

// const mapStateToProps = state => ({
//   movies: state.movies,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(MoviesActions, dispatch);

// export const Feed = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(FeedComponent);
