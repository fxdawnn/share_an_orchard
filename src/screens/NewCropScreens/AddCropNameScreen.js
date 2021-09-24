import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import NewCrop from '../../NewCrop';
import RNPickerSelect from 'react-native-picker-select';

export default function AddCropNameScreen({navigation}) {
  const [CropName, setCropName] = useState('');
  const [CropPrivacy, setCropPrivacy] = useState('');
  return (
    <View style={styles.bg}>
      <View>
        <Text>
          <Text style={styles.mainButtonText}>Food Name</Text>
        </Text>
      </View>
      <View>
        <RNPickerSelect
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 20,
              right: 10,
            },
            placeholder: {
              color: '#333333',
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          onValueChange={(value) => {
            setCropPrivacy(value);
            setCropName(value);
            console.log(setCropPrivacy(value));
          }}
          placeholder={{
            label: 'Choose From list',
            value: null,
          }}
          items={[
            {label: 'Others -- type below', value: 'null'},
            {label: 'Avocado', value: 'Avocado'},
            {label: 'Banana', value: 'Banana'},
            {label: 'Bean', value: 'Bean'},
            {label: 'Carob', value: 'Carob'},
            {label: 'Chrimoya', value: 'Chrimoya'},
            {label: 'Cherry', value: 'Cherry'},
            {label: 'Coffee', value: 'Coffee'},
            {label: 'Dragonfruit', value: 'Dragonfruit'},
            {label: 'Fig', value: 'Fig'},
            {label: 'Ginger', value: 'Ginger'},
            {label: 'Gooseberry', value: 'Gooseberry'},
            {label: 'Guava', value: 'Guava'},
            {label: 'Jaboticaba', value: 'Jaboticaba'},
            {label: 'Lilikoi', value: 'Lilikoi'},
            {label: 'Longan', value: 'Longan'},
            {label: 'Loquat', value: 'Loquat'},
            {label: 'Lychee', value: 'Lychee'},
            {label: 'Macadamia', value: 'Macadamia'},
            {label: 'Mango', value: 'Mango'},
            {label: 'Mulberry', value: 'Mulberry'},
            {label: 'Nectarine', value: 'Nectarine'},
            {label: 'Olive', value: 'Olive'},
            {label: 'Papaya', value: 'Papaya'},
            {label: 'Passionfruit', value: 'Passionfruit'},
            {label: 'Peach', value: 'Peach'},
            {label: 'Pineapple', value: 'Pineapple'},
            {label: 'Plum', value: 'Plum'},
            {label: 'Pomegranate', value: 'Pomegranate'},
            {label: 'Sapote', value: 'Sapote'},
            {label: 'Starfruit', value: 'Starfruit'},
            {label: 'Tomato', value: 'Tomato'},
            {label: 'Turmeric', value: 'Turmeric'},
            {label: 'Others -- type below', value: 'null'},
          ]}
          Icon={() => {
            return (
              <View
                style={{
                  backgroundColor: 'transparent',
                  borderTopWidth: 10,
                  borderTopColor: 'gray',
                  borderRightWidth: 10,
                  borderRightColor: 'transparent',
                  borderLeftWidth: 10,
                  borderLeftColor: 'transparent',
                  width: 0,
                  height: 0,
                }}
              />
            );
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputBox}
          autoCorrect={true}
          //value={CropName}
          //onSubmitEditing={() => this.submitCropCommonName()}
          onChangeText={(CropCommonName) => {
            setCropName(CropCommonName);
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate('CropPrivacy', {
              CropCommonName: CropName,
            })
          }
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
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
  inputBox: {
    width: 150,
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    borderRadius: 8,
  },
  highlight: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
    color: '#254441',
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
  secondaryButton: {
    /* Share an orchard */

    position: 'relative',
    width: 75,
    height: 25,
    /*left: 32.62,
                            top: 630.17,*/
    backgroundColor: '#48BBEC',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
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
  secondaryButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFF0',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 22,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#FFFFF0',
    borderRadius: 4,
    color: '#FFFFF0',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#FFFFF0',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
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
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
});
