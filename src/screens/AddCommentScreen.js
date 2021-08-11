import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../styles';
import socketIOClient from 'socket.io-client';
import CropComments from '../CropComment';
const ENDPOINT = 'http://34.121.9.120:3000';
const socket = socketIOClient(ENDPOINT);

export default function AddCommentScreen({navigation, route}) {
  const [Info, setInfo] = useState('');
  const {item} = route.params.item;
  async function submitCropComment() {
    let CropComment = {text: Info, crop_id: route.params.item.index};
    socket.emit('plant comment', JSON.stringify(CropComment));
    setInfo('done sending');
  }

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <View style={styles.bg}>
      <Text style={styles.titleText}>
        Tell everyone what you think about the {item.title}!
      </Text>
      <View style={{padding: 10}}>
        <TextInput
          style={{
            height: 100,
            borderColor: '#7a42f4',
            borderWidth: 1,
          }}
          placeholder="Type here to comment about the crop!"
          onChangeText={(text) => setInfo(text)}
          defaultValue={text}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={submitCropComment}
          underlayColor="#fff">
          <Text style={styles.mainButtonText}> Add Comment </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
