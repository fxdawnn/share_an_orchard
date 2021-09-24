import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import socketIOClient from 'socket.io-client';
import {useEffect, useState} from 'react';
import TreeList from './TreeList';
import banana from './img/40.png';
import socket from './Store/socket';

function CropCommentScreen({navigation, route}) {
  const [CommentResponse, setCommentResponse] = useState([]);
  const [CommentImage, setCommentImage] = useState();
  const [TestImage, setTestImage] = useState('');
  const {cropInfo} = route.params.item;

  useEffect(() => {
    setCommentResponse([
      {
        title: 'No Comment yet',
        description: 'Go back and add comments',
      },
    ]);
    socket.emit('get crop comments', JSON.stringify(route.params.item));

    socket.on('crop comments', (msg) => {
      var message = JSON.parse(msg);
      var comments = message.comments;
      console.log(comments);
      console.log('plants neaby rturn');
      var newComments = [];
      //setCommentResponse(comments);
      comments.map((comment) => {
        //comment.updatedAt = comment.updatedAt.split('T')[0];
        newComments.push({
          id: comment.id,
          updatedAt: comment.updatedAt.split('T')[0],
          image: comment.image,
          text: comment.text,
        });
      });
      setCommentResponse(newComments);
    });
    socket.on('crop comment image', function (image, buffer) {
      if (image) {
        console.log(' image: from client side');
        // code to handle buffer like drawing with canvas** <--- is canvas drawing/library a requirement?  is there an alternative? another quick and dirty solution?
        console.log(image);
        setCommentImage(image);
        setTestImage('data:image/jpeg;base64,' + image.buffer);
        // what can we do here to serve the image onto an img tag?
      }
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <SafeAreaView>
          <FlatList
            style={styles.root}
            data={CommentResponse}
            ItemSeparatorComponent={() => {
              return <View style={styles.CommentSeparator} />;
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(item) => {
              const Notification = item.item;
              return (
                <View style={styles.CommentContainer}>
                  <View style={styles.content}>
                    <View style={styles.contentHeader}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('CommentPhoto', {Notification})
                        }>
                        {/*<Text style={styles.name}>Anonymous</Text>*/}
                      </TouchableOpacity>
                      <Text style={styles.time}>{Notification.updatedAt}</Text>
                    </View>
                    <Text rkType="primary3 mediumLine">
                      {Notification.text}
                      {/*{TestImage}*/}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CommentPhoto', {Notification})
                    }>
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'data:image/jpeg;base64,' + Notification.image,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  CommentContainer: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  CommentSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 2,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: '#808080',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  listItemContainer: {
    //padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d9f9b1',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  logo: {
    height: 217,
    width: 217,
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  ListObjContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
});

export default CropCommentScreen;
