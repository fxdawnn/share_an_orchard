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
  Alert,
} from 'react-native';
import socketIOClient from 'socket.io-client';
import MapView, {
  Marker,
  ProviderPropType,
  AnimatedRegion,
  Animated,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const locationConfig = {
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
};

Geolocation.setRNConfiguration(locationConfig);

const {width, height} = Dimensions.get('window');
const LATITUDE = 33.99632;
const LONGITUDE = -118.48138;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

const ENDPOINT = 'http://34.121.9.120:3000';

export default class NewCropLocation extends Component {
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
      Testing: props.CropCommonName,
      initialRegion: {
        latitude: 33.99632,
        longitude: -118.48138,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * ASPECT_RATIO,
      },
      location: null,
    };
  }

  findCoordinates = () => {
    Geolocation.requestAuthorization();
    Geolocation.requestAuthorization('always').then((res) => {
      Alert.alert(res);
    });
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);

        this.setState({location});
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  getLocationUser = async () => {
    Geolocation.requestAuthorization('whenInUse');
    await Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        this.setState({location});
      },
      (error) => {
        console.log(error);
        Alert.alert(error.message);
      },
    );
  };

  /*async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5,
        };
        this.setState({
          initialRegion: region,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }*/
  /*goToInitialLocation() {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion.latitudeDelta = 0.005;
    initialRegion.longitudeDelta = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  }*/

  componentDidMount() {
    //this.getCurrentLocation();
    Geolocation.requestAuthorization();
    this.socket = socketIOClient(ENDPOINT);
    this.socket.on('plants nearby', (msg) => {
      let plants = JSON.parse(msg);
      console.log('plants nearby' + plants);
    });
  }

  submitCropCommonName() {
    let NewCrop = {
      common_name: this.props.CropCommonName,
      coordinates: [this.state.a.longitude, this.state.a.latitude],
      privacy: this.props.CropPrivacy,
      option: this.props.CropSharing,
      availability: this.props.CropAvailability,
      description: this.props.CropBio,
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
                  title={'New Crop Location'}
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
            <View style={styles.bg}>
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.highlight}>
                    Drag the pin to locate the crop
                  </Text>
                </View>
              </View>
              {/*<View style={styles.sectionContainer}>
                <TouchableOpacity onPress={this.getLocationUser}>
                  <Text style={styles.highlight}>Find My Coords?</Text>
                  <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>
              </View>*/}
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => {
                  this.submitCropCommonName();
                  this.props.navigation.navigate('AddCropInfo', {
                    item: {
                      item: {
                        title: this.props.CropCommonName,
                        description: this.props.CropBio,
                        coordinates: {
                          latitude: this.state.a.latitude,
                          longitude: this.state.a.longitude,
                        },
                        option: this.props.CropSharing,
                        privacy: this.props.CropPrivacy,
                      },
                    },
                  });
                }}
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
NewCropLocation.propTypes = {
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
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFF0',
  },
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  highlight: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    color: '#254441',
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
