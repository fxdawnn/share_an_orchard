/**import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
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
//import Home from '../Home';
import MapView from 'react-native-maps';
import Map from '../Map';
import styled from 'styled-components';
import logo from './nature_tree.png';

function HomeScreen({navigation}) {
  return (
      <View
          style={{
              backgroundColor: '#43AA8B',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
          }}>
    <Body>
      <Logo source={logo} />
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate('Profile')}
        underlayColor="#fff">
        <Text style={styles.loginText}>Share an Orchard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate('Profile')}
        underlayColor="#fff">
        <Text style={styles.loginText}> Add a Tree </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate('Profile')}
        underlayColor="#fff">
        <Text style={styles.loginText}> Trade Crops </Text>
      </TouchableOpacity>
    </Body>
  );
}

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
        backgroundColor: '#43AA8B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View>
      <Map />
      <View>
        <Text style={styles.description}>Search for local crops!</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search via Address or postcode"
        />
        <Button onPress={() => {}} color="#48BBEC" title="Go" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const Stack = createStackNavigator();

const Home = () => (
  <Body>
    <Logo source={logo} />
  </Body>
);
const Logo = styled.Image`
  height: 217px;
  width: 217px;
  left: 79px;
  top: 49px;
`;

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
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
*/
