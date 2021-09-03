import io from 'socket.io-client';
const socket = io('http://34.121.9.120:3000');
socket.connect();
export default socket;
