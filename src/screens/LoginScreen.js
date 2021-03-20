import React, {useState} from 'react';
import {
  Picker,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import {styles} from '../styles';

export default function LoginScreen({navigation}) {
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
          onValueChange={(sliderValue) =>
            setLoginVisible(!Boolean(sliderValue))
          }
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

/*
          <TouchableHighlight
          style={styles.button}
          onPress={() => {
            setLoginVisible(true);
          }}>
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            setLoginVisible(false);
          }}>
          <Text style={styles.text}>Register</Text>
        </TouchableHighlight>
      </View>
      <View style={{paddingTop: 40}}>
        <Form navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {textAlign: 'center'},

  button: {
    backgroundColor: '#B2B09B',
    height: 51.83,
    width: 100,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#254441',
  },
  input: {
    margin: 12,
    backgroundColor: 'white',
  },
});
        </TouchableHighlight>*/
