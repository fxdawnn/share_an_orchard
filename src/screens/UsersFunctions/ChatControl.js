import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../styles';
import {ProfileContext} from '../../Navigation/ProfileSwitch';
import {AuthContext} from '../../Navigation/AuthNavigator';
import {findUser, findChats} from '../../Store';
export default function ChatControlScreen({navigation}) {
  const user = useContext(AuthContext);

  async function findProfile() {
    let Profile = {
      firebase_token: user.uid,
      id: user.user.id,
    };
    findUser(Profile, navigation);
  }

  async function findAllChats() {
    let Profile = {
      firebase_token: user.uid,
      id: user.user.id,
    };
    findChats(Profile, navigation);
  }

  return (
    <View style={styles.bg}>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={findAllChats}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Active Chats </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={findProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Growers </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
