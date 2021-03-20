// Note: at first tried https://github.com/bietkul/react-native-form-builder
// but packages native-base and react-native-form-builder threw "InvariantViolation" error

// I then tried to use Controller with react-select but it didn't work with react native
// I then tried to use Controller with Picker
import React from 'react';
import {
  Picker,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Slider from '@react-native-community/slider';
import {styles} from '../styles';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function LoginForm({navigation}) {
  const {control, handleSubmit, errors} = useForm();
  //const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate('AccountSetup');
  };

  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder={'Username'}
          />
        )}
        name="username"
        rules={{required: true}}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder={'Password'}
          />
        )}
        name="password"
        rules={{required: true}}
        defaultValue=""
      />
        <View style={{marginTop: 20}}>
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
    </View>
  );
}
