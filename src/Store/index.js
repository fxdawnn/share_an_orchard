import {createStore, combineReducers} from 'redux';
import users, {gotUsers, gotNewUser} from './users';
import messages, {gotMessages, gotNewMessage} from './messages';
import user, {gotUser} from './user';
import socket from './socket';

const reducers = combineReducers({users, messages, user});

const store = createStore(reducers);

let navigate;

socket.on('priorMessages', (messages) => {
  store.dispatch(gotMessages(messages));
});

socket.on('userCreated', (response) => {
  const {user, users} = response;
  store.dispatch(gotUser(user));
  store.dispatch(gotUsers(users));
  navigate('Users', users);
});

socket.on('usersCreated', (response) => {
  const {user, users} = response;
  store.dispatch(gotUser(user));
  store.dispatch(gotUsers(users));
  navigate('Profile', user);
});

socket.on('newUser', (user) => {
  store.dispatch(gotNewUser(user));
});

socket.on('incomingMessage', (message) => {
  store.dispatch(gotNewMessage(message));
});

export const initialization = (user, users) => {
  store.dispatch(gotUser(user));
  store.dispatch(gotUsers(users));
};

export const login = (credentials, navigation) => {
  socket.emit('newUser', credentials);
  navigate = navigation.navigate;
};

export const findUser = (firebase_token, navigation) => {
  socket.emit('findUser', firebase_token);
  navigate = navigation.navigate;
};

export const openChat = (users) => {
  socket.emit('chat', users);
};

export const sendMessage = (text, sender, receiver) => {
  socket.emit('message', {text, sender, receiver});
};

export default store;
export * from './users';
export * from './messages';
