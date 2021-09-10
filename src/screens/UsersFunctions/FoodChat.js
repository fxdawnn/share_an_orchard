import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import {openChat, sendMessage} from '../../Store';

class FoodChat extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
    this.state = {
      user: props.route.params.user,
      receiver: props.route.params.receivingUser,
      messages: [
        {
          _id: 75,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 79,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    };
  }

  componentDidMount() {
    openChat({
      user: this.state.user,
      receiver: this.state.receivingUser,
    });
  }

  send(message) {
    sendMessage(
      message.text,
      this.state.user,
      this.state.receivingUser,
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        user={{
          _id: this.state.user.id,
        }}
        onSend={(message) => this.send(message[0])}
      />
    );
  }
}

/*const mapState = (state, {navigation}) => ({
  messages: state.messages,
  user: state.user,
  receiver: state.receiver,
});

export default connect(mapState)(FoodChat);*/
