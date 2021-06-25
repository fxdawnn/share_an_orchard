import {NavigationContainer} from '@react-navigation/native';
import AccountSetupScreen from '../screens/AccountSetupScreen';
import FriendListScreen from '../FriendListScreen';
import GrowerListScreen from '../GrowerListScreen';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {AuthContext} from './AuthNavigator';
import {useContext} from 'react';
import UserProfileSetupStack from './UserSetUpProfileStack';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  const user = useContext(AuthContext);

  async function logOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={UserProfileSetupStack} />
        <Tab.Screen name="Friends" component={FriendListScreen} />
        <Tab.Screen name="Log Out" component={logOut} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
