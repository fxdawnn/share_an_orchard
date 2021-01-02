import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
var markers = [
    {
        latitude: 37.78825,
        longitude: -122.4324,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
    },
    {
        latitude: 37.78824,
        longitude: -122.4324,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
    },
    {
        latitude: 37.78823,
        longitude: -122.4324,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
    }
];

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
                annotations={markers}
            >
                <MapView.Marker
                    coordinate={{latitude: 37.78825,
                        longitude: -122.4324}}
                    title={"title"}
                    description={"description"}
                />
            </MapView>
        </View>

    );
  }
}


const imageWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    mapContainer: {
        height: imageWidth,
        backgroundColor: '#43AA8B'
    },
    map: {
        flex: 1,
        height: imageWidth
    }
});
