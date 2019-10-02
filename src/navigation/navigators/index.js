import * as screenNames from '../screen_names';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Feed} from '../../features/feed/containers';
import {UserProfile} from '../../features/user_profile/containers';

const RootNavigator = createBottomTabNavigator(
  {
    [screenNames.FEED]: Feed,
    [screenNames.USER_PROFILE]: UserProfile,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 12,
        marginBottom: 15,
      },
      style: {
        backgroundColor: '#0277bd',
      },
    },
  },
);

export default createAppContainer(RootNavigator);
