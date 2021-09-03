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
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../../styles';
import {ProfileContext} from '../../Navigation/ProfileSwitch';

export default function AddCropBioScreen({navigation, route}) {
  const [Info, setInfo] = useState('');

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <View style={styles.bg}>
      <Text style={styles.mainButtonText}>
        Crop Bio(Tell us about the crop!)
      </Text>
      <View>
        <TextInput
          style={{
            width: 305,
            height: 120,
            borderColor: '#00BFFF',
            borderWidth: 1,
            fontSize: 16,
          }}
          placeholder="Tell us about the food! (e.g. This is a great banana and text me before picking up.)"
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
          multiline={true}
          numberOfLines={7}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate('CropLocation', {
              CropCommonName: route.params.CropCommonName,
              CropPrivacy: route.params.CropPrivacy,
              CropSharing: route.params.CropSharing,
              CropAvailability: route.params.CropAvailability,
              CropBio: Info,
            })
          }
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
