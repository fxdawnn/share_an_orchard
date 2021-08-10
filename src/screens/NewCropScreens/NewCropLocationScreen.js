import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NewCrop from '../../NewCrop';
import NewCropLocation from './NewCropLocation';

export default function NewCropLocationScreen({navigation, route}) {
  return (
    <ScrollView>
      <NewCropLocation
        CropCommonName={route.params.CropCommonName}
        CropPrivacy={route.params.CropPrivacy}
        CropSharing={route.params.CropSharing}
        CropAvailability={route.params.CropAvailability}
      />
      <View style={styles.bg}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Home')}
          underlayColor="#fff">
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacebg}></View>
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
