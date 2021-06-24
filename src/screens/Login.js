import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

class Login extends React.Component {
  // firebase login function later
  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {
    const {email, password} = this.state;

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Profile'))
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}
/*async function signIn() {
    try {
      await auth().signInAnonymously();
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          console.log('Enable anonymous in your firebase console.');
          break;
        default:
          console.error(e);
          break;
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Login Anonymously 🔥</Text>
      </TouchableOpacity>
    </View>
  );*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe2ff',
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500',
    color: '#7f78d2',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#481380',
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 24,
    marginRight: 5,
  },
});

export default Login;
