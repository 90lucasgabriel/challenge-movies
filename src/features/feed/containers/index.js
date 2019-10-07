import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MoviesActions from '../../../api/movies/actions';
import FeedComponent from '../components';

const mapStateToProps = state => ({
  nowplaying: state.nowplaying,
  popular: state.popular,
  toprated: state.toprated,
  upcoming: state.upcoming,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedComponent);
