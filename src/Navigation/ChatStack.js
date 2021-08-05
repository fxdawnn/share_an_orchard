import {Image, TouchableOpacity} from 'react-native';
import logo from '../img/nature_tree.png';
import HomeScreen from '../screens/homeScreen';
import CropAreaScreen from '../screens/CropAreaScreen';
import CropYieldScreen from '../screens/CropYieldScreen';
import MapScreen from '../screens/mapScreen';
import AddTreeScreen from '../screens/AddTreeScreen';
import TreeInfoScreen from '../TreeInfoScreen';
import TreeListScreen from '../TreeListScreen';
import GrowerListScreen from '../GrowerListScreen';
import FriendListScreen from '../FriendListScreen';
import LoginScreen from '../screens/LoginScreen';
import AccountSetupScreen from '../screens/AccountSetUpScreens/AccountSetupScreen';
import AddCropPhotoScreen from '../screens/AddCropPhotoScreen';
import CommentsScreen from '../CommentsScreen';
import ChatScreen from '../screens/ChatScreen';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
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
          <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
            <Image style={{width: 28, height: 28, margin: 12}} source={logo} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Friends" component={FriendListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
