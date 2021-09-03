import {Image, TouchableOpacity} from 'react-native';
import logo from '../img/nature_tree.png';
import FriendListScreen from '../screens/UsersFunctions/FriendListScreen';
import Chat from '../screens/UsersFunctions/NewChat';
import Users from '../screens/UsersFunctions/GrowersScreen';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from '../Store';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfileScreen from '../screens/UserProfileScreen';
const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    /*<Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#254441',
        },
        headerTintColor: '#43AA8B',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
            <Image style={{width: 28, height: 28, margin: 12}} source={logo} />
          </TouchableOpacity>
        ),
      })}>
       />
    </Stack.Navigator>*/
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#254441',
          },
          headerTintColor: '#43AA8B',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Users')}>
              <Image
                style={{width: 28, height: 28, margin: 12}}
                source={logo}
              />
            </TouchableOpacity>
          ),
        })}>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Friends" component={FriendListScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Grower Profile" component={UserProfileScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
