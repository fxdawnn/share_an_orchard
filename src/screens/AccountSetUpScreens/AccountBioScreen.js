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
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://34.121.9.120:3000';
const socket = socketIOClient(ENDPOINT);
import {AuthContext} from '../../Navigation/AuthNavigator';
import {login} from '../../Store';

export default function AccountBioScreen({navigation, route}) {
  const [Info, setInfo] = useState('');
  const [profile, setProfile] = useContext(ProfileContext);
  const user = useContext(AuthContext);
  async function InputBio() {
    try {
      ProfileContext.Bio = Info;
    } catch (e) {
      console.error(e);
    }
  }

  async function submitProfile() {
    let NewProfile = {
      area: route.params.area,
      name: route.params.name,
      sharing: route.params.sharing,
      distance: route.params.distance,
      experience: route.params.experience,
      graywater: route.params.grayWater,
      bio: Info,
      firebase_token: user.uid,
    };
    /*socket.emit('new profile', JSON.stringify(NewProfile));*/
    login(NewProfile, navigation);
  }

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
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={submitProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Finish </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
