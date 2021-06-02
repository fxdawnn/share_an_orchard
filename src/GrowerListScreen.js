import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

import socketIOClient from 'socket.io-client';
import {useEffect, useState} from 'react';
import {List, ListItem} from 'react-native-elements';
//import logo from 'img/nature_tree.png';
const ENDPOINT = 'http://192.168.1.246:3000';
import TreeList from './TreeList';

function GrowerListScreen({navigation}) {
  const [Fruitresponse, setFruitResponse] = useState([]);
  const [NeighborCrops, setNeighbourCrops] = useState('');
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    setFruitResponse([
      {
        title: 'TestingCrop',
        description: 'new crops for testing add',
      },
    ]);
    socket.emit('get neighbor crops', 'testing');
    socket.on('FruitsFromAPI', (data) => {
      setFruitResponse(data);
    });
    socket.on('neighbor plants', (data) => {
      setNeighbourCrops(data);
    });
    socket.on('plants nearby', (msg) => {
      var plants = JSON.parse(msg);
      var nearbyFruits = plants.crops;
      var PlantsReturn = [];
      console.log(plants);
      console.log('plants neaby rturn');
      nearbyFruits.map((crop) => {
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
      setFruitResponse(PlantsReturn);
    });
  }, []);

  function getNeighborCrops() {
    socket.emit('get neighbor crops', 'testing');
  }
  return (
    <View>
      <TreeList />
      {/*<View>
        <SafeAreaView style={styles.listItemContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Fruitresponse}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TreeInfo')}
                style={[styles.bubble, styles.button]}>
                <Text style={styles.item}>{item.title}</Text>
              </TouchableOpacity>
              <ListItem
                  title={
                    <TouchableOpacity
                      //onPress={() => navigation.navigate('TreeInfo')}
                      style={[styles.bubble]}>
                      <Text style={styles.item}>{item.title}</Text>
                    </TouchableOpacity>
                  }
                  subtitle={'santa monica'}
                  bottomDivider={true}
                />
            )}
          />
        </SafeAreaView>
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  listItemContainer: {
    //padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d9f9b1',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
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
  secondaryButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
  logo: {
    height: 217,
    width: 217,
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default GrowerListScreen;
