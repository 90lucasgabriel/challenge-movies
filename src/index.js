import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Layout from './components/layout';
import RootNavigator from './navigation/navigators/index';
import store from './store';
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <RootNavigator />
        </Layout>
      </Provider>
    );
  }
}
