import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import logo from '../img/nature_tree.png';
import AccountSetupScreen from '../screens/AccountSetUpScreens/AccountSetupScreen';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './AuthNavigator';
import {useContext} from 'react';
import auth from '@react-native-firebase/auth';
import AccountSetupExScreen from '../screens/AccountSetUpScreens/AccountSetupExScreen';
import AccountSetupGreyWaterScreen from '../screens/AccountSetUpScreens/AccountGreyWaterScreen';
import AccountSetupGMOScreen from '../screens/AccountSetUpScreens/AccountGMOScreen';
import AccountBioScreen from '../screens/AccountSetUpScreens/AccountBioScreen';

const Stack = createStackNavigator();

export default function UserProfileSetupStack() {
  const user = useContext(AuthContext);
  async function logOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

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
          <TouchableOpacity style={styles.button} onPress={logOut}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Setup" component={AccountSetupScreen} />
      <Stack.Screen name="SharingSetup" component={AccountSetupExScreen} />
      <Stack.Screen
        name="GreyWaterSetup"
        component={AccountSetupGreyWaterScreen}
      />
      <Stack.Screen name="GMOSetup" component={AccountSetupGMOScreen} />
      <Stack.Screen name="BioSetup" component={AccountBioScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe2ff',
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500',
    color: '#7f78d2',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#481380',
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 24,
    marginRight: 5,
  },
});
