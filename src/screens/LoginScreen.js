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
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

export default function LoginScreen({navigation}) {
  const [loginVisible, setLoginVisible] = useState(true);
  const Form = loginVisible ? LoginForm : RegisterForm;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
          paddingBottom: 12,
        }}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            setLoginVisible(true);
          }}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            setLoginVisible(false);
          }}>
          <Text style={styles.text}>Register</Text>
        </TouchableHighlight>
      </View>
      <View style={{paddingTop: 40}}>
        <Form navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {textAlign: 'center'},

  button: {
    backgroundColor: '#B2B09B',
    height: 51.83,
    width: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#254441',
  },
  input: {
    margin: 12,
    backgroundColor: 'white',
  },
});
