import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                //provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            ></MapView>
        </View>

    );
  }
}

const imageWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    mapContainer: {
        height: imageWidth * (2 / 3),
        backgroundColor: '#43AA8B'
    },
    map: {
        flex: 1,
        height: imageWidth * (2 / 3)
    }
});
