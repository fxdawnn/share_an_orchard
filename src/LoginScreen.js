import React, {useState} from 'react';
import {
  Picker,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
} from 'react-native';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

export default function LoginScreen() {
  const [loginVisible, setLoginVisible] = useState(true);
  const Form = LoginForm ? loginVisible : RegisterForm;

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          onPress={() => {
            setLoginVisible(true);
          }}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setLoginVisible(false);
          }}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    backgroundColor: 'white',
  },
});
