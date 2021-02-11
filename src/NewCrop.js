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
} from 'react-native';
import socketIOClient from 'socket.io-client';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const LATITUDE = 33.99632;
const LONGITUDE = -118.48138;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

const ENDPOINT = 'http://localhost:3000';

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
    };
  }
  componentDidMount() {
    this.socket = socketIOClient(ENDPOINT);
    this.socket.on('plants nearby', (msg) => {
      let plants = JSON.parse(msg)
      console.log('plants nearby' + plants);
    });
    // console.log('NewCrop socket' + this.state.CropCommonName);
  }

  submitCropCommonName() {
    let NewCrop = {
      common_name: this.state.CropCommonName,
      coordinates: [this.state.a.longitude, this.state.a.latitude],
    };
    this.socket.emit('plant info', JSON.stringify(NewCrop));
    this.setState({CropCommonName: ''});
    console.log('NewCrop submit location' + JSON.stringify(NewCrop));
  }

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
                  onDragEnd={(e) => log('onDragEnd', e)}
                  onPress={(e) => log('onPress', e)}
                  draggable
                />
              </MapView>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                {/*<TestTree name="lemon tree" />*/}
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Share an Orchard</Text> Input
                  New Crop Common Name
                </Text>
              </View>
            </View>
            <View>
              <TextInput
                style={{height: 40, borderWidth: 2}}
                autoCorrect={false}
                value={this.state.CropCommonName}
                onSubmitEditing={() => this.submitCropCommonName()}
                onChangeText={(CropCommonName) => {
                  this.setState({CropCommonName});
                }}
              />
              <Button
                onPress={() => {
                  this.submitCropCommonName();
                }}
                title={'Add Crop'}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const TestTree = (tree) => {
  const [isAlive, setIsAlive] = useState(false);
  return (
    <View>
      <Text>
        I am {tree.name}, and I am {isAlive ? 'alive' : 'dead'}!
      </Text>
      <Button
        onPress={() => {
          setIsAlive(true);
        }}
        disabled={isAlive}
        title={isAlive ? 'Thank you!' : 'Water me!'}
      />
    </View>
  );
};

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
});
