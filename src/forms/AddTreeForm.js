// Note: at first tried https://github.com/bietkul/react-native-form-builder
// but packages native-base and react-native-form-builder threw "InvariantViolation" error

// I then tried to use Controller with react-select but it didn't work with react native
// I then tried to use Controller with Picker
import React from 'react';
import {
  Picker,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function TreeForm() {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        render={({onChange, onBlur, value}) => (
          <Picker
            style={styles.input}
            onBlur={onBlur}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            selectedValue={value}>
            <Picker.Item label={'Orange'} value={'orange'} />
            <Picker.Item label={'Pineapple'} value={'pineapple'} />
            <Picker.Item label={'Avocado'} value={'avocado'} />
            <Picker.Item label={'Apple'} value={'apple'} />
            <Picker.Item label={'Pomegranate'} value={'pomegranate'} />
            <Picker.Item label={'Fig'} value={'fig'} />
          </Picker>
        )}
        name="tree_type"
        rules={{required: {value: true, message: 'Tree Type is required'}}}
        control={control}
        defaultValue=""
      />
      <Controller
        render={({onChange, onBlur, value}) => (
          <Picker
            style={styles.input}
            onBlur={onBlur}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            selectedValue={value}>
            <Picker.Item label={'Only Me'} value={'only_me'} />
            <Picker.Item label={'Neighbors'} value={'neighbors'} />
            <Picker.Item label={'Public'} value={'public'} />
          </Picker>
        )}
        name="privacy"
        rules={{required: {value: true, message: 'Privacy is required'}}}
        control={control}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(text) => onChange(text)}
            value={value}
            placeholder={'Email'}
          />
        )}
        name="Email"
        rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
        defaultValue=""
      />

      {/*<Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />*/}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    backgroundColor: 'white',
  },
});
