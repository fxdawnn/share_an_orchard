import * as React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import logo from './img/nature_tree.png';
import menuIcon from './img/menu_icon.png';

// this line below used to be used in Stack Navigator on App.js
//options={{headerTitle: () => <Header name={'Notifications'} />}}

function Header({name, navigation}) {
  return (
    <View style={styles.row}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Image style={styles.menu} source={menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#43aa8b',
  },
  logo: {
    height: 69,
    width: 69,
    margin: 12,
    /*alignSelf: 'left',*/
  },
  text: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 28,
    /*lineHeight: 45,*/
    textAlign: 'center',
    color: '#254441',
    marginTop: 24,
  },
  menu: {
    alignSelf: 'flex-end',
    height: 69,
    width: 69,
    margin: 12,
  },
});

export default Header;
