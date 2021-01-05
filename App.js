import * as React from 'react';
import {
    StyleSheet,
    Button,
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
    Alert,
    Fragment, TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TreeMap from './TreeMap';
import Testing from './Testing';
import Home from './Home';
import MapView from 'react-native-maps';
import Map from './Map';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#43AA8B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
    </View>
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
        title="Go to Crop List"
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
        title="Go to Crops Map"
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
            <Text style={styles.description}>
                Search for local crops!
            </Text>
            <TextInput
                style={styles.searchInput}
                placeholder='Search via Address or postcode'/>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Profile')}
                underlayColor="#fff">
                <Text style={styles.loginText}> Add a Tree </Text>
            </TouchableOpacity>
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
