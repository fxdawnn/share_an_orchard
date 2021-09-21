import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';

function CropYieldScreen({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [CropName, setCropName] = useState('');
  const [CropPrivacy, setCropPrivacy] = useState('');
  const [isLemon, setLemon] = useState(false);
  const [isBanana, setBanana] = useState(false);
  const [isPineapple, setPineapple] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#43AA8B',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainButtonText}>In this area, we Recommend:</Text>
          <RNPickerSelect
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                color: '#00BFFF',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
            onValueChange={(value) => {
              setCropPrivacy(value);
              setCropName(value);
              setSelection;
              console.log(setCropPrivacy(value));
            }}
            placeholder={{
              label: 'Recommendation List',
              value: null,
            }}
            items={[
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
          {/*<View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Peach</Text>
            <CheckBox
              value={isBanana}
              onValueChange={setBanana}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Banana</Text>
          </View>*/}
          {/*<View style={styles.checkboxContainer}>
            <CheckBox
              value={isPineapple}
              onValueChange={setPineapple}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Pineapple</Text>
            <CheckBox
              value={isLemon}
              onValueChange={setLemon}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Lemon</Text>
          </View>*/}
        </View>
        <Text style={styles.mainButtonText}>
          Expected Monthly Yield of {CropName}
        </Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={170}
            yAxisLabel=""
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#00BFFF',
              backgroundGradientFrom: '#00BFD0',
              backgroundGradientTo: '#00BFFF',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#00BFD0',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <LineChart
            data={{
              labels: ['July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#00BFFF',
              backgroundGradientFrom: '#00BFD0',
              backgroundGradientTo: '#00BFFF',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#00BFD0',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        <View style={styles.space} />
        {/*<View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => navigation.navigate('CropArea')}
            underlayColor="#fff">
            <Text style={styles.mainButtonText}>Reselect Area</Text>
          </TouchableOpacity>
        </View>*/}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  mainButton: {
    /* Share an orchard */

    position: 'relative',
    width: 275,
    height: 51.83,
    /*left: 32.62,
                    top: 630.17,*/
    backgroundColor: '#dd5252',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#254441',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
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
export default CropYieldScreen;
