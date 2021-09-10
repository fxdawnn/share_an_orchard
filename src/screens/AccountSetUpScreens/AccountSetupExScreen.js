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

export default function AccountSetupExScreen({navigation, route}) {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [accountSharing, setAccountSharing] = useState(0);
  const [accountDistance, setAccountDistance] = useState(0);
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>Sharing Settings</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.smallText}>
          {' '}
          How do you score your sharing habits?{' '}
        </Text>
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
              onValueChange={(sliderValue) => setAccountSharing(sliderValue)}
              value={1}
              step={1}
            />
          )}
          rules={{
            required: {value: true, message: 'Sharing Habits is required'},
          }}
          control={control}
        />
        <Text style={styles.smallText}>
          {' '}
          How far would you like to share your food?{' '}
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
              onValueChange={(sliderValue) => setAccountDistance(sliderValue)}
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
          onPress={() =>
            navigation.navigate('BioSetup', {
              name: route.params.name,
              area: route.params.area,
              experience: route.params.experience,
              distance: accountDistance,
              sharing: accountSharing,
            })
          }
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
