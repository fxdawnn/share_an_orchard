import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Profile extends React.Component {
  fetchPosts = async () => {
    try {
      const posts = await this.props.firebase.getUserPosts();
      let images = posts.map((item) => {
        return item.postPhoto;
      });

      this.setState({images});
      console.log(this.state.images);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {images} = this.state;
    const {themedStyle} = this.props;
    return (
      <View style={themedStyle.root}>
        <View style={[themedStyle.header, themedStyle.bordered]}>
          <Avatar
            source={{
              uri:
                'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            }}
            size="giant"
            style={{width: 100, height: 100}}
          />
          <Text category="h6" style={themedStyle.text}>
            Test User
          </Text>
        </View>
        <View style={[themedStyle.userInfo, themedStyle.bordered]}>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              {images.length}
            </Text>
            <Text appearance="hint" category="s2">
              Posts
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              0
            </Text>
            <Text appearance="hint" category="s2">
              Followers
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              0
            </Text>
            <Text appearance="hint" category="s2">
              Following
            </Text>
          </View>
        </View>
        <View style={themedStyle.buttons}>
          <Button
            style={themedStyle.button}
            appearance="ghost"
            status="danger"
            onPress={this.handleSignout}>
            LOGOUT
          </Button>
          <View style={themedStyle.separator} />
          <Button style={themedStyle.button} appearance="ghost" status="danger">
            MESSAGE
          </Button>
        </View>
        <Gallery items={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
