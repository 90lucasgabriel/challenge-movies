import React from 'react';
import * as screenNames from '../screen_names';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Feed} from '../../features/feed/containers';
import {UserProfile} from '../../features/user_profile/containers';

const RootNavigator = createBottomTabNavigator({
  [screenNames.FEED]: Feed,
  [screenNames.USER_PROFILE]: UserProfile,
});

export default createAppContainer(RootNavigator);
