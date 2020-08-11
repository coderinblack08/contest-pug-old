import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import feathers from '@feathersjs/feathers';

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(socketio(socket));

app.configure(auth());

export default app;
