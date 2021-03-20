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
import AccountSetupScreen from '../screens/AccountSetupScreen';
import Slider from '@react-native-community/slider';
import {styles} from '../styles';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function RegisterForm({navigation}) {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //navigation.navigate('AccountSetup');
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
            placeholder={'Email'}
          />
        )}
        name="email"
        rules={{required: true, pattern: EMAIL_REGEX}}
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
        <Text style={styles.smallText}>How much experience you got?</Text>
      </View>
      <Controller
        name="Experience"
        defaultValue=""
        render={({onChange, value, errors}) => (
          <Slider
            style={{
              width: Dimensions.get('window').width * 0.8,
              height: 40,
              marginLeft: 30,
            }}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="#254441"
            maximumTrackTintColor="#FFFFFF"
            onValueChange={(sliderValue) => onChange(sliderValue)}
            value={1}
            step={1}
          />
        )}
        rules={{required: {value: true, message: 'Experience is required'}}}
        control={control}
      />
      <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.smallText}>How much land you got?</Text>
      </View>
      <Controller
        name="Land Area Available to Grow"
        defaultValue=""
        render={({onChange, value, errors}) => (
          <Slider
            style={{
              width: Dimensions.get('window').width * 0.8,
              height: 40,
              marginLeft: 30,
            }}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="#254441"
            maximumTrackTintColor="#FFFFFF"
            onValueChange={(sliderValue) => onChange(sliderValue)}
            value={1}
            step={1}
          />
        )}
        rules={{required: {value: true, message: 'Area is required'}}}
        control={control}
      />
      <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </View>
      <View style={{marginTop: 20}}>
        <Button title="Register" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
