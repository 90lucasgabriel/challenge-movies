import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MoviesActions from '../../../api/movies/actions';
import FeedComponent from '../components';

const mapStateToProps = state => ({
  movies: state.movies,
  popular: state.popular,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
