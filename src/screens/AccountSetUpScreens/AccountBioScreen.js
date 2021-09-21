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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../../styles';
import {ProfileContext} from '../../Navigation/ProfileSwitch';
import {AuthContext} from '../../Navigation/AuthNavigator';
import {login, findUser} from '../../Store';

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
      sharing: 0,
      distance: 0,
      experience: route.params.experience,
      graywater: 0,
      bio: Info,
      firebase_token: user.uid,
      id: user.user.id,
    };
    login(NewProfile, navigation);
  }
  async function findProfile() {
    let Profile = {
      firebase_token: user.uid,
    };
    findUser(Profile, navigation);
  }

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <View style={styles.bg}>
      <Text style={styles.mainButtonText}>Profile Bio</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        style={{padding: 10}}>
        <TextInput
          placeholder="Type here about yourself and get to know other growers!"
          placeholderTextColor="#666"
          style={{
            width: 305,
            height: 120,
            borderColor: '#00BFFF',
            borderWidth: 1,
            fontSize: 16,
          }}
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
          multiline={true}
          numberOfLines={7}
        />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
        style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={submitProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Finish </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
