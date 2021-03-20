import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';

export default class Map extends Component {
  constructor(props) {
    super(props);

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
        {
          title: 'pumpkin',
          description: "This is Pam's pumpkin",
          coordinates: {
            latitude: 33.996,
            longitude: -118.485,
          },
        },
      ],
      fruitsResponse: [],
      nearbyFruits: [],
    };
  }

  componentDidMount() {
    this.socket = socketIOClient(ENDPOINT);

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
        PlantsReturn.push({
          title: crop.title,
          description: 'new crops for testing add',
          coordinates: {
            latitude: crop.latitude,
            longitude: crop.longitude,
          },
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

    this.socket.on('FruitsFromAPI', (data) => {
      this.fruitsResponse = data;
      //console.log("fruit from api" +  JSON.stringify(data))
    });
    console.log('NewCrop socket' + this.state.CropCommonName);
  }

  getNeighborCrops() {
    this.socket.emit('get neighbor crops', 'testing');
  }

  render() {
    return (
      /*<View style={styles.mapContainer}>
        <FruitsGet />
      </View>*/
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
              coordinate={marker.coordinates}
              //description={marker.description}
              title={marker.common_name}
            />
          ))}
          {/*{this.state.fruitsResponse.map((marker) => (
            <MapView.Marker
              coordinate={marker.coordinates}
              description={marker.description}
              title={marker.title}
            />
          ))}*/}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.getNeighborCrops()}
            style={[styles.bubble, styles.button]}>
            <Text>Get Trees</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const FruitsGet = () => {

  const [Fruitresponse, setFruitResponse] = useState([]);
  const [NeighborCrop, setNeighbourCrops] = useState('');
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    socket.on('FruitsFromAPI', (data) => {
      setFruitResponse(data);
    });
    socket.on('neighbor plants', (data) => {
      setNeighbourCrops(data);
    });
  }, []);
  console.log(Fruitresponse);

  /*getNeighborCrops() {
    socket.emit('get neighbor crops', 'testing');
  };*/
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
        {Fruitresponse.map((marker) => (
          <MapView.Marker
            coordinate={marker.coordinates}
            description={marker.description}
            title={marker.title}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          //onPress={() => getNeighborCrops()}
          style={[styles.bubble, styles.button]}>
          <Text>Get Trees</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const imageWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mapContainer: {
    height: imageWidth,
    backgroundColor: '#43AA8B',
  },
  map: {
    flex: 1,
    height: imageWidth,
  },
  button: {
    width: 150,
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
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: 'transparent',
  },
});
