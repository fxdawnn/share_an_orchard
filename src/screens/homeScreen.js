import * as React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import banana from '../img/banana.png';

function HomeScreen({navigation}) {
  return (
    <View style={styles.bg}>
      <Image style={styles.logo} source={banana} />
      <View style={styles}>
        <Text style={styles.titleText}> Neighbor Fruit </Text>
      </View>
      <View style={styles.space} />
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('TreeList')}
        underlayColor="#fff">
        <Text style={styles.mainButtonText}>Get Tree Crops</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      {/* <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('FriendsList')}
        underlayColor="#fff">
        <Text style={styles.mainButtonText}> Ask Nearby Mentor for Help </Text>
      </TouchableOpacity>
      <View style={styles.space} />*/}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('CropYield')}
        underlayColor="#fff">
        <Text style={styles.mainButtonText}> Planting Choice Advice </Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('CropName')}
        underlayColor="#fff">
        <Text style={styles.mainButtonText}> Share Your Orchard </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    height: '80%',
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
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 305,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#00BFFF',
  },
  mainButton: {
    /* Share an orchard */

    position: 'relative',
    width: 305,
    height: 42,
    /*left: 32.62,
                    top: 630.17,*/
    backgroundColor: '#dd5252',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#254441',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  mainButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 40,
    textAlign: 'center',
    color: '#FFFFF0',
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
  titleText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 40,
    lineHeight: 45,
    textAlign: 'center',
    color: '#FFFFF0',
  },

  logo: {
    height: '16%',
    width: '24%',
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
