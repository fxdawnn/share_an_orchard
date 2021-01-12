import {Button, Dimensions, Text, View, StyleSheet} from 'react-native';
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
        <Text>Community Yield Chart</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Add Peach?</Text>
          <CheckBox
            value={isBanana}
            onValueChange={setBanana}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Add Banana?</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isPineapple}
            onValueChange={setPineapple}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Add Pineapple?</Text>
          <CheckBox
            value={isLemon}
            onValueChange={setLemon}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Add Lemon?</Text>
        </View>
        <Text>Add Trees to location: {isLemon + isSelected + isPineapple + isBanana}</Text>
      </View>
      <Button
        title="Go to Area Selection"
        onPress={() => navigation.navigate('ShareAreaSelection')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
});
export default CropYieldScreen;
