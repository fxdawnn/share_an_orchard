import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {useEffect, useState} from 'react';
import {List, ListItem} from 'react-native-elements';
import TreeList from './TreeList';
import socket from './Store/socket';

function TreeListScreen({navigation}) {
  const [Fruitresponse, setFruitResponse] = useState([]);
  const [NeighborCrops, setNeighbourCrops] = useState('');
  const [TestImage, setTestImage] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setFruitResponse([
      {
        title: 'TestingCrop',
        description: 'new crops for testing add',
      },
    ]);
    socket.emit('get neighbor crops', 'testing');
    /*socket.on('FruitsFromAPI', (data) => {
      setFruitResponse(data);
    });*/
    socket.on('neighbor plants', (data) => {
      setNeighbourCrops(data);
    });
    socket.on('crop image', function (image, buffer) {
      if (image) {
        console.log(' image: from client side');
        // code to handle buffer like drawing with canvas** <--- is canvas drawing/library a requirement?  is there an alternative? another quick and dirty solution?
        console.log(image);
        setTestImage('data:image/jpeg;base64,' + image.buffer);
        // what can we do here to serve the image onto an img tag?
      }
    });
    socket.on('plants nearby', (msg) => {
      var plants = JSON.parse(msg);
      var nearbyFruits = plants.crops;
      var PlantsReturn = [];
      setMsg(msg);
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
          description: crop.description,
          coordinates: {
            latitude: crop.latitude,
            longitude: crop.longitude,
          },
          id: crop.id,
          time: crop.updatedAt.split('T')[0],
          option: crop.option,
          privacy: crop.privacy,
          userId: crop.userId,
          image: crop.image,
        });
        console.log(
          'plant coordination:' +
            JSON.stringify(crop.coordinates) +
            'crop title: ' +
            crop.common_name,
        );
      });
      setFruitResponse(PlantsReturn.reverse());
    });
  }, []);

  function getNeighborCrops() {
    socket.emit('get neighbor crops', 'testing');
  }
  return (
    <ScrollView>
      <View>
        <TreeList navigation={navigation} image={TestImage} />
        <SafeAreaView>
          <ScrollView>
            {/*<Text>{JSON.stringify(Fruitresponse)}</Text>*/}
            <FlatList
              style={styles.root}
              data={Fruitresponse}
              ItemSeparatorComponent={() => {
                return <View style={styles.CommentSeparator} />;
              }}
              keyExtractor={(item) => {
                return item.title;
              }}
              renderItem={(item) => {
                const Notification = item.item;
                return (
                  <View style={styles.CommentContainer}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('TreeInfo', {item})}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: 'data:image/jpeg;base64,' + Notification.image,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.content}>
                      <View style={styles.contentHeader}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('TreeInfo', {item})
                          }>
                          <Text style={styles.name}>{Notification.title}</Text>
                        </TouchableOpacity>
                        <Text style={styles.time}>{Notification.time}</Text>
                      </View>
                      <Text rkType="primary3 mediumLine">
                        {Notification.description}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  CommentContainer: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  CommentSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
    backgroundColor: '#737373',
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
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
  ListObjContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
});

export default TreeListScreen;
