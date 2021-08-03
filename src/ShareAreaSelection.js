import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://34.121.9.120:3000';

import MapView, {MAP_TYPES, Polygon, ProviderPropType} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 33.99632;
const LONGITUDE = -118.48138;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class ShareAreaSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      polygons: [],
      editing: null,
      creatingHole: false,
    };
  }

  finish() {
    const {polygons, editing} = this.state;
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
    });
  }

  createHole() {
    const {editing, creatingHole} = this.state;
    if (!creatingHole) {
      this.setState({
        creatingHole: true,
        editing: {
          ...editing,
          holes: [...editing.holes, []],
        },
      });
    } else {
      const holes = [...editing.holes];
      if (holes[holes.length - 1].length === 0) {
        holes.pop();
        this.setState({
          editing: {
            ...editing,
            holes,
          },
        });
      }
      this.setState({creatingHole: false});
    }
  }

  onPress(e) {
    const {editing, creatingHole} = this.state;
    if (!editing) {
      this.setState({
        editing: {
          id: id++,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        },
      });
    } else if (!creatingHole) {
      this.setState({
        editing: {
          ...editing,
          coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
        },
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate,
      ];
      this.setState({
        editing: {
          ...editing,
          id: id++, // keep incrementing id to trigger display refresh
          coordinates: [...editing.coordinates],
          holes,
        },
      });
    }
  }

  render() {
    const mapOptions = {
      scrollEnabled: true,
    };

    if (this.state.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = (e) => this.onPress(e);
    }

    return (
      <View style={styles.mapContainer}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          mapType={MAP_TYPES.HYBRID}
          initialRegion={this.state.region}
          onPress={(e) => this.onPress(e)}
          {...mapOptions}>
          {this.state.polygons.map((polygon) => (
            <Polygon
              key={polygon.id}
              coordinates={polygon.coordinates}
              holes={polygon.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          ))}
          {this.state.editing && (
            <Polygon
              key={this.state.editing.id}
              coordinates={this.state.editing.coordinates}
              holes={this.state.editing.holes}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}
        </MapView>
        <View style={styles.buttonContainer}>
          {this.state.editing && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.createHole()}
              style={[styles.bubble, styles.button]}>
              <Text>
                {this.state.creatingHole
                  ? 'Finish Selecting'
                  : 'Create Area Selection'}
              </Text>
            </TouchableOpacity>
          )}
          {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.finish()}
              style={[styles.bubble, styles.button]}>
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

ShareAreaSelection.propTypes = {
  provider: ProviderPropType,
};
const imageWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mapContainer: {
    height: imageWidth,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
    //backgroundColor: '#43AA8B',
  },
  map: {
    flex: 1,
    height: imageWidth,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 150,
    paddingHorizontal: 0,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  secondaryButton: {
    /* Share an orchard */

    position: 'relative',
    //width: 315.77,
    //height: 51.83,
    /*left: 32.62,
                    top: 630.17,*/
    backgroundColor: '#43aa8b',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#DD5252',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },

  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 50,
    backgroundColor: 'transparent',
  },
});

export default ShareAreaSelection;
