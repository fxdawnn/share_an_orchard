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
  StatusBar,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {styles} from '../styles';
import socket from '../Store/socket';
import {AuthContext} from '../Navigation/AuthNavigator';
import SimpleImagePicker from '../CropImagePicker';
import CommentImageImagePicker from './CommentImagePicker';
import propsToAriaRole from 'react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole';
export default function AddCommentScreen({navigation, route}) {
  const [Info, setInfo] = useState('');
  const {item} = route.params.item;
  const user = useContext(AuthContext);

  async function submitCropComment() {
    let CropComment = {
      text: Info,
      crop_id: route.params.item.index,
      userId: user.user.id,
    };
    socket.emit('plant comment', JSON.stringify(CropComment));
    setInfo('done sending');
  }

  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => console.log(data);
  const [text, setText] = useState('');
  return (
    <ScrollView style={styles.bg}>
      <StatusBar barStyle="light-content" />
      <CommentImageImagePicker crop={item} userId={user.user.id}/>
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
    </ScrollView>
  );
}
