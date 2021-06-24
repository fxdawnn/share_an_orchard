import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Profile from '../screens/UserProfile';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(SwitchNavigator);
