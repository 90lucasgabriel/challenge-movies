// __tests__/UserProfileComponent-test.js
import React from 'react';
import UserProfileComponent from '../index';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<UserProfileComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
