import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {sendMessage} from '../../Store';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../../styles';
import socket from '../../Store/socket';
import {AuthContext} from '../../Navigation/AuthNavigator';

export default function MessaggeInitScreen({navigation, route}) {
  const [Info, setInfo] = useState('');

  const user = useContext(AuthContext);

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <ScrollView style={styles.bg}>
      <StatusBar barStyle="light-content" />
      <View style={{padding: 10}}>
        <TextInput
          style={{
            width: 305,
            height: 120,
            borderColor: '#00BFFF',
            borderWidth: 1,
            fontSize: 16,
          }}
          placeholder="Type here send initial message!"
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
          multiline={true}
          numberOfLines={7}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
        style={{marginTop: 20}}>
        View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={sendMessage(Info, user.user, route.params.receivingUser)}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Send Message </Text>
          {/*<Text style={styles.mainButtonText}> {JSON.stringify(Info)} </Text>
          <Text style={styles.mainButtonText}>
            {' '}
            {JSON.stringify(user.user)}{' '}
          </Text>
          <Text style={styles.mainButtonText}>
            {' '}
            {JSON.stringify(route.params.receivingUser)}{' '}
          </Text>*/}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
