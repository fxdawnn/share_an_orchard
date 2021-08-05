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
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Home')}
        underlayColor="#fff">
        <Text style={styles.secondaryButtonText}> Back </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});
