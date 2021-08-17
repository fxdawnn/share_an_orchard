import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {connect} from 'react-redux';
import {openChat, sendMessage} from '../../Store';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
    this.state = {
      user: props.user,
      receiver: props.route.params.receivingUser,
    };
  }

  componentDidMount() {
    openChat({
      user: this.props.user,
      receiver: this.props.route.params.receivingUser,
    });
  }

  send(message) {
    sendMessage(
      message.text,
      this.props.user,
      this.props.route.params.receivingUser,
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.props.messages}
        user={{
          _id: this.props.user.id,
        }}
        onSend={(message) => this.send(message[0])}
      />
    );
  }
}

const mapState = (state, {navigation}) => ({
  messages: state.messages,
  user: state.user,
  receiver: state.receiver,
});

export default connect(mapState)(Chat);
