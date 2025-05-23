import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import socketIOClient from 'socket.io-client';
import banana from './img/banana_small.png';
import testing_icon from './img/120.png';
import socket from './Store/socket';
import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';

export default class TreeList extends Component {
  constructor(props) {
    super(props);
    this.socket = socket;
    this.getNeighborCrops();
    this.state = {
      markers: [
        {
          title: 'apple',
          description: "This is Ann's apple",
          coordinates: {
            latitude: 33.99632,
            longitude: -118.48138,
          },
        },
      ],
      fruitsResponse: [],
      nearbyFruits: [],
      location: null,
      distance: null,
    };
    this.socket.on('plants nearby', (msg) => {
      var plants = JSON.parse(msg);
      this.state.nearbyFruits = plants.crops;
      var PlantsReturn = [];
      this.state.nearbyFruits.map((crop) => {
        // console.log('plant:' + crop.common_name);
        crop.coordinates = {
          latitude: crop.latitude,
          longitude: crop.longitude,
        };
        crop.title = crop.common_name;
        const foodDistance = getDistance(this.state.location.coords, {
          latitude: crop.latitude,
          longitude: crop.longitude,
        });
        PlantsReturn.push({
          title: crop.title,
          description: crop.description,
          coordinates: {
            latitude: crop.latitude,
            longitude: crop.longitude,
          },
          id: crop.id,
          time: crop.createdAt,
          option: crop.option,
          privacy: crop.privacy,
          image: crop.image,
          foodDistance: parseFloat(foodDistance * 0.000621371).toPrecision(3),
        });
        console.log(
          'plant coordination:' +
            JSON.stringify(crop.coordinates) +
            'crop title: ' +
            crop.common_name,
        );
      });
      this.setState({
        markers: PlantsReturn,
      });
    });
  }
  getLocationUser = async () => {
    Geolocation.requestAuthorization('whenInUse');
    await Geolocation.getCurrentPosition(
      (position) => {
        const location = position;
        this.setState({location});
        const distance = getDistance(position.coords, {
          latitude: 51.525,
          longitude: 7.4575,
        });
        this.setState({distance});
      },
      (error) => {
        console.log(error);
        Alert.alert(error.message);
      },
    );
  };
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5,
        };
        this.setState({
          location: position,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }
  componentDidMount() {
    this.socket.on('FruitsFromAPI', (data) => {
      this.fruitsResponse = data;
      //console.log("fruit from api" +  JSON.stringify(data))
    });
    this.getLocationUser();
    console.log('NewCrop socket' + this.state.CropCommonName);
  }

  getNeighborCrops() {
    this.socket.emit('get neighbor crops', 'testing');
  }
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);

        this.setState({location});
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  renderItemComponent = (
    itemData, // 1
  ) => (
    <TouchableOpacity>
      {' '}
      // 2
      {/*<Image style={styles.image} source={{uri: itemData.item.url}} /> // 3*/}
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          //provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 33.99632,
            longitude: -118.48138,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          //annotations={markers}
        >
          {this.state.markers.map((marker) => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              description={marker.description}
              title={marker.title}
              image={banana}
              icon={{uri: testing_icon}}>
              <MapView.Callout tooltip>
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate('TreeInfo', {marker})
                  }
                  underlayColor="#dddddd">
                  <View style={styles.CommentContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('TreeInfo', {marker})
                      }>
                      <Image
                        style={styles.image}
                        source={{
                          uri: 'data:image/jpeg;base64,' + marker.image,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('TreeInfo', {marker})
                      }>
                      <Text style={styles.name}>
                        {marker.title}
                      </Text>
                    </TouchableOpacity>
                    <Text rkType="primary3">{marker.description}{'\n'} {marker.foodDistance} miles</Text>
                  </View>
                </TouchableHighlight>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const imageWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mapContainer: {
    height: imageWidth,
    backgroundColor: '#43AA8B',
  },
  ListContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    height: imageWidth,
  },
  button: {
    width: 100,
    paddingHorizontal: 0,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 3,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },
  CommentContainer: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    backgroundColor: '#fffff0',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
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
