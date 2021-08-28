import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles';
import {ProfileContext} from '../../Navigation/ProfileSwitch';
import {AuthContext} from '../../Navigation/AuthNavigator';
import {findUser} from '../../Store';

export default function ProfileControlScreen({navigation}) {
  const [Info, setInfo] = useState('');
  const user = useContext(AuthContext);
  const [profile, setProfile] = useContext(ProfileContext);
  async function InputBio() {
    try {
      ProfileContext.Bio = Info;
    } catch (e) {
      console.error(e);
    }
  }

  async function findProfile() {
    let Profile = {
      firebase_token: user.uid,
    };
    findUser(Profile, navigation);
  }
  return (
    <View style={styles.bg}>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Name')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Edit Profile </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={findProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> View Profile </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
