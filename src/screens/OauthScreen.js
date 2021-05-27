import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import {styles} from '../styles';

import OAuthManager from 'react-native-oauth';

const config = {
  facebook: {
    client_id: '153419559970664',
    client_secret: '814efc1d7f9f6fb453d92438a2f4c25f',
  },
  google: {
    callback_url: 'http://localhost/google',
    client_id:
      '579959546139-bjcbe0ojqc8tdjs6lr2la0t284jaa6mk.apps.googleusercontent.com',
  },
};
const manager = new OAuthManager('Testing_react_ios_project');

export default function OauthScreen({navigation}) {
  const [loginVisible, setLoginVisible] = useState(true);
  const Form = loginVisible ? LoginForm : RegisterForm;
  const ActiveText = (props) => {
    return <Text style={styles.loginScreenSwitchTextActive}>{props.text}</Text>;
  };
  const InactiveText = (props) => {
    return <Text style={styles.loginScreenSwitchText}>{props.text}</Text>;
  };
  const LoginText = loginVisible ? (
    <ActiveText text={'Login'} />
  ) : (
    <InactiveText text={'Login'} />
  );
  const RegisterText = !loginVisible ? (
    <ActiveText text={'Register'} />
  ) : (
    <InactiveText text={'Register'} />
  );

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
          paddingBottom: 12,
        }}>
        <View>
          <Text style={styles.loginScreenSwitchText}>Login</Text>
        </View>
        <Slider
          style={{width: 50, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#254441"
          maximumTrackTintColor="#FFFFFF"
          onValueChange={(sliderValue) => setLoginVisible(!sliderValue)}
          value={0}
          step={1}
        />
        <View>
          <Text style={styles.loginScreenSwitchText}>Register</Text>
        </View>
      </View>
      <View style={{paddingTop: 40}}>
        <Form navigation={navigation} />
      </View>
    </ScrollView>
  );
}
