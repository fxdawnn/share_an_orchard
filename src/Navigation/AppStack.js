import {NavigationContainer} from '@react-navigation/native';
import FriendListScreen from '../screens/UsersFunctions/FriendListScreen';
import GrowerListScreen from '../GrowerListScreen';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {AuthContext} from './AuthNavigator';
import {useContext} from 'react';
import UserProfileSetupStack from './UserSetUpProfileStack';
import auth from '@react-native-firebase/auth';
import ProfileSwitch from './ProfileSwitch';
import ChatStack from './ChatStack';
import MaterialCommunityIcons from 'react-native-paper/src/components/MaterialCommunityIcon';

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
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfileSetupStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Friends"
          component={ChatStack}
          options={{
            tabBarLabel: 'Growers',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="nature-people"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Fruits"
          component={GrowerListScreen}
          options={{
            tabBarLabel: 'My Crops',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="apple" color={color} size={size} />
            ),
          }}
        />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
