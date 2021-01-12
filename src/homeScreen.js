import * as React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import logo from './img/nature_tree.png';

function HomeScreen({navigation}) {
  return (
    <View style={styles.bg}>
      <Image style={styles.logo} source={logo} />
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('Map')}
        underlayColor="#fff">
        <Text style={styles.mainButtonText}>Crop Swap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate('CropArea')}
        underlayColor="#fff">
        <Text style={styles.secondaryButtonText}> Share an Orchard </Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('CropArea')}
          underlayColor="#fff">
        <Text style={styles.secondaryButtonText}> Log In/Register </Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate('Profile')}
        underlayColor="#fff">
        <Text style={styles.loginText}> Trade Crops </Text>
      </TouchableOpacity>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainButton: {
    /* Share an orchard */

    position: 'relative',
    width: 315.77,
    height: 51.83,
    /*left: 32.62,
                    top: 630.17,*/
    backgroundColor: '#dd5252',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#254441',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  mainButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
  secondaryButton: {
    /* Share an orchard */

    position: 'relative',
    width: 315.77,
    height: 51.83,
    /*left: 32.62,
                    top: 630.17,*/
    backgroundColor: '#43aa8b',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#DD5252',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  secondaryButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },

  logo: {
    height: 217,
    width: 217,
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
