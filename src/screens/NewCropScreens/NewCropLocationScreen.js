import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NewCropLocation from './NewCropLocation';
import {AuthContext} from '../../Navigation/AuthNavigator';

export default function NewCropLocationScreen({navigation, route}) {
  const user = useContext(AuthContext);
  return (
    <ScrollView>
      <NewCropLocation
        CropCommonName={route.params.CropCommonName}
        CropPrivacy={route.params.CropPrivacy}
        CropSharing={route.params.CropSharing}
        CropAvailability={route.params.CropAvailability}
        CropBio={route.params.CropBio}
        navigation={navigation}
        user={user}
      />
      <View style={styles.bg}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Home')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {/*<View>
        <Text>{JSON.stringify(user.id)}</Text>
      </View>*/}
      <View style={styles.spacebg} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  mainButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 40,
    textAlign: 'center',
    color: '#FFFFF0',
  },
  spacebg: {
    width: '100%', // or whatever size you need
    height: 200,
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    /* Share an orchard */
    position: 'relative',
    width: 80,
    height: 40,
    marginTop: 5,
    /*left: 32.62,
                        top: 630.17,*/
    backgroundColor: '#48BBEC',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center',
    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  secondaryButtonText: {
    fontFamily: 'Normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFF0',
  },
});
