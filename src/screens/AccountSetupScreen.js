import React, {useState} from 'react';
import {
  Picker,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Slider from '@react-native-community/slider';
import {styles} from '../styles';

export default function AccountSetupScreen() {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>Account Settings</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.smallText}>How much experience you got?</Text>
        <Controller
          name="Experience"
          defaultValue=""
          render={({onChange, value, errors}) => (
            <Slider
              style={{width: Dimensions.get('window').width * 0.8, height: 40}}
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
        <Text style={styles.smallText}>How much land you got?</Text>
        <Controller
          name="Land Area Available to Grow"
          defaultValue=""
          render={({onChange, value, errors}) => (
            <Slider
              style={{width: Dimensions.get('window').width * 0.8, height: 40}}
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
      </View>
      <View style={{marginTop: 20}}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
