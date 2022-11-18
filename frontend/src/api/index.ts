const url = 'wss://194.195.113.217:8081/ws';

const socket = new WebSocket(url);

let connect = (cb) => {
  console.log('Attempting websocket connection ... ');

  socket.onopen = () => {
    console.log('Socket connection open');
  };

  socket.onmessage = (msg) => {
    console.log('message received in frontend socket');
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log('Socket Closed Connection: ', event);
  };

  socket.onerror = (error) => {
    console.log('Socket Error: ', error);
  };
};

let sendMsg = (msg) => {
  console.log('sending msg: ', msg);
  socket.send(msg);
};

export { connect, sendMsg };
