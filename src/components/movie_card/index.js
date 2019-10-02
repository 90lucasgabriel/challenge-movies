import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

// const movieCard = () => {
//   return <View style={styles.wrapper} />;
// };

// export default movieCard;

// class MovieCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Title: '',
//       Released: '',
//       Year: '',
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       Title: this.props.title,
//       Released: this.props.released,
//       Year: this.props.year,
//     });
//   }

//   componentWillRecieveProps(nextProps,nextState){
//     this.setState({
//       Title:nextProps['title'],
//       Released:nextProps['released'],
//       Year: nextProps['year']
//      });

//     }
//     shouldComponentUpdate(nextProps,nextState){
//        // your condition if you want to re-render every time on props change
//      return true;
//     }
//     render() {
//         return (
//             <NavBar
//             title=this.state.NavTitle
//             tintColor=this.state.NavColor
//             leftButton={<Button style={styles.menuButton}>&#xf0c9;</Button>}
//             rightButton={<Button style={styles.menuButton}>&#xf07a;</Button>} />
//         );
//     }
// }

export default class MovieCard extends React.Component {
  render() {
    return <h1>{this.props.movie.title}</h1>;
  }
}
