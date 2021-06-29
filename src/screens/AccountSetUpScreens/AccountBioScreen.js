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
import {styles} from '../../styles';

export default function AccountBioScreen({navigation}) {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>
        Bio(Tell us why you're using our app!)
      </Text>
      <View style={{padding: 10}}>
        <TextInput
          style={{
            height: 100,
            borderColor: '#7a42f4',
            borderWidth: 1,
          }}
          placeholder="Type here about yourself and why you use our app!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('CropArea')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Finish </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
