import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Profile from '../screens/UserProfileScreen';
import {NavigationContainer} from '@react-navigation/native';

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
