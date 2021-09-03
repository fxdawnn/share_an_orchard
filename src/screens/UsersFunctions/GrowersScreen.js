import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-paper/src/components/MaterialCommunityIcon';

class Users extends React.Component {
  constructor() {
    super();
    this.openChat = this.openChat.bind(this);
  }

  openChat(receivingUser) {
    this.props.navigation.navigate('Chat', {receivingUser: receivingUser});
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          style={styles.root}
          data={this.props.users}
          extraData={this.props}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(item) => {
            const Notification = item.item;
            return (
              <View style={styles.container}>
                {/*<TouchableOpacity onPress={() => {}}>
                  <Image
                    style={styles.image}
                    source={{uri: Notification.image}}
                  />
                </TouchableOpacity>*/}
                <View style={styles.content}>
                  <View style={styles.contentHeader}>
                    {/*<TouchableOpacity
                      onPress={() => this.openChat(Notification)}>
                      <Text style={styles.name}>{Notification.name}</Text>
                    </TouchableOpacity>*/}
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate(
                          'Grower Profile',
                          Notification,
                        )
                      }>
                      <Text style={styles.name}>
                        {Notification.name}
                        <MaterialCommunityIcons
                          name="account"
                          /*color={color}
                            size={size}*/
                        />
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.time}
                      onPress={() => this.openChat(Notification)}>
                      <MaterialCommunityIcons
                        name="chat"
                        color={'#00BFFF'}
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text rkType="primary3 mediumLine">{Notification.bio}</Text>
                  {/*<Text rkType="primary3 mediumLine">
                    {JSON.stringify(item)}
                  </Text>*/}
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    );
  }
}

const mapState = (state) => ({
  users: state.users.filter((user) => user.id !== state.user.id),
});

export default connect(mapState)(Users);

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  container: {
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
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
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
});
