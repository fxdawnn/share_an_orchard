import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
} from 'react-native';
import logo from '../../img/nature_tree.png';
import {Card, Icon} from 'react-native-elements';
import {useEffect, useState} from 'react';
import socket from '../../Store/socket';

function AddCropInfoScreen({route, navigation}) {
  const {item} = route.params.item;
  const [msg, setMsg] = useState('');
  useEffect(() => {
    //socket.emit('find food info', item);
    socket.on('plant created', (plant) => {
      setMsg(plant);
    });
  });
  return (
    <ScrollView>
      <View style={styles.bg}>
        <View style={styles.space} />
        <View style={styles.headerContainer}>
          <View style={styles.headerColumn}>
            <Image style={styles.userImage} source={{uri: logo}} />
            <Text style={styles.userNameText}>{item.title}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.space} />
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {'Irvine'}, {'CA'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.bodyContent}>
            <Text style={styles.info}>
              {' '}
              {item.privacy} / {item.option}
            </Text>
            <View style={styles.space} />
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddCropPhoto', {crop: msg[0][0]})
              }
              style={styles.buttonContainer}>
              <Text style={styles.mainButtonText}>Add photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.buttonContainer}>
              <Text style={styles.mainButtonText}>Finish</Text>
            </TouchableOpacity>
            <View>
              <Text>cool {JSON.stringify(route.params.foodCreated)}</Text>
            </View>
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
            <View style={styles.space} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
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
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 305,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#00BFFF',
  },
  mainButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 40,
    textAlign: 'center',
    color: '#FFFFF0',
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
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AddCropInfoScreen;
