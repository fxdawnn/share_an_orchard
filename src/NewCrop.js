'use strict';

import React, {Component, useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import socketIOClient from 'socket.io-client';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import RNPickerSelect from 'react-native-picker-select';

const {width, height} = Dimensions.get('window');

const LATITUDE = 33.99632;
const LONGITUDE = -118.48138;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

const ENDPOINT = 'http://10.101.9.144:3000';

export default class NewCrop extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      CropCommonName: '',
      CropCommonNames: [],
      a: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },
      CropPrivacy: '', // Private, Public or
      CropOption: '', // Exchange or fREE
      CropAvailability: '',
      CropEmail: '',
    };
  }
  componentDidMount() {
    this.socket = socketIOClient(ENDPOINT);
    this.socket.on('plants nearby', (msg) => {
      let plants = JSON.parse(msg);
      console.log('plants nearby' + plants);
    });
    // console.log('NewCrop socket' + this.state.CropCommonName);
  }

  submitCropCommonName() {
    let NewCrop = {
      common_name: this.state.CropCommonName,
      coordinates: [this.state.a.longitude, this.state.a.latitude],
      privacy: this.state.CropPrivacy,
      option: this.state.CropOption,
      availability: this.state.CropAvailability,
    };
    console.log(
      'coordination:' + this.state.a.longitude + ' ' + this.state.a.latitude,
    );
    this.socket.emit('plant info', JSON.stringify(NewCrop));
    this.setState({CropCommonName: ''});
    console.log('NewCrop submit location' + JSON.stringify(NewCrop));
  }

  onMarkerDragEnd = (coord) => {
    let newcoord = {
      latitude: coord.latitude,
      longitude: coord.longitude,
    };
    this.setState({a: newcoord});
    return newcoord;
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.mapContainer}>
              <MapView
                provider={this.props.provider}
                style={styles.map}
                initialRegion={{
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}>
                <Marker
                  coordinate={this.state.a}
                  onSelect={(e) => log('onSelect', e)}
                  onDrag={(e) => log('onDrag', e)}
                  onDragStart={(e) => log('onDragStart', e)}
                  onDragEnd={(e) => {
                    console.log(
                      'dragEnd!',
                      this.onMarkerDragEnd(e.nativeEvent.coordinate),
                    );
                  }}
                  onPress={(e) => log('onPress', e)}
                  draggable
                />
              </MapView>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    Crop Sharing Object Options
                  </Text>
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <RNPickerSelect
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 20,
                      right: 10,
                    },
                    placeholder: {
                      color: 'purple',
                      fontSize: 12,
                      fontWeight: 'bold',
                    },
                  }}
                  onValueChange={(value) => {
                    this.state.CropPrivacy = value;
                    console.log(this.state.CropPrivacy);
                  }}
                  placeholder={{
                    label: 'Select a Sharing Objects...',
                    value: null,
                  }}
                  items={[
                    {label: 'Public', value: 'Public'},
                    {label: 'Friends', value: 'Friends'},
                    {label: 'Private', value: 'Private'},
                  ]}
                  Icon={() => {
                    return (
                      <View
                        style={{
                          backgroundColor: 'transparent',
                          borderTopWidth: 10,
                          borderTopColor: 'gray',
                          borderRightWidth: 10,
                          borderRightColor: 'transparent',
                          borderLeftWidth: 10,
                          borderLeftColor: 'transparent',
                          width: 0,
                          height: 0,
                        }}
                      />
                    );
                  }}
                />
              </View>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    Crop Sharing Method Options
                  </Text>
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <RNPickerSelect
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 20,
                      right: 10,
                    },
                    placeholder: {
                      color: 'purple',
                      fontSize: 12,
                      fontWeight: 'bold',
                    },
                  }}
                  onValueChange={(value) => {
                    this.state.CropOption = value;
                    console.log(this.state.CropOption);
                  }}
                  placeholder={{
                    label: 'Select a Sharing Method...',
                    value: null,
                  }}
                  items={[
                    {label: 'Exchange', value: 'Exchange'},
                    {label: 'Free', value: 'Free'},
                  ]}
                  Icon={() => {
                    return (
                      <View
                        style={{
                          backgroundColor: 'transparent',
                          borderTopWidth: 10,
                          borderTopColor: 'gray',
                          borderRightWidth: 10,
                          borderRightColor: 'transparent',
                          borderLeftWidth: 10,
                          borderLeftColor: 'transparent',
                          width: 0,
                          height: 0,
                        }}
                      />
                    );
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionDescription}>
                    <Text style={styles.highlight}>Crop Common Name</Text>
                  </Text>
                </View>
              </View>
              <TextInput
                style={{height: 40, borderWidth: 1}}
                autoCorrect={false}
                value={this.state.CropCommonName}
                //onSubmitEditing={() => this.submitCropCommonName()}
                onChangeText={(CropCommonName) => {
                  this.setState({CropCommonName});
                }}
              />
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionDescription}>
                    <Text style={styles.highlight}>Availability</Text>
                  </Text>
                </View>
              </View>
              <TextInput
                style={{height: 40, borderWidth: 1}}
                autoCorrect={false}
                value={this.state.CropAvailability}
                //onSubmitEditing={() => this.submitCropCommonName()}
                onChangeText={(CropAvailability) => {
                  this.setState({CropAvailability});
                }}
              />
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => this.submitCropCommonName()}
                underlayColor="#fff">
                <Text style={styles.secondaryButtonText}> Add Crop </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const imageWidth = Dimensions.get('window').width;
NewCrop.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  container_chat: {
    height: 400,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    height: imageWidth,
    backgroundColor: '#43AA8B',
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
  map: {
    flex: 1,
    height: imageWidth,
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
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
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
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
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
});
