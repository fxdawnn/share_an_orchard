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
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {
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
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={{width: 28, height: 28, margin: 12}} source={logo} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CropArea" component={CropAreaScreen} />
      <Stack.Screen name="CropYield" component={CropYieldScreen} />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{title: 'Tree Map'}}
      />
      <Stack.Screen name="AddTree" component={AddTreeScreen} />
      <Stack.Screen name="TreeInfo" component={TreeInfoScreen} />
      <Stack.Screen
        name="TreeList"
        component={TreeListScreen}
        options={{title: 'Crops and Growers'}}
      />
      <Stack.Screen
        name="GrowerList"
        component={GrowerListScreen}
        options={{title: 'Growers List'}}
      />
      <Stack.Screen name="Friends" component={FriendListScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
      <Stack.Screen name="AddCropPhoto" component={AddCropPhotoScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
}
