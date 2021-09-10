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
import {findUser} from '../../Store';
import logo from '../../img/nature_tree.png';
import {Icon} from 'react-native-elements';

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
      id: user.user.id,
    };
    findUser(Profile, navigation);
  }
  return (
    <View style={styles.bg}>
      <View style={styles.headerContainer}>
        <View style={styles.headerColumn}>
          <Image style={styles.userImage} source={{uri: logo}} />
          <Text style={styles.userNameText}>{user.user.name}</Text>
          <View style={styles.userAddressRow}>
            <View>
              <Icon
                name="place"
                underlayColor="transparent"
                iconStyle={styles.placeIcon}
                onPress={this.onPressPlace}
              />
            </View>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                {'Irvine'}, {'CA'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.bodyContent}>
          <Text style={styles.info}>
            {'Experienced Grower:' + user.user.experience} / {'Sustainable'}
          </Text>
          <Text style={styles.description}>{user.user.bio}</Text>
          {/*<TouchableOpacity style={styles.buttonContainer}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>*/}
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Name')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Edit Profile </Text>
        </TouchableOpacity>
      </View>
      {/*<View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={findProfile}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> View Profile </Text>
        </TouchableOpacity>
      </View>*/}
    </View>
  );
}
