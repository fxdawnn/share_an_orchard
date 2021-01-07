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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TreeMap from '../TreeMap';
import Testing from '../Testing';
import Home from '../Home';
import MapView from 'react-native-maps';
import Map from '../Map';
import styled from 'styled-components';
import logo from './img/nature_tree.png';
import HomeScreen from './homeScreen';
import MapScreen from './mapScreen';
import Header from './header';

function ProfileScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#43AA8B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

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
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{title: 'Tree Map'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
