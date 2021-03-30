import {
  Button,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

function CropYieldScreen({navigation}) {
  const [isSelected, setSelection] = useState(false);
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
      <View style={styles.container}>
        <Text>For beginner grower within Santa Monica, we recommend:</Text>
        <View style={styles.checkboxContainer}>
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
        </View>
        <View style={styles.checkboxContainer}>
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
        </View>
        <Text>
          Add Trees to location: {isLemon + isSelected + isPineapple + isBanana}
        </Text>
      </View>
      <Text>Community Yield Chart</Text>
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
          height={220}
          yAxisLabel=""
          yAxisSuffix="kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
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
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('CropArea')}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}>Reselect Area</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
});
export default CropYieldScreen;
