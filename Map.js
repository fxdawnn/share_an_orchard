import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';
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
      ],
    };
  }

  render() {
    return (
      <View style={styles.mapContainer}>
        <FruitsGet />
      </View>
    );
  }
}
const FruitsGet = () => {
  const [Fruitresponse, setFruitResponse] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FruitsFromAPI', (data) => {
      setFruitResponse(data);
    });
  }, []);
  console.log(Fruitresponse);
  return (
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
});
