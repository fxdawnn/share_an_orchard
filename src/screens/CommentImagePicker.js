import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import * as ImagePicker from 'react-native-image-picker';

export default function CommentImageImagePicker(props) {
  const [imageSource, setImageSource] = useState(null);
  const [filePath, setFilePath] = useState({});
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };
  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
        const data = new FormData();
        data.append('name', 'avatar');
        data.append('crop_id', props.crop.id);
        data.append('userId', props.userId);
        data.append('fileData', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        };
        fetch('http://34.121.9.120:3001/' + 'uploadComment', config)
          .then((checkStatusAndGetJSONResponse) => {
            console.log(checkStatusAndGetJSONResponse);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>
          Take photo of the {props.crop.title}
        </Text>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
        <TouchableOpacity
          activeOpacity={0.5}
          /*style={styles.secondaryButton}*/
          onPress={() => captureImage('photo')}>
          <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
          <View style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Launch Camera</Text>
          </View>
        </TouchableOpacity>
        {/*<TouchableOpacity
          activeOpacity={0.5}
          style={styles.secondaryButton}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.secondaryButtonText}>Choose Image</Text>
        </TouchableOpacity>*/}
        {/*<Text style={styles.secondaryButtonText}>
          {JSON.stringify(props.crop)}
        </Text>*/}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  secondaryButton: {
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
  secondaryButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 40,
    textAlign: 'center',
    color: '#FFFFF0',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
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
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
    alignItems: 'center',
  },
});
