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
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Slider from '@react-native-community/slider';
import {styles} from '../../styles';

export default function AccountSetupScreen({navigation, route}) {
  const {control, handleSubmit, errors} = useForm();
  const [accountArea, setAccountArea] = useState(0);
  const [accountExperience, setAccountExperience] = useState(0);
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
              onValueChange={(sliderValue) => setAccountExperience(sliderValue)}
              value={1}
              step={1}
            />
          )}
          rules={{required: {value: true, message: 'Area is required'}}}
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
              onValueChange={(sliderValue) => setAccountArea(sliderValue)}
              value={1}
              step={1}
            />
          )}
          rules={{required: {value: true, message: 'Area is required'}}}
          control={control}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() =>
            navigation.navigate('SharingSetup', {
              name: route.params.name,
              area: accountArea,
              experience: accountExperience,
            })
          }
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
