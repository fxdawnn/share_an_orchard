import React, {useState} from 'react';
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
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Slider from '@react-native-community/slider';
import {styles} from '../../styles';

export default function AccountSetupGMOScreen({navigation}) {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>Grey Water Info Settings</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.smallText}>
          What is the percentage of GMO seeds you used in gardening?
        </Text>
        <Controller
          name="Sharing area"
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
          rules={{
            required: {value: true, message: 'Sharing distance is required'},
          }}
          control={control}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('BioSetup')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
