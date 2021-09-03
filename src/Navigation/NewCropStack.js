import {createStackNavigator} from '@react-navigation/stack';
import NewCropLocationScreen from '../screens/NewCropScreens/NewCropLocationScreen';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ProfileContext} from './ProfileSwitch';

import * as React from 'react';
const Stack = createStackNavigator();

export default function NewCropStack() {
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
        /*headerRight: () => (
          <TouchableOpacity style={styles.button} onPress={logOut}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
        ),*/
      })}>
      <Stack.Screen name="NewCrop" component={NewCropLocationScreen} />
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
