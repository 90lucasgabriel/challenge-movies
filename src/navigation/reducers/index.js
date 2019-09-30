import ApplicationNavigator from '../navigators';
import {USER_PROFILE} from '../screen_names';

let initialState = {
  index: 0,
  routes: [
    {
      key: 'userProfile',
      routeName: USER_PROFILE,
    },
  ],
};

const navigationData = (state, action) => {
  const nextState = ApplicationNavigator.router.getStateForAction(
    action,
    state,
  );

  return nextState || state;
};

export default navigationData;
