import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component, Modal, useEffect, useState, setState} from 'react';
import Map from '../Map';
import searchIcon from './img/search.png';
import {TouchableOpacity} from 'react-native-web';
import logo from './img/nature_tree.png';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'None',
      selectionFlag: false,
    };
  }

  editSelection() {
    // TODO connect to map
    // .....
    this.setState({selectionFlag: !this.state.selectionFlag});
  }

  editFilter() {
    // TODO connect to map
    // ......
    // open modal
  }

  render() {
    return (
      <View style={styles.bg}>
        {/*<View style={styles.searchLine}>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.searchButton} source={searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Address or Zip Code"
        />
      </View>*/}
        <Map />
        <View
          style={{
            flexDirection: 'row',
            margin: 12,
          }}>
          <TouchableOpacity
            onPress={this.editSelection()}
            style={styles.mapOptions}>
            <Text style={styles.searchInput}>
              {this.state.selectionFlag ? 'Make Selection' : 'Remove Selection'}
            </Text>
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.editFilter()}
            style={styles.mapOptions}>
            <Text style={styles.searchInput}>{this.state.filter}</Text>}
          </TouchableOpacity>
          <Modal>
            <TouchableOpacity
              onPress={() => {
                this.setState({filter: 'Harvesting'});
                // close modal
              }}>
              <Text style={styles.searchInput}>Harvesting</Text>
            </TouchableOpacity>
            ;
            <TouchableOpacity
              onPress={() => {
                this.setState({filter: 'Propagating'});
                // close modal
              }}>
              <Text style={styles.searchInput}>Propagating</Text>
            </TouchableOpacity>
            ;
            <TouchableOpacity
              onPress={() => {
                this.setState({filter: 'Exchanging'});
                // close modal
              }}>
              <Text style={styles.searchInput}>Exchanging</Text>
            </TouchableOpacity>
            ;
          </Modal>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => this.props.navigation.navigate('AddTree')}
            underlayColor="#fff">
            <Text style={styles.mainButtonText}>Add a Tree</Text>
          </TouchableOpacity>
          <Button onPress={() => {}} color="#48BBEC" title="Go" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapOptions: {
    backgroundColor: '#B2B09B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchLine: {
    borderBottomColor: '#254441',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  searchInput: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    /*lineHeight: 45,*/
    textAlign: 'center',
    color: '#254441',
  },
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  searchButton: {
    height: 40,
    width: 40,
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
