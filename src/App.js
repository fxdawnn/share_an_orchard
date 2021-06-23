import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Alert,
  Fragment,
  TextInput,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TreeMap from './TreeMap';
import NewCrop from './NewCrop';
import Home from '../Home';
import MapView from 'react-native-maps';
import Map from './Map';
import styled from 'styled-components';
import logo from './img/nature_tree.png';
import HomeScreen from './screens/homeScreen';
import MapScreen from './screens/mapScreen';
import ShareAreaSelection from './ShareAreaSelection';
import Header from './header';
import TreeInfoScreen from './TreeInfoScreen';
import TreeListScreen from './TreeListScreen';
import AddTreeScreen from './screens/AddTreeScreen';
import CropYieldScreen from './screens/CropYieldScreen';
import CropAreaScreen from './screens/CropAreaScreen';
import LoginScreen from './screens/LoginScreen';
import AccountSetupScreen from './screens/AccountSetupScreen';
import AddCropPhotoScreen from './screens/AddCropPhotoScreen';
import GrowerListScreen from './GrowerListScreen';
import FriendListScreen from './FriendListScreen';
import CommentsScreen from './CommentsScreen';
import AuthNavigator from './Navigation/AuthNavigator';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

function NotificationsScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#254441',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
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
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="Register" component={AccountSetupScreen} />
      <Stack.Screen name="Home without Sign in" component={MyStack} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="Profile" component={AccountSetupScreen} />
        <Tab.Screen name="Friends" component={FriendListScreen} />
        <Tab.Screen name="Fruits" component={GrowerListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <AuthNavigator />;
}
