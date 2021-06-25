import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View} from 'react-native';

import AuthNavigator from './Navigation/AuthNavigator';

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

export default function App() {
  return <AuthNavigator />;
}
