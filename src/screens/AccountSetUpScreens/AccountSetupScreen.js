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
  const experience = [
    'New Green Thumb!',
    'Veggie Grower',
    'Fruit Planter',
    'Fruit Whisperer',
  ];
  const availability = ['None', 'Balcony', 'Sidewalk', 'Yard'];
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>Account Settings</Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.smallText}>
          How much experience you do you have for gardening?
        </Text>
        <Text style={styles.mainButtonText}>
          {experience[accountExperience]}
        </Text>
        <Controller
          name="Experience"
          defaultValue=""
          render={({onChange, value, errors}) => (
            <Slider
              style={{width: Dimensions.get('window').width * 0.8, height: 40}}
              minimumValue={0}
              maximumValue={3}
              minimumTrackTintColor="#FFFFF0"
              maximumTrackTintColor="#FFFFF0"
              onValueChange={(sliderValue) => setAccountExperience(sliderValue)}
              value={0}
              step={1}
            />
          )}
          rules={{required: {value: true, message: 'Area is required'}}}
          control={control}
        />
        <Text style={styles.smallText}>
          How much space do you have for growing food?
        </Text>
        <Text style={styles.mainButtonText}>
          {availability[accountArea]}
        </Text>
        <Controller
          name="Land Area Available to Grow"
          defaultValue=""
          render={({onChange, value, errors}) => (
            <Slider
              style={{width: Dimensions.get('window').width * 0.8, height: 40}}
              minimumValue={0}
              maximumValue={3}
              minimumTrackTintColor="#254441"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={(sliderValue) => setAccountArea(sliderValue)}
              value={0}
              step={1}
            />
          )}
          rules={{required: {value: true, message: 'Area is required'}}}
          control={control}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate('BioSetup', {
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
