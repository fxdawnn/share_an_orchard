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
      sharing: route.params.sharing,
      distance: route.params.distance,
      experience: route.params.experience,
      graywater: route.params.grayWater,
      bio: Info,
      firebase_token: user.uid,
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
      <Text style={styles.titleText}>
        Bio(Tell us why you're using our app!)
      </Text>
      <View style={{padding: 10}}>
        <TextInput
          style={{
            width: 305,
            height: 120,
            borderColor: '#00BFFF',
            borderWidth: 1,
            fontSize: 16,
          }}
          placeholder="Type here about yourself and get to know other growers!"
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
          multiline={true}
          numberOfLines={7}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={submitProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Finish </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
