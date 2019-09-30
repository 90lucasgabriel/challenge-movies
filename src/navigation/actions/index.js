import {NavigationActions} from 'react-navigation';
import * as screenNames from '../screen_names';
import RNExitApp from 'react-native-exit-app';

export const navigateBack = () => NavigationActions.back();

export const navigateToFeed = () =>
  NavigationActions.navigate({
    routeName: screenNames.FEED,
  });

export const navigateToUserProfile = () =>
  NavigationActions.navigate({
    routeName: screenNames.USER_PROFILE,
  });

export const exitApp = () => {
  RNExitApp.exitApp();
};
